import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { EventStatus } from '@/enums/event';
import type { EventDetail } from '@/types/event';
import { eventTypeLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { EventStatusBadge } from './event-status-badge';

interface EventDetailHeaderProps {
	event: EventDetail;
	status: EventStatus;
}

export function EventDetailHeader({ event, status }: EventDetailHeaderProps) {
	return (
		<section className="border-b border-border bg-secondary/30">
			<div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
				<Reveal trigger="mount">
					<Link
						href="/events"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<ArrowLeft className="size-3.5" />
						All events
					</Link>

					<div className="relative mt-5">
						<MediaPlaceholder
							className={cn(
								'aspect-21/9 w-full',
								status === EventStatus.PAST &&
									'opacity-70 grayscale'
							)}
						/>
						<div className="absolute top-4 left-4">
							<EventStatusBadge status={status} />
						</div>
						<Badge
							variant="outline"
							className="absolute top-4 right-4 rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
						>
							{eventTypeLabels[event.eventType]}
						</Badge>
					</div>
				</Reveal>

				<Reveal
					delay={90}
					className="py-8"
				>
					<div className="flex flex-wrap gap-1.5">
						{event.categories.map((category) => (
							<Badge
								key={category}
								variant="outline"
								className="rounded-4xl border-border text-[11px] font-normal text-muted-foreground"
							>
								{category}
							</Badge>
						))}
						{event.tags.map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="rounded-sm border-border font-mono text-[10px] text-muted-foreground uppercase"
							>
								{tag}
							</Badge>
						))}
					</div>

					<h1 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
						{event.title}
					</h1>
				</Reveal>
			</div>
		</section>
	);
}
