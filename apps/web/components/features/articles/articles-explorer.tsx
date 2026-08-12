'use client';

import { Search, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type { ArticleDetail, ArticleSortOption } from '@/types/article';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@workspace/ui/components/select';
import {
	ToggleGroup,
	ToggleGroupItem
} from '@workspace/ui/components/toggle-group';

import { ArticleCard } from './article-card';
import type { ArticleFiltersState } from './article-filters-sheet';
import { ArticleFiltersSheet } from './article-filters-sheet';

const PAGE_SIZE = 6;

const emptyFilters: ArticleFiltersState = {
	categories: [],
	authorSlugs: []
};

const sortOptions: { value: ArticleSortOption; label: string }[] = [
	{ value: 'latest', label: 'Latest' },
	{ value: 'popular', label: 'Most Popular' }
];

interface ArticlesExplorerProps {
	articles: ArticleDetail[];
}

export function ArticlesExplorer({ articles }: ArticlesExplorerProps) {
	const [search, setSearch] = useState('');
	const [curatedOnly, setCuratedOnly] = useState<'ALL' | 'CURATED'>('ALL');
	const [sort, setSort] = useState<ArticleSortOption>('latest');
	const [filters, setFilters] = useState<ArticleFiltersState>(emptyFilters);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const allCategories = useMemo(
		() =>
			Array.from(
				new Set(articles.map((article) => article.category))
			).sort(),
		[articles]
	);
	const allAuthors = useMemo(() => {
		const seen = new Map<string, ArticleDetail['author']>();
		for (const article of articles) {
			if (!seen.has(article.author.slug)) {
				seen.set(article.author.slug, article.author);
			}
		}
		return Array.from(seen.values()).sort((a, b) =>
			a.name.localeCompare(b.name)
		);
	}, [articles]);

	const activeFilterCount =
		filters.categories.length + filters.authorSlugs.length;

	const filteredArticles = useMemo(() => {
		const query = search.trim().toLowerCase();

		const filtered = articles.filter((article) => {
			if (query && !article.title.toLowerCase().includes(query))
				return false;

			if (curatedOnly === 'CURATED' && !article.isCurated) return false;

			if (
				filters.categories.length &&
				!filters.categories.includes(article.category)
			) {
				return false;
			}

			if (
				filters.authorSlugs.length &&
				!filters.authorSlugs.includes(article.author.slug)
			) {
				return false;
			}

			return true;
		});

		return [...filtered].sort((a, b) => {
			if (sort === 'popular') return b.viewCount - a.viewCount;
			return (
				new Date(b.publishedAt).getTime() -
				new Date(a.publishedAt).getTime()
			);
		});
	}, [articles, search, curatedOnly, filters, sort]);

	const visibleArticles = filteredArticles.slice(0, visibleCount);
	const hasMore = visibleCount < filteredArticles.length;
	const hasActiveFilters =
		activeFilterCount > 0 || curatedOnly !== 'ALL' || search.trim() !== '';

	function resetAll() {
		setSearch('');
		setCuratedOnly('ALL');
		setFilters(emptyFilters);
		setVisibleCount(PAGE_SIZE);
	}

	function updateFilters(next: ArticleFiltersState) {
		setFilters(next);
		setVisibleCount(PAGE_SIZE);
	}

	return (
		<div>
			<Reveal className="rounded-xl border border-border bg-card p-3 sm:p-4">
				<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
					<div className="relative w-full lg:max-w-xs">
						<Search className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
						<Input
							value={search}
							onChange={(event) => {
								setSearch(event.target.value);
								setVisibleCount(PAGE_SIZE);
							}}
							placeholder="Search articles by title"
							className="pl-8"
						/>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						<ToggleGroup
							type="single"
							variant="outline"
							size="sm"
							value={curatedOnly}
							onValueChange={(value) => {
								if (!value) return;
								setCuratedOnly(value as 'ALL' | 'CURATED');
								setVisibleCount(PAGE_SIZE);
							}}
						>
							<ToggleGroupItem
								value="ALL"
								className="font-mono text-xs uppercase"
							>
								All
							</ToggleGroupItem>
							<ToggleGroupItem
								value="CURATED"
								className="gap-1 font-mono text-xs uppercase"
							>
								<Sparkles className="size-3" />
								Curated
							</ToggleGroupItem>
						</ToggleGroup>

						<ArticleFiltersSheet
							filters={filters}
							onChange={updateFilters}
							onReset={() => updateFilters(emptyFilters)}
							allCategories={allCategories}
							allAuthors={allAuthors}
							activeCount={activeFilterCount}
						/>

						<Select
							value={sort}
							onValueChange={(value) =>
								setSort(value as ArticleSortOption)
							}
						>
							<SelectTrigger
								size="sm"
								className="w-fit"
							>
								<SelectValue>
									{
										sortOptions.find(
											(option) => option.value === sort
										)?.label
									}
								</SelectValue>
							</SelectTrigger>
							<SelectContent>
								{sortOptions.map((option) => (
									<SelectItem
										key={option.value}
										value={option.value}
									>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
			</Reveal>

			<div className="mt-4 flex items-center justify-between">
				<p className="font-mono text-xs text-muted-foreground uppercase">
					Showing {visibleArticles.length} of{' '}
					{filteredArticles.length} article
					{filteredArticles.length === 1 ? '' : 's'}
				</p>
				{hasActiveFilters ? (
					<button
						type="button"
						onClick={resetAll}
						className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<X className="size-3" />
						Clear all
					</button>
				) : null}
			</div>

			{filteredArticles.length === 0 ? (
				<EmptyState
					className="mt-6"
					title="No articles match"
					description="Try widening your filters or clearing the search — new write-ups are added regularly."
				/>
			) : (
				<>
					<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{visibleArticles.map((article, index) => (
							<Reveal
								key={article.slug}
								delay={Math.min(index, 4) * 70}
								className="h-full"
							>
								<ArticleCard
									article={article}
									className="h-full"
								/>
							</Reveal>
						))}
					</div>

					{hasMore ? (
						<div className="mt-10 flex justify-center">
							<Button
								variant="outline"
								onClick={() =>
									setVisibleCount(
										(count) => count + PAGE_SIZE
									)
								}
							>
								Load more articles
							</Button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
