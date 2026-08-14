'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type { MentorListItem } from '@/types/mentor';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import {
	ToggleGroup,
	ToggleGroupItem
} from '@workspace/ui/components/toggle-group';

import { MentorCard } from './mentor-card';

const PAGE_SIZE = 8;

interface MentorshipExplorerProps {
	mentors: MentorListItem[];
}

export function MentorshipExplorer({ mentors }: MentorshipExplorerProps) {
	const [search, setSearch] = useState('');
	const [skills, setSkills] = useState<string[]>([]);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const allSkills = useMemo(
		() =>
			Array.from(
				new Set(mentors.flatMap((mentor) => mentor.skills))
			).sort(),
		[mentors]
	);

	const filteredMentors = useMemo(() => {
		const query = search.trim().toLowerCase();

		return mentors.filter((mentor) => {
			if (query && !mentor.name.toLowerCase().includes(query))
				return false;

			if (
				skills.length &&
				!mentor.skills.some((skill) => skills.includes(skill))
			) {
				return false;
			}

			return true;
		});
	}, [mentors, search, skills]);

	const visibleMentors = filteredMentors.slice(0, visibleCount);
	const hasMore = visibleCount < filteredMentors.length;
	const hasActiveFilters = skills.length > 0 || search.trim() !== '';

	function resetAll() {
		setSearch('');
		setSkills([]);
		setVisibleCount(PAGE_SIZE);
	}

	return (
		<div>
			<Reveal className="rounded-xl border border-border bg-card p-3 sm:p-4">
				<div className="flex flex-col gap-3">
					<div className="relative w-full sm:max-w-xs">
						<Search className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
						<Input
							value={search}
							onChange={(event) => {
								setSearch(event.target.value);
								setVisibleCount(PAGE_SIZE);
							}}
							placeholder="Search mentors by name"
							className="pl-8"
						/>
					</div>

					{allSkills.length > 0 ? (
						<ToggleGroup
							type="multiple"
							variant="outline"
							size="sm"
							value={skills}
							onValueChange={(value) => {
								setSkills(value);
								setVisibleCount(PAGE_SIZE);
							}}
							className="flex-wrap justify-start"
						>
							{allSkills.map((skill) => (
								<ToggleGroupItem
									key={skill}
									value={skill}
									className="rounded-sm! text-xs"
								>
									{skill}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					) : null}
				</div>
			</Reveal>

			<div className="mt-4 flex items-center justify-between">
				<p className="font-mono text-xs text-muted-foreground uppercase">
					Showing {visibleMentors.length} of {filteredMentors.length}{' '}
					mentor
					{filteredMentors.length === 1 ? '' : 's'}
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

			{filteredMentors.length === 0 ? (
				<EmptyState
					className="mt-6"
					title="No mentors match"
					description="Try a different skill or clearing the search — mentors are onboarded regularly."
				/>
			) : (
				<>
					<div className="mt-6 grid gap-6 sm:grid-cols-2">
						{visibleMentors.map((mentor, index) => (
							<Reveal
								key={mentor.slug}
								delay={Math.min(index, 4) * 70}
								className="h-full"
							>
								<MentorCard
									mentor={mentor}
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
								Load more mentors
							</Button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
