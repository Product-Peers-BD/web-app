'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { ContestStatus } from '@/enums/contest';
import type { ContestListItem, ContestSortOption } from '@/types/contest';
import { getContestStatus } from '@/utils/get-contest-status';
import { contestStatusLabels } from '@/utils/labels';
import { sortContests } from '@/utils/sort-contests';
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

import { ContestCard } from './contest-card';
import type { ContestFiltersState } from './contest-filters-sheet';
import { ContestFiltersSheet } from './contest-filters-sheet';

const PAGE_SIZE = 6;

const emptyFilters: ContestFiltersState = {
	formats: [],
	price: 'ALL'
};

const sortOptions: { value: ContestSortOption; label: string }[] = [
	{ value: 'default', label: 'Default' },
	{ value: 'date-asc', label: 'Date — oldest first' },
	{ value: 'date-desc', label: 'Date — newest first' },
	{ value: 'title-asc', label: 'Title — A to Z' },
	{ value: 'title-desc', label: 'Title — Z to A' }
];

interface ContestsExplorerProps {
	contests: ContestListItem[];
}

export function ContestsExplorer({ contests }: ContestsExplorerProps) {
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState<ContestStatus | 'ALL'>('ALL');
	const [sort, setSort] = useState<ContestSortOption>('default');
	const [filters, setFilters] = useState<ContestFiltersState>(emptyFilters);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const activeFilterCount =
		filters.formats.length + (filters.price !== 'ALL' ? 1 : 0);

	const filteredContests = useMemo(() => {
		const query = search.trim().toLowerCase();

		const filtered = contests.filter((contest) => {
			if (query && !contest.title.toLowerCase().includes(query))
				return false;

			if (
				status !== 'ALL' &&
				getContestStatus(contest.startAt, contest.endAt) !== status
			) {
				return false;
			}

			if (
				filters.formats.length &&
				!filters.formats.includes(contest.format)
			) {
				return false;
			}

			if (filters.price === 'FREE' && contest.isPremium) return false;
			if (filters.price === 'PAID' && !contest.isPremium) return false;

			return true;
		});

		return sortContests(filtered, sort);
	}, [contests, search, status, filters, sort]);

	const visibleContests = filteredContests.slice(0, visibleCount);
	const hasMore = visibleCount < filteredContests.length;
	const hasActiveFilters =
		activeFilterCount > 0 || status !== 'ALL' || search.trim() !== '';

	function resetAll() {
		setSearch('');
		setStatus('ALL');
		setFilters(emptyFilters);
		setVisibleCount(PAGE_SIZE);
	}

	function updateFilters(next: ContestFiltersState) {
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
							placeholder="Search contests by title"
							className="pl-8"
						/>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						<ToggleGroup
							type="single"
							variant="outline"
							size="sm"
							value={status}
							onValueChange={(value) => {
								if (!value) return;
								setStatus(value as ContestStatus | 'ALL');
								setVisibleCount(PAGE_SIZE);
							}}
						>
							<ToggleGroupItem
								value="ALL"
								className="font-mono text-xs uppercase"
							>
								All
							</ToggleGroupItem>
							{Object.values(ContestStatus).map((value) => (
								<ToggleGroupItem
									key={value}
									value={value}
									className="font-mono text-xs uppercase"
								>
									{contestStatusLabels[value]}
								</ToggleGroupItem>
							))}
						</ToggleGroup>

						<ContestFiltersSheet
							filters={filters}
							onChange={updateFilters}
							onReset={() => updateFilters(emptyFilters)}
							activeCount={activeFilterCount}
						/>

						<Select
							value={sort}
							onValueChange={(value) =>
								setSort(value as ContestSortOption)
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
					Showing {visibleContests.length} of{' '}
					{filteredContests.length} contest
					{filteredContests.length === 1 ? '' : 's'}
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

			{filteredContests.length === 0 ? (
				<EmptyState
					className="mt-6"
					title="No contests match"
					description="Try widening your filters or clearing the search — new contests are announced regularly."
				/>
			) : (
				<>
					<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{visibleContests.map((contest, index) => (
							<Reveal
								key={contest.slug}
								delay={Math.min(index, 4) * 70}
								className="h-full"
							>
								<ContestCard
									contest={contest}
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
								Load more contests
							</Button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
