import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { upcomingEvents } from '@/constants/home';
import { formatEventDate } from '@/utils/format-event-date';
import { eventFormatLabels, eventTypeLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

export function UpcomingEvents() {
	const [featuredEvent, ...restEvents] = upcomingEvents;

	return (
		<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<SectionHeader
				eyebrow="What's next"
				title="Upcoming Events"
				seeAllLabel="See all Events"
				seeAllHref="/events"
			/>

			{!featuredEvent ? (
				<EmptyState
					className="mt-10"
					title="No upcoming events"
					description="New sessions are scheduled regularly — check back soon or browse past events."
					linkLabel="See all Events"
					linkHref="/events"
				/>
			) : (
				<div
					className={cn(
						'mt-10 grid gap-6',
						restEvents.length > 0 && 'lg:grid-cols-[1.3fr_1fr]'
					)}
				>
					<Reveal className="h-full">
						<article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card sm:flex-row">
							<MediaPlaceholder className="aspect-4/3 w-full shrink-0 sm:aspect-auto sm:w-2/5" />
							<div className="flex flex-1 flex-col p-5 sm:p-6">
								<Badge
									variant="outline"
									className="w-fit rounded-sm border-border font-mono text-[10px] tracking-wide text-muted-foreground uppercase"
								>
									{eventTypeLabels[featuredEvent.eventType]}
								</Badge>

								<h3 className="mt-3 font-heading text-2xl leading-snug font-semibold text-foreground">
									{featuredEvent.title}
								</h3>

								<p className="mt-2 font-mono text-xs text-muted-foreground">
									{formatEventDate(featuredEvent.startAt)} ·{' '}
									{eventFormatLabels[featuredEvent.format]}
								</p>

								<Button
									asChild
									variant={
										featuredEvent.hasRegistration &&
										featuredEvent.registrationOpen
											? 'default'
											: 'outline'
									}
									className="mt-auto w-fit pt-4"
								>
									<Link
										href={`/events/${featuredEvent.slug}`}
									>
										{featuredEvent.hasRegistration &&
										featuredEvent.registrationOpen
											? 'Register'
											: 'View Details'}
										<ArrowRight className="size-3.5" />
									</Link>
								</Button>

								{featuredEvent.hasRegistration &&
								!featuredEvent.registrationOpen &&
								featuredEvent.registrationOpensAt ? (
									<p className="mt-2 font-mono text-xs text-muted-foreground">
										Registration opens{' '}
										{formatEventDate(
											featuredEvent.registrationOpensAt
										)}
									</p>
								) : null}
							</div>
						</article>
					</Reveal>

					{restEvents.length > 0 ? (
						<div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
							{restEvents.map((event, index) => (
								<Reveal
									key={event.slug}
									delay={index * 70}
									className="flex-1"
								>
									<Link
										href={`/events/${event.slug}`}
										className="group flex h-full items-center justify-between gap-4 p-4 transition-colors hover:bg-secondary/50 sm:p-5"
									>
										<div className="min-w-0">
											<p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
												{
													eventTypeLabels[
														event.eventType
													]
												}
											</p>
											<h3 className="mt-1 truncate font-heading text-base font-semibold text-foreground">
												{event.title}
											</h3>
											<p className="mt-1 font-mono text-xs text-muted-foreground">
												{formatEventDate(event.startAt)}{' '}
												·{' '}
												{
													eventFormatLabels[
														event.format
													]
												}
												{event.hasRegistration &&
												!event.registrationOpen &&
												event.registrationOpensAt ? (
													<>
														{' '}
														·{' '}
														<span className="text-foreground">
															Opens{' '}
															{formatEventDate(
																event.registrationOpensAt
															)}
														</span>
													</>
												) : null}
											</p>
										</div>
										<div className="flex shrink-0 items-center gap-2">
											{event.hasRegistration &&
											event.registrationOpen ? (
												<span className="font-mono text-[10px] tracking-wide text-primary uppercase">
													Register
												</span>
											) : null}
											<ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
										</div>
									</Link>
								</Reveal>
							))}
						</div>
					) : null}
				</div>
			)}
		</section>
	);
}
