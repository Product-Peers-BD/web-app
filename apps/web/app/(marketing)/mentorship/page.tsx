import type { Metadata } from 'next';

import { MentorshipExplorer } from '@/components/features/mentorship/mentorship-explorer';
import { OfficeHoursBoard } from '@/components/features/mentorship/office-hours-board';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { mentors } from '@/constants/mentors';
import { getUpcomingOfficeHours } from '@/utils/get-upcoming-office-hours';

export const metadata: Metadata = {
	title: 'Mentorship — Product Peers BD',
	description:
		'Book a 1:1 session with a working product, growth, design, or analytics practitioner from the community — pick an open slot and ask your actual question.'
};

export default function MentorshipPage() {
	const officeHours = getUpcomingOfficeHours(mentors, 5);

	return (
		<>
			<section className="border-b border-border bg-secondary/30">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
					<Reveal trigger="mount">
						<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
							Office Hours
						</p>
						<h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							Ask the person who already shipped it.
						</h1>
						<p className="mt-4 max-w-xl text-base text-muted-foreground">
							Book a 1:1 with a working PM, designer, growth lead,
							or analyst from the community — no panel, no deck,
							just your actual problem and a straight answer.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
					<MentorshipExplorer mentors={mentors} />

					<Reveal className="lg:sticky lg:top-20 lg:self-start">
						<OfficeHoursBoard entries={officeHours} />
					</Reveal>
				</div>
			</section>
		</>
	);
}
