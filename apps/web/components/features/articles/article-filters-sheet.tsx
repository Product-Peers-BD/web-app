'use client';

import { SlidersHorizontal } from 'lucide-react';

import type { ArticleAuthor } from '@/types/article';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@workspace/ui/components/sheet';
import {
	ToggleGroup,
	ToggleGroupItem
} from '@workspace/ui/components/toggle-group';

export interface ArticleFiltersState {
	categories: string[];
	authorSlugs: string[];
}

interface ArticleFiltersSheetProps {
	filters: ArticleFiltersState;
	onChange: (filters: ArticleFiltersState) => void;
	onReset: () => void;
	allCategories: string[];
	allAuthors: ArticleAuthor[];
	activeCount: number;
}

function FilterGroupLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
			{children}
		</p>
	);
}

export function ArticleFiltersSheet({
	filters,
	onChange,
	onReset,
	allCategories,
	allAuthors,
	activeCount
}: ArticleFiltersSheetProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="sm"
				>
					<SlidersHorizontal className="size-3.5" />
					Filters
					{activeCount > 0 ? (
						<Badge className="ml-1 h-4 min-w-4 justify-center rounded-4xl px-1 text-[10px]">
							{activeCount}
						</Badge>
					) : null}
				</Button>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader>
					<SheetTitle>Filters</SheetTitle>
					<SheetDescription>
						Narrow the list by category and author.
					</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col gap-6 px-4">
					{allCategories.length > 0 ? (
						<div className="flex flex-col gap-2">
							<FilterGroupLabel>Category</FilterGroupLabel>
							<ToggleGroup
								type="multiple"
								variant="outline"
								size="sm"
								value={filters.categories}
								onValueChange={(value) =>
									onChange({ ...filters, categories: value })
								}
								className="flex-wrap justify-start"
							>
								{allCategories.map((category) => (
									<ToggleGroupItem
										key={category}
										value={category}
										className="rounded-sm! text-xs"
									>
										{category}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</div>
					) : null}

					{allAuthors.length > 0 ? (
						<div className="flex flex-col gap-2">
							<FilterGroupLabel>Author</FilterGroupLabel>
							<ToggleGroup
								type="multiple"
								variant="outline"
								size="sm"
								value={filters.authorSlugs}
								onValueChange={(value) =>
									onChange({ ...filters, authorSlugs: value })
								}
								className="flex-wrap justify-start"
							>
								{allAuthors.map((author) => (
									<ToggleGroupItem
										key={author.slug}
										value={author.slug}
										className="rounded-sm! text-xs"
									>
										{author.name}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</div>
					) : null}
				</div>

				<SheetFooter className="flex-row">
					<Button
						variant="outline"
						onClick={onReset}
						className="flex-1"
					>
						Reset
					</Button>
					<SheetClose asChild>
						<Button className="flex-1">Show results</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
