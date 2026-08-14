'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type {
	CaseStudyListItem,
	CaseStudySortOption
} from '@/types/case-study';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@workspace/ui/components/select';

import { CaseStudyCard } from './case-study-card';
import type { CaseStudyFiltersState } from './case-study-filters-sheet';
import { CaseStudyFiltersSheet } from './case-study-filters-sheet';

const PAGE_SIZE = 6;

const emptyFilters: CaseStudyFiltersState = {
	categories: [],
	industries: []
};

const sortOptions: { value: CaseStudySortOption; label: string }[] = [
	{ value: 'latest', label: 'Latest' },
	{ value: 'popular', label: 'Most Popular' }
];

interface CaseStudiesExplorerProps {
	caseStudies: CaseStudyListItem[];
}

export function CaseStudiesExplorer({ caseStudies }: CaseStudiesExplorerProps) {
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState<CaseStudySortOption>('latest');
	const [filters, setFilters] = useState<CaseStudyFiltersState>(emptyFilters);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const allCategories = useMemo(
		() =>
			Array.from(
				new Set(caseStudies.map((caseStudy) => caseStudy.category))
			).sort(),
		[caseStudies]
	);
	const allIndustries = useMemo(
		() =>
			Array.from(
				new Set(
					caseStudies.flatMap((caseStudy) => caseStudy.industries)
				)
			).sort(),
		[caseStudies]
	);

	const activeFilterCount =
		filters.categories.length + filters.industries.length;

	const filteredCaseStudies = useMemo(() => {
		const query = search.trim().toLowerCase();

		const filtered = caseStudies.filter((caseStudy) => {
			if (
				query &&
				!caseStudy.title.toLowerCase().includes(query) &&
				!caseStudy.clientName.toLowerCase().includes(query)
			) {
				return false;
			}

			if (
				filters.categories.length &&
				!filters.categories.includes(caseStudy.category)
			) {
				return false;
			}

			if (
				filters.industries.length &&
				!caseStudy.industries.some((industry) =>
					filters.industries.includes(industry)
				)
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
	}, [caseStudies, search, filters, sort]);

	const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);
	const hasMore = visibleCount < filteredCaseStudies.length;
	const hasActiveFilters = activeFilterCount > 0 || search.trim() !== '';

	function resetAll() {
		setSearch('');
		setFilters(emptyFilters);
		setVisibleCount(PAGE_SIZE);
	}

	function updateFilters(next: CaseStudyFiltersState) {
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
							placeholder="Search by title or client"
							className="pl-8"
						/>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						<CaseStudyFiltersSheet
							filters={filters}
							onChange={updateFilters}
							onReset={() => updateFilters(emptyFilters)}
							allCategories={allCategories}
							allIndustries={allIndustries}
							activeCount={activeFilterCount}
						/>

						<Select
							value={sort}
							onValueChange={(value) =>
								setSort(value as CaseStudySortOption)
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
					Showing {visibleCaseStudies.length} of{' '}
					{filteredCaseStudies.length} case stud
					{filteredCaseStudies.length === 1 ? 'y' : 'ies'}
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

			{filteredCaseStudies.length === 0 ? (
				<EmptyState
					className="mt-6"
					title="No case studies match"
					description="Try widening your filters or clearing the search — new write-ups are added regularly."
				/>
			) : (
				<>
					<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{visibleCaseStudies.map((caseStudy, index) => (
							<Reveal
								key={caseStudy.slug}
								delay={Math.min(index, 4) * 70}
								className="h-full"
							>
								<CaseStudyCard
									caseStudy={caseStudy}
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
								Load more case studies
							</Button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
