import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EventDescription } from '@/components/features/events/event-description';
import { EventDetailHeader } from '@/components/features/events/event-detail-header';
import { EventDiscussions } from '@/components/features/events/event-discussions';
import { EventFaq } from '@/components/features/events/event-faq';
import { EventGallery } from '@/components/features/events/event-gallery';
import { EventQuickFacts } from '@/components/features/events/event-quick-facts';
import { EventRecap } from '@/components/features/events/event-recap';
import { EventRegistrationPanel } from '@/components/features/events/event-registration-panel';
import { EventSchedule } from '@/components/features/events/event-schedule';
import { EventShare } from '@/components/features/events/event-share';
import { EventSpeakers } from '@/components/features/events/event-speakers';
import { EventSponsors } from '@/components/features/events/event-sponsors';
import { EventVideos } from '@/components/features/events/event-videos';
import { events, getEventBySlug } from '@/constants/events';
import { EventStatus } from '@/enums/event';
import { getEventStatus } from '@/utils/get-event-status';
import { cn } from '@workspace/ui/lib/utils';

interface EventDetailsPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
	params
}: EventDetailsPageProps): Promise<Metadata> {
	const { slug } = await params;
	const event = getEventBySlug(slug);

	if (!event) return {};

	return {
		title: `${event.title} — Product Peers BD`,
		description: event.description[0]
	};
}

export default async function EventDetailsPage({
	params
}: EventDetailsPageProps) {
	const { slug } = await params;
	const event = getEventBySlug(slug);

	if (!event) notFound();

	const status = getEventStatus(event.startAt, event.endAt);
	const showRegistrationPanel =
		event.hasRegistration && status !== EventStatus.PAST;

	return (
		<article>
			<EventDetailHeader
				event={event}
				status={status}
			/>

			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div
					className={cn(
						'grid gap-10',
						showRegistrationPanel && 'lg:grid-cols-[1fr_360px]'
					)}
				>
					<div
						className={cn(
							'flex flex-col gap-12',
							!showRegistrationPanel && 'mx-auto w-full max-w-3xl'
						)}
					>
						<EventSpeakers speakers={event.speakers} />
						<EventQuickFacts event={event} />
						<EventDescription paragraphs={event.description} />
						<EventSchedule activities={event.activities} />
						<EventVideos videoUrls={event.videoUrls} />
						<EventGallery count={event.galleryCount} />
						<EventFaq faqs={event.faqs} />
						<EventSponsors sponsorTiers={event.sponsorTiers} />
						<EventRecap recap={event.pastRecap} />
						<EventDiscussions threads={event.discussions} />
						<EventShare title={event.title} />
					</div>

					{showRegistrationPanel ? (
						<aside className="lg:sticky lg:top-20 lg:h-fit">
							<EventRegistrationPanel event={event} />
						</aside>
					) : null}
				</div>
			</div>
		</article>
	);
}
