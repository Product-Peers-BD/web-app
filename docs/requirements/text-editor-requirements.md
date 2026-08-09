# Feature: Rich Text Editor (`packages/text-editor`)

## Overview

Shared Tiptap v3-based WYSIWYG editor used for every rich text field across the platform: Event/Contest Description, Article/Case Study Content, Product Description. One editor, one document schema, used everywhere so behavior and rendering stay identical regardless of which feature is using it.

---

## 1. Data model

- **Canonical stored format is Tiptap JSON** (`{ type: 'doc', content: [...] }`), serialized via `JSON.stringify(editor.getJSON())`. HTML is never the source of truth — it's generated at render time only.
- **The same extension array is used for editing, HTML generation, and text generation.** A single `tiptapExtensions()` function is the sole source of truth for the schema; nothing else defines extensions. Mismatched extension sets between editor and viewer produce schema errors on render — this is the most important architectural rule to hold onto.

### Three consumers

| Surface      | Component                           | Purpose                                                         |
| ------------ | ----------------------------------- | --------------------------------------------------------------- |
| Authoring    | `TextEditor`                        | Full editing UI                                                 |
| Display      | `TextEditorViewer`                  | Read-only render of stored JSON to styled HTML                  |
| Derived text | `generateTextFromTiptapJSONContent` | Plain-text extraction (fallback Excerpt, search indexing, etc.) |

---

## 2. Feature scope

### 2.1 Text formatting (marks)

Bold, Italic, Underline, Strikethrough, Inline code, **Superscript, Subscript**, Text color (palette), Highlight (palette), Link.

- Link: cursor-inside-a-link toggles the toolbar button to Unlink; otherwise opens a popover (URL input, Enter-to-apply, apply button, open-in-new-tab, clear). Applying replaces the whole link range, not just the selected slice.
- Color/Highlight: palette-based (not a free color picker), values chosen so they read consistently in light and dark themes. "Default" resets to a theme variable, not an unset — so it tracks whichever theme is active.

### 2.2 Block nodes

Paragraph, Headings, Bullet/Ordered list, Task list, Blockquote, Code block, Horizontal rule, Text align (left/center/right/justify — headings & paragraphs only), **Table**, **Video embed**.

- **Heading mapping is a hard requirement**: the page owns `h1` — the editor must never emit one. Headings exposed to the user as _Heading 1–5_ map to HTML `h2`–`h6`. Both the toolbar and slash-command palette must use the same offset.
- **Table**: insert a default 3×3 table; add/remove row; add/remove column; delete table. **No merge/split cells** this phase.
- **Video embed**: paste a YouTube URL → becomes a responsive embedded player node in the content body. YouTube only, matching the platform-wide convention that Video fields elsewhere (Events, Contests) are YouTube URLs. This is a genuinely separate concept from those dedicated Video fields — a Video field is metadata about the content, an in-body embed is part of the narrative itself; both can exist on the same piece of content.

### 2.3 Images

- Inserted **exclusively through the Media Library modal** (`packages/media-library`) — never a raw file input, never a URL prompt, and **never base64**.
- **`allowBase64` is explicitly disabled.** Enabling it would let a user paste/drag an image directly into the editor as an inline base64 data URI, completely bypassing Media Library's size limits, type validation, `uploaded_by` tracking, and storage location. Paste and drag-and-drop of image files into the editor body must be intercepted and routed through the same Media Library upload flow as a toolbar-triggered insert, not embedded inline.
- Custom `image` node extends the base image extension with `width` (default `'100%'`), `height` (default `'auto'`), and `align` (`left | center | right | null`, serialized as `data-align`).
- **Resizing**: drag handles on left/right edges, live width update preserving aspect ratio, min width 50px, max width = container width. Committed to node attributes on mouse-up.
- **Image bubble menu** (appears when an image is selected): align left/center/right (toggle off if already active), full width, **Alt text**, delete.
- **Alt text**: auto-filled from the selected Media file's `name` field at insert time (per `media-library-requirements.md`, `name` is the editable display label). The image bubble menu's **Alt text** action lets the author override it per-instance afterward — auto-filled by default so nobody's ever missing alt text, but correctable when the filename-derived default isn't accurate.
- **PDF handling**: images inserted into content are images only — PDFs aren't an embeddable content-body node this phase. (PDFs remain relevant elsewhere, e.g. Contest Submission's Presentation field, just not as an in-editor embed.)

