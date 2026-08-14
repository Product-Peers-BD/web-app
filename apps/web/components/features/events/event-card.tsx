import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { EventStatus } from '@/enums/event';
import type { EventListItem } from '@/types/event';
import { formatEventDate } from '@/utils/format-event-date';
import { getEventStatus, isRegistrationOpen } from '@/utils/get-event-status';
import { eventFormatLabels, eventTypeLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { EventStatusBadge } from './event-status-badge';

interface EventCardProps {
	event: EventListItem;
	className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
	const status = getEventStatus(event.startAt, event.endAt);
	const registrationOpen = isRegistrationOpen(event);
	const isPast = status === EventStatus.PAST;
	const visibleCategories = event.categories.slice(0, 2);
	const extraCategoryCount =
		event.categories.length - visibleCategories.length;

	return (
		<article
			className={cn(
				'flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card',
				className
			)}
		>
			<div className="relative">
				<MediaPlaceholder
					className={cn(
						'aspect-video w-full rounded-none',
						isPast && 'opacity-70 grayscale'
					)}
				/>
				<div className="absolute top-3 left-3">
					<EventStatusBadge status={status} />
				</div>
				<Badge
					variant="outline"
					className="absolute top-3 right-3 rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
				>
					{eventTypeLabels[event.eventType]}
				</Badge>
			</div>

			<div className="flex flex-1 flex-col p-4">
				{visibleCategories.length > 0 ? (
					<div className="flex flex-wrap gap-1.5">
						{visibleCategories.map((category) => (
							<Badge
								key={category}
								variant="outline"
								className="rounded-4xl border-border text-[11px] font-normal text-muted-foreground"
							>
								{category}
							</Badge>
						))}
						{extraCategoryCount > 0 ? (
							<Badge
								variant="outline"
								className="rounded-4xl border-border text-[11px] font-normal text-muted-foreground"
							>
								+{extraCategoryCount}
							</Badge>
						) : null}
					</div>
				) : null}

				<h3 className="mt-3 line-clamp-2 font-heading text-lg leading-snug font-semibold text-foreground">
					{event.title}
				</h3>

				<p className="mt-2 font-mono text-xs text-muted-foreground">
					{formatEventDate(event.startAt)} ·{' '}
					{eventFormatLabels[event.format]}
					{event.isPremium && event.priceBdt ? (
						<>
							{' '}
							·{' '}
							<span className="text-accent-foreground">
								৳{event.priceBdt}
							</span>
						</>
					) : null}
				</p>

				<Button
					asChild
					variant={registrationOpen ? 'default' : 'outline'}
					size="sm"
					className="mt-4 w-fit"
				>
					<Link href={`/events/${event.slug}`}>
						{event.hasRegistration && registrationOpen
							? 'Register'
							: 'View Details'}
						<ArrowRight className="size-3.5" />
					</Link>
				</Button>
			</div>
		</article>
	);
}
