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

import { ArticleCard } from '@/components/features/articles/article-card';
import { CaseStudyCard } from '@/components/features/case-studies/case-study-card';
import { ContestCard } from '@/components/features/contests/contest-card';
import { EventCard } from '@/components/features/events/event-card';
import { ProductCard } from '@/components/features/products/product-card';
import { Reveal } from '@/components/snippets/reveal/reveal';
import {
	ActivityEntityType,
	ActivityType,
	TimelineOrder
} from '@/enums/profile';
import type { ProfileActivity } from '@/types/profile';
import { formatArticleDate } from '@/utils/format-article-date';
import {
	resolveActivityEntity,
	type ResolvedActivityEntity
} from '@/utils/resolve-activity-entity';
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

function ActivityEntityCard({ entity }: { entity: ResolvedActivityEntity }) {
	switch (entity.type) {
		case ActivityEntityType.CONTEST:
			return <ContestCard contest={entity.contest} />;
		case ActivityEntityType.ARTICLE:
			return <ArticleCard article={entity.article} />;
		case ActivityEntityType.CASE_STUDY:
			return <CaseStudyCard caseStudy={entity.caseStudy} />;
		case ActivityEntityType.PRODUCT:
			return <ProductCard product={entity.product} />;
		case ActivityEntityType.EVENT:
			return <EventCard event={entity.event} />;
	}
}

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

			<ol className="mt-6 flex flex-col gap-3">
				{sorted.map((activity, index) => {
					const Icon = activityIcons[activity.type];
					const isCredential = mentorGatedTypes.has(activity.type);
					const entity = resolveActivityEntity(activity);

					return (
						<Reveal
							key={activity.id}
							delay={index * 40}
						>
							<li className="relative flex gap-4 pb-8 last:pb-0">
								{index !== sorted.length - 1 ? (
									<span
										aria-hidden
										className="absolute top-8 left-3.75 h-[calc(100%-1.25rem)] w-px bg-border"
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
									{entity ? (
										<div className="mt-3">
											<ActivityEntityCard
												entity={entity}
											/>
										</div>
									) : null}
								</div>
							</li>
						</Reveal>
					);
				})}
			</ol>
		</div>
	);
}
