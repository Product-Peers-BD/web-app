import type { Metadata } from 'next';

import { CaseStudiesExplorer } from '@/components/features/case-studies/case-studies-explorer';
import { ClientRoll } from '@/components/features/case-studies/client-roll';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { caseStudies } from '@/constants/case-studies';

export const metadata: Metadata = {
	title: 'Case Studies — Product Peers BD',
	description:
		'Real projects, real companies — how members and Mentors across Bangladesh’s product community shipped work that moved the numbers.'
};

export default function CaseStudiesPage() {
	const clientNames = Array.from(
		new Set(caseStudies.map((caseStudy) => caseStudy.clientName))
	);

	return (
		<>
			<section className="border-b border-border bg-secondary/30">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
					<Reveal trigger="mount">
						<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
							Proof of work
						</p>
						<h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							What we shipped, and what happened after.
						</h1>
						<p className="mt-4 max-w-xl text-base text-muted-foreground">
							Members and Mentors document the real projects
							behind the numbers — the problem, the call they
							made, and the result the client actually saw.
						</p>
					</Reveal>

					<Reveal
						trigger="mount"
						delay={80}
					>
						<ClientRoll clientNames={clientNames} />
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<CaseStudiesExplorer caseStudies={caseStudies} />
			</section>
		</>
	);
}