### 2.4 Slash commands

Typing `/` opens a filtered command palette anchored at the caret: Paragraph, Heading 1–5, Bullet List, Numbered List, Task List, Inline Code, Code Block, Blockquote, Bold, Italic, Underline, Strike, Image, Table, Video, Align start/center/end/justify, Divider.

- Each item: `title`, `description`, `icon`, `command`, `search_term[]` — filtering matches the query against any search term, so aliases (`h1`, `todo`, `hr`, `photo`, `yt`) all resolve.
- Every command **must** call `deleteRange(range)` before applying, so the typed `/query` text doesn't get left behind.
- Keyboard: ArrowUp/ArrowDown wrap, Enter selects, Escape closes, selected item scrolls into view.

### 2.5 Toolbar

Fixed bar, horizontally scrollable on narrow screens, grouped with separators:

`Undo/Redo` │ `Preview` │ `Text blocks` `Lists` `Blockquote` `Code block` `Table` │ `Bold Italic Underline Strike Code` │ `Color/Highlight` │ `Link` │ `Align + Divider` │ `Super/Subscript` │ `Image` `Video`

- Grouped controls (text blocks, lists, colors) collapse into popovers whose trigger reflects the active option.
- Every button is `type="button"` (mandatory — the editor renders inside forms and would otherwise submit them).
- Every button has an `aria-label` and a tooltip.

### 2.6 Bubble menu (text selection)

Appears on non-empty selection while focused (80ms update delay). Must **not** appear when an image/image-placeholder is active — the image bubble menu handles that case. Subset of the toolbar: text blocks, lists, blockquote, code block, marks, colors, link.

### 2.7 Preview — both surfaces, confirmed

- **In-editor Preview dialog**: toolbar button opens a dialog rendering `TextEditorViewer` against the current `editor.getJSON()` — a fast in-form glance at formatting without leaving the page.
- **Full Draft Preview Page** (Member Dashboard, `member-dashboard/content-library.md`): the complete page-layout preview, matching the actual public page. Both are kept — they serve different moments (checking formatting mid-edit vs. reviewing the whole piece before submitting).

### 2.8 Drag handle

Global drag handle in the left gutter of the hovered block, letting the user reorder blocks. Visible only while the editor is hovered.

### 2.9 Placeholder

Shown only on the currently focused empty node. Accepts a custom string, `false` (disabled), or defaults to `"Write something..."`.

### 2.10 Tooltips

All controls wrapped in a tooltip, globally suppressible via a `hideTooltip` prop. Disabled when the underlying command is unavailable.

---

## 3. Excerpt / Summary field (new — resolves a real gap)

**Articles, Case Studies, and Products** each need an OG meta description for social sharing (already required in each of those docs), but none had a source for it. Resolved as follows — applies to **all three**, not just Articles/Case Studies:

| Field   | Required | Notes                                                          |
| ------- | -------- | -------------------------------------------------------------- |
| Excerpt | No       | Textarea, ~200 characters soft-recommended (not hard-enforced) |

- **If filled**: used directly as the OG meta description (and can double as a short teaser on listing cards, where relevant).
- **If left blank**: falls back to auto-truncated plain text derived from the main Content field via `generateTextFromTiptapJSONContent`. Nothing is ever missing a description; authors who want a hand-crafted one can write it, everyone else gets a reasonable default for free.

