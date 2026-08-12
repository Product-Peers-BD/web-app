import { Quote } from 'lucide-react';
import { Fragment } from 'react';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { ReadingProgressBar } from '@/components/snippets/reading-progress-bar/reading-progress-bar';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type { CaseStudyContentBlock } from '@/types/case-study';

interface CaseStudyBodyProps {
	content: CaseStudyContentBlock[];
}

const CONTENT_ID = 'case-study-content';

export function CaseStudyBody({ content }: CaseStudyBodyProps) {
	return (
		<>
			<ReadingProgressBar targetId={CONTENT_ID} />

			<div
				id={CONTENT_ID}
				className="flex flex-col gap-6"
			>
				{content.map((block, index) => (
					<Fragment key={index}>
						{block.type === 'paragraph' ? (
							<p className="text-base leading-relaxed text-foreground/90">
								{block.text}
							</p>
						) : null}

						{block.type === 'heading' ? (
							<h2 className="mt-2 font-heading text-xl font-semibold text-foreground">
								{block.text}
							</h2>
						) : null}

						{block.type === 'quote' ? (
							<Reveal className="relative border-l-2 border-accent py-1 pl-6">
								<Quote className="absolute top-0 -left-[9px] size-4 -translate-y-1/2 rotate-180 fill-accent text-accent" />
								<p className="font-heading text-xl leading-snug font-medium text-foreground sm:text-2xl">
									{block.text}
								</p>
								{block.attribution ? (
									<p className="mt-2 font-mono text-xs text-muted-foreground uppercase">
										— {block.attribution}
									</p>
								) : null}
							</Reveal>
						) : null}

						{block.type === 'image' ? (
							<figure>
								<MediaPlaceholder className="aspect-16/9 w-full" />
								<figcaption className="mt-2 text-center text-xs text-muted-foreground">
									{block.caption}
								</figcaption>
							</figure>
						) : null}
					</Fragment>
				))}
			</div>
		</>
	);
}
