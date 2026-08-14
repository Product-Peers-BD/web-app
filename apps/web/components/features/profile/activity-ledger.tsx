'use client';

import {
	ArrowUpDown,
	Award,
	BookOpen,
	Calendar,
	Flag,
	Gavel,
	LogIn,
	Mic,
	Rocket,
	TrendingUp,
	Trophy,
	type LucideIcon
} from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { Reveal } from '@/components/snippets/reveal/reveal';
import { ActivityType, TimelineOrder } from '@/enums/profile';
import type { ProfileActivity } from '@/types/profile';
import { formatArticleDate } from '@/utils/format-article-date';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

const activityIcons: Record<ActivityType, LucideIcon> = {
	[ActivityType.JOINED_PLATFORM]: LogIn,
	[ActivityType.BECAME_MENTOR]: Award,
	[ActivityType.PUBLISHED_ARTICLE]: BookOpen,
	[ActivityType.PUBLISHED_CASE_STUDY]: BookOpen,
	[ActivityType.LAUNCHED_PRODUCT]: Rocket,
	[ActivityType.ATTENDED_EVENT]: Calendar,
	[ActivityType.SPOKE_AT_EVENT]: Mic,
	[ActivityType.JOINED_CONTEST]: Flag,
	[ActivityType.WON_CONTEST]: Trophy,
	[ActivityType.JUDGED_CONTEST]: Gavel,
	[ActivityType.FOLLOWER_MILESTONE]: TrendingUp
};

// Entry types that only ever occur because the account holds the Mentor badge —
// ticked amber so a Mentor's ledger visibly carries more credentials than a Member's.
const mentorGatedTypes = new Set<ActivityType>([
	ActivityType.BECAME_MENTOR,
	ActivityType.SPOKE_AT_EVENT,
	ActivityType.JUDGED_CONTEST
]);

interface ActivityLedgerProps {
	activities: ProfileActivity[];
}

export function ActivityLedger({ activities }: ActivityLedgerProps) {
	const [order, setOrder] = useState<TimelineOrder>(
		TimelineOrder.LATEST_FIRST
	);

	const sorted = useMemo(() => {
		const items = [...activities].sort(
			(a, b) =>
				new Date(a.occurredAt).getTime() -
				new Date(b.occurredAt).getTime()
		);
		return order === TimelineOrder.LATEST_FIRST ? items.reverse() : items;
	}, [activities, order]);

	return (
		<div>
			<div className="flex items-center justify-between gap-4">
				<p className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
					Activity Ledger
				</p>
				<Button
					variant="outline"
					size="sm"
					onClick={() =>
						setOrder((current) =>
							current === TimelineOrder.LATEST_FIRST
								? TimelineOrder.OLDEST_FIRST
								: TimelineOrder.LATEST_FIRST
						)
					}
				>
					<ArrowUpDown className="size-3.5" />
					{order === TimelineOrder.LATEST_FIRST
						? 'Newest first'
						: 'Oldest first'}
				</Button>
			</div>

			<ol className="mt-6">
				{sorted.map((activity, index) => {
					const Icon = activityIcons[activity.type];
					const isCredential = mentorGatedTypes.has(activity.type);

					return (
						<Reveal
							key={activity.id}
							delay={index * 40}
						>
							<li className="relative flex gap-4 pb-7 last:pb-0">
								{index !== sorted.length - 1 ? (
									<span
										aria-hidden
										className="absolute top-8 left-[15px] h-[calc(100%-1.25rem)] w-px bg-border"
									/>
								) : null}
								<span
									className={cn(
										'relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border',
										isCredential
											? 'border-accent/40 bg-accent/10 text-accent'
											: 'border-primary/30 bg-primary/10 text-primary'
									)}
								>
									<Icon className="size-4" />
								</span>
								<div className="min-w-0 flex-1 pt-1.5">
									<p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase tabular-nums">
										{formatArticleDate(activity.occurredAt)}
									</p>
									{activity.href ? (
										<Link
											href={activity.href}
											className="mt-0.5 block text-sm text-foreground hover:text-primary"
										>
											{activity.description}
										</Link>
									) : (
										<p className="mt-0.5 text-sm text-foreground">
											{activity.description}
										</p>
									)}
								</div>
							</li>
						</Reveal>
					);
				})}
			</ol>
		</div>
	);
}
