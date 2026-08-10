import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { upcomingEvents } from '@/constants/home';
import { formatEventDate } from '@/utils/format-event-date';
import { eventFormatLabels, eventTypeLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

export function UpcomingEvents() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<SectionHeader
				eyebrow="What's next"
				title="Upcoming Events"
				seeAllLabel="See all Events"
				seeAllHref="/events"
			/>

			<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{upcomingEvents.map((event) => (
					<article
						key={event.slug}
						className="flex flex-col rounded-xl border border-border bg-card p-3"
					>
						<MediaPlaceholder className="aspect-4/3 w-full" />

						<Badge
							variant="outline"
							className="mt-4 w-fit rounded-sm border-border font-mono text-[10px] tracking-wide text-muted-foreground uppercase"
						>
							{eventTypeLabels[event.eventType]}
						</Badge>

						<h3 className="mt-2.5 font-heading text-lg leading-snug font-semibold text-foreground">
							{event.title}
						</h3>

						<p className="mt-2 font-mono text-xs text-muted-foreground">
							{formatEventDate(event.startAt)} ·{' '}
							{eventFormatLabels[event.format]}
						</p>

						<Button
							asChild
							variant="outline"
							size="sm"
							className="mt-4 w-fit"
						>
							<Link href={`/events/${event.slug}`}>
								{event.hasRegistration && event.registrationOpen
									? 'Register'
									: 'View Details'}
								<ArrowRight className="size-3.5" />
							</Link>
						</Button>
					</article>
				))}
			</div>
		</section>
	);
}
