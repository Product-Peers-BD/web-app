import type { Metadata } from 'next';

import { EventsExplorer } from '@/components/features/events/events-explorer';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { events } from '@/constants/events';

export const metadata: Metadata = {
	title: 'Events — Product Peers BD',
	description:
		'Mentor sessions, panel discussions, community adda, and meetups from Bangladesh’s product community — ongoing, upcoming, and past.'
};

export default function EventsPage() {
	return (
		<>
			<section className="border-b border-border bg-secondary/30">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
					<Reveal trigger="mount">
						<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
							Events
						</p>
						<h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							Where the community shows up.
						</h1>
						<p className="mt-4 max-w-xl text-base text-muted-foreground">
							Mentor sessions, panel discussions, community adda,
							and meetups — browse what&apos;s live right now,
							what&apos;s coming up, and what already happened.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<EventsExplorer events={events} />
			</section>
		</>
	);
}
