'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { EventStatus } from '@/enums/event';
import type { EventDetail, EventSortOption } from '@/types/event';
import { getEventStatus } from '@/utils/get-event-status';
import { eventStatusLabels } from '@/utils/labels';
import { sortEvents } from '@/utils/sort-events';
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

import { EventCard } from './event-card';
import type { EventFiltersState } from './event-filters-sheet';
import { EventFiltersSheet } from './event-filters-sheet';

const PAGE_SIZE = 6;

const emptyFilters: EventFiltersState = {
	types: [],
	formats: [],
	categories: [],
	tags: [],
	price: 'ALL',
	registration: 'ALL',
	dateFrom: '',
	dateTo: ''
};

const sortOptions: { value: EventSortOption; label: string }[] = [
	{ value: 'default', label: 'Default' },
	{ value: 'date-asc', label: 'Date — oldest first' },
	{ value: 'date-desc', label: 'Date — newest first' },
	{ value: 'title-asc', label: 'Title — A to Z' },
	{ value: 'title-desc', label: 'Title — Z to A' }
];

interface EventsExplorerProps {
	events: EventDetail[];
}

export function EventsExplorer({ events }: EventsExplorerProps) {
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState<EventStatus | 'ALL'>('ALL');
	const [sort, setSort] = useState<EventSortOption>('default');
	const [filters, setFilters] = useState<EventFiltersState>(emptyFilters);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const allCategories = useMemo(
		() =>
			Array.from(
				new Set(events.flatMap((event) => event.categories))
			).sort(),
		[events]
	);
	const allTags = useMemo(
		() => Array.from(new Set(events.flatMap((event) => event.tags))).sort(),
		[events]
	);

	const activeFilterCount =
		filters.types.length +
		filters.formats.length +
		filters.categories.length +
		filters.tags.length +
		(filters.price !== 'ALL' ? 1 : 0) +
		(filters.registration !== 'ALL' ? 1 : 0) +
		(filters.dateFrom ? 1 : 0) +
		(filters.dateTo ? 1 : 0);

	const filteredEvents = useMemo(() => {
		const query = search.trim().toLowerCase();

		const filtered = events.filter((event) => {
			if (query && !event.title.toLowerCase().includes(query))
				return false;

			if (
				status !== 'ALL' &&
				getEventStatus(event.startAt, event.endAt) !== status
			) {
				return false;
			}

			if (
				filters.types.length &&
				!filters.types.includes(event.eventType)
			) {
				return false;
			}

			if (
				filters.formats.length &&
				!filters.formats.includes(event.format)
			) {
				return false;
			}

			if (
				filters.categories.length &&
				!event.categories.some((category) =>
					filters.categories.includes(category)
				)
			) {
				return false;
			}

			if (
				filters.tags.length &&
				!event.tags.some((tag) => filters.tags.includes(tag))
			) {
				return false;
			}

			if (filters.price === 'FREE' && event.isPremium) return false;
			if (filters.price === 'PAID' && !event.isPremium) return false;

			if (filters.registration === 'YES' && !event.hasRegistration)
				return false;
			if (filters.registration === 'NO' && event.hasRegistration)
				return false;

			const startTime = new Date(event.startAt).getTime();
			if (
				filters.dateFrom &&
				startTime < new Date(filters.dateFrom).getTime()
			) {
				return false;
			}
			if (
				filters.dateTo &&
				startTime > new Date(filters.dateTo).getTime() + 86_400_000
			) {
				return false;
			}

			return true;
		});

		return sortEvents(filtered, sort);
	}, [events, search, status, filters, sort]);

	const visibleEvents = filteredEvents.slice(0, visibleCount);
	const hasMore = visibleCount < filteredEvents.length;
	const hasActiveFilters =
		activeFilterCount > 0 || status !== 'ALL' || search.trim() !== '';

	function resetAll() {
		setSearch('');
		setStatus('ALL');
		setFilters(emptyFilters);
		setVisibleCount(PAGE_SIZE);
	}

	function updateFilters(next: EventFiltersState) {
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
							placeholder="Search events by title"
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
								setStatus(value as EventStatus | 'ALL');
								setVisibleCount(PAGE_SIZE);
							}}
						>
							<ToggleGroupItem
								value="ALL"
								className="font-mono text-xs uppercase"
							>
								All
							</ToggleGroupItem>
							{Object.values(EventStatus).map((value) => (
								<ToggleGroupItem
									key={value}
									value={value}
									className="font-mono text-xs uppercase"
								>
									{eventStatusLabels[value]}
								</ToggleGroupItem>
							))}
						</ToggleGroup>

						<EventFiltersSheet
							filters={filters}
							onChange={updateFilters}
							onReset={() => updateFilters(emptyFilters)}
							allCategories={allCategories}
							allTags={allTags}
							activeCount={activeFilterCount}
						/>

						<Select
							value={sort}
							onValueChange={(value) =>
								setSort(value as EventSortOption)
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
					Showing {visibleEvents.length} of {filteredEvents.length}{' '}
					event
					{filteredEvents.length === 1 ? '' : 's'}
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

			{filteredEvents.length === 0 ? (
				<EmptyState
					className="mt-6"
					title="No events match"
					description="Try widening your filters or clearing the search — new events are added regularly."
				/>
			) : (
				<>
					<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{visibleEvents.map((event, index) => (
							<Reveal
								key={event.slug}
								delay={Math.min(index, 4) * 70}
								className="h-full"
							>
								<EventCard
									event={event}
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
								Load more events
							</Button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