_(This field is being added to `articles-and-case-studies-requirements.md` and `products-requirements.md` as part of this doc's rollout — see the note at the bottom of each of those files.)_

---

## 4. Technical requirements

### 4.1 Dependencies

Tiptap v3 (`@tiptap/core`, `@tiptap/pm`, `@tiptap/react`, `@tiptap/html`, `@tiptap/starter-kit`, `@tiptap/suggestion`), plus extensions for drag-handle, highlight, image, list, placeholder, subscript, superscript, text-align, text-style, **table**, and a YouTube/video embed extension. `tippy.js` for slash-command positioning, `lucide-react` for icons, shadcn/ui-style `Button`/`Popover`/`Dialog`/`Tooltip` primitives.

> **Version pinning matters.** Tiptap 3 moved bubble menus to `@tiptap/react/menus`, list extensions to `@tiptap/extension-list`, and `Color` into `@tiptap/extension-text-style`. Tiptap 2 imports will not resolve.

### 4.2 Package structure

Following this project's established convention (`conventions.md`) — flat `src/`, no extra nesting layer:

```
packages/text-editor/
└── src/
    ├── index.tsx                    # <TextEditor />
    ├── text-editor-viewer.tsx       # <TextEditorViewer />
    ├── style.ts                     # shared Tailwind class strings
    ├── context/                     # React context
    ├── hooks/                       # use-editor-provider
    ├── types/
    ├── utils/                       # JSON validation, plain-text extraction
    ├── extensions/
    │   ├── index.tsx                # tiptapExtensions() — single source of truth
    │   ├── slash-command/
    │   ├── table/
    │   ├── video-embed/
    │   └── upload-image/            # custom image node, Media Library seam, image bubble menu
    └── components/                  # one file per toolbar group
```

### 4.3 Public API

```ts
type TextEditorProps = {
	content?: Content;
	onChange?: (editor: Editor) => void;
	onMount?: (editor: Editor) => void;
	placeholder?: string | boolean;
	hideBubbleMenu?: boolean;
	hideTooltip?: boolean;
};

function TextEditor(props: TextEditorProps): JSX.Element;
function TextEditorViewer(props: {
	content: JSONContent | null | undefined;
	className?: string;
}): JSX.Element;
function validateTiptapJSONContent(
	content: string | null | undefined
): JSONContent | null;
function generateTextFromTiptapJSONContent(content: string): string;
```

`onChange` hands back the whole `Editor` instance, not a pre-serialized string — the caller decides representation (`JSON.stringify(editor.getJSON())` for storage, `editor.getText()` for validation). Keeps serialization policy out of the editor itself.

### 4.4 Component architecture

```
<TextEditor>
  └── editorContext.Provider  { editor, hideBubbleMenu, hideTooltip }
      └── <TooltipProvider>
          └── <MediaProvider>                    (packages/media-library)
              └── <EditorContentWrapper>
                  ├── <ToolBar />
                  ├── <EditorContent />
                  ├── <BubbleMenu />
                  ├── <ImageBubbleMenu />
                  └── <MediaLibrary />            (packages/media-library)
```

- Every toolbar control reads `editor` from context via `useEditorProvider()` (throws if used outside the provider) — no control accepts an `editor` prop directly.
- `useEditor` returns `null` on first render (SSR); the component returns an empty fragment until the instance exists.
- Every control subscribes via `useEditorState({ editor, selector })`, selecting only the booleans it needs — no control re-renders on unrelated document changes.

### 4.5 SSR requirements

- `'use client'` on the editor entry point and any interactive sub-components (slash command list, etc.).
- `immediatelyRender: false` on `useEditor` — mandatory under Next.js App Router, otherwise hydration mismatches.
- `TextEditorViewer` is a **Server Component**: calls `generateHTML` and emits via `dangerouslySetInnerHTML`, no editor instance, no client JS shipped for read-only rendering.

### 4.6 Media Library integration

Matches the seam pattern already established in `media-library-requirements.md`, not a bespoke one:

1. An extension declares an `openMediaLibrary()` command and event; the command's only job is emitting the event.
2. The editor wrapper subscribes to that event to open the `MediaLibrary` modal (from `packages/media-library`), cleans up on unmount.
3. On selection, files are inserted with `chain().focus().setImage({ src, alt }).run()` — one chain per file, so multi-select inserts multiple images. `alt` is pre-filled from the Media file's `name`.
4. TypeScript module augmentation registers the custom command/event so `editor.commands.openMediaLibrary()` typechecks.

**Porting note**: to swap the asset source, only the `<MediaLibrary />` component and its select-callback need to change — the extension, toolbar button, and slash command are all source-agnostic.

### 4.7 Content validation

Stored content is untrusted (empty string, malformed JSON, or — since this project is greenfield — most commonly just a genuinely empty draft). Before any render:

```ts
validateTiptapJSONContent(raw); // → JSONContent | null
```

Checks, in order: non-empty string → `JSON.parse` in try/catch → `parsed.type === 'doc'` → `Array.isArray(parsed.content)`. Anything failing returns `null`; the viewer renders nothing rather than throwing. **This guard is mandatory at every read site** — Events, Contests, Articles, Case Studies, Products, wherever stored content gets rendered.

### 4.8 Styling requirements

Three exported class strings keep editor and viewer visually identical: `proseStyles` (Tailwind Typography base), `tiptapEditorStyleClasses` (editor root — capped `max-h-[800px]` with internal scroll), `tiptapContentViewerStyleClasses` (viewer root — uncapped). Both roots carry stable class hooks (`.tiptap-text-editor`, `.text-editor-viewer`) for global CSS targeting. Global CSS (not Tailwind utility classes alone) is required to cover ProseMirror internals — inline code chip styling, code block padding, list marker color, task list checkboxes, placeholder pseudo-element, bubble menu z-index/transitions, slash palette animation, image resize handles, table borders, video embed responsive sizing, drag handle visibility.

### 4.9 Performance requirements

- Selector-scoped `useEditorState` subscriptions everywhere (§4.4).
- `updateDelay: 80` on the bubble menu to avoid thrash during drag-selection.
- Image resize node view attaches `mousemove`/`mouseup` listeners to `document` only during an active drag, removed on mouse-up.

### 4.10 Accessibility requirements

- `aria-label` on every icon button.
- Full keyboard navigation in the slash palette.
- Tooltip triggers disabled in lockstep with command availability.
- Task list checkboxes are `pointer-events: none` in the viewer (read-only content can't be toggled).

---

## 5. Integration pattern

```tsx
<Controller
	name="description"
	control={form.control}
	render={({ field, fieldState }) => (
		<>
			<TextEditor
				content={field.value || ''}
				onChange={(editor) =>
					field.onChange(JSON.stringify(editor.getJSON()))
				}
				placeholder="Write, type '/' for commands..."
			/>
			{fieldState.error && <FieldError errors={[fieldState.error]} />}
		</>
	)}
/>
```

`content` is uncontrolled after mount — Tiptap owns the document once initialized. To reset programmatically, capture the instance via `onMount` and call `editor.commands.setContent(...)`.

**Rendering stored content:**

```tsx
<TextEditorViewer content={validateTiptapJSONContent(record.description)} />
```

**Deriving plain text (Excerpt fallback, read-time calculation, search indexing):**

```tsx
const derived = generateTextFromTiptapJSONContent(record.description);
```

---

## 6. Common pitfalls

| Pitfall                                          | Consequence                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------ |
| Different extension arrays for editor vs. viewer | Schema errors on render                                                  |
| Missing `type="button"`                          | Toolbar clicks submit the surrounding form                               |
| Missing `immediatelyRender: false`               | SSR hydration mismatch                                                   |
| Slash command without `deleteRange(range)`       | `/query` text left in the document                                       |
| Rendering unvalidated content                    | Page crash on malformed rows                                             |
| Heading levels not offset by 1                   | Multiple `h1` elements, broken document outline                          |
| Bubble menu not excluding images                 | Two bubble menus overlap on image selection                              |
| **`allowBase64` left enabled**                   | **Bypasses Media Library entirely — rejected in this project, see §2.3** |

---

## Cross-feature dependencies

- **Media Library** (`media-library-requirements.md`) — exclusive image source, shared seam pattern.
- Referenced by: Events, Contests (Description), Articles/Case Studies, Products (Content/Description), and their respective Excerpt fields.

## Deferred / explicitly out of scope for this phase

- Table cell merge/split.
- Video embeds beyond YouTube.
- PDF as an in-content embeddable node (PDFs stay relevant elsewhere via Media Library, just not inside the editor body).
- Collaborative/multi-user editing.
