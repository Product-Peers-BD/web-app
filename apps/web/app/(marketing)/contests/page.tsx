import type { Metadata } from 'next';

import { ContestScoreboard } from '@/components/features/contests/contest-scoreboard';
import { ContestsExplorer } from '@/components/features/contests/contests-explorer';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { contests } from '@/constants/contests';

export const metadata: Metadata = {
	title: 'Contests — Product Peers BD',
	description:
		'Team-based product contests judged by Mentor practitioners — see what’s running, what’s opening next, and who’s already been crowned.'
};

export default function ContestsPage() {
	return (
		<>
			<section className="border-b border-border bg-secondary/30">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
					<Reveal trigger="mount">
						<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
							Compete
						</p>
						<h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							Build fast. Defend it. Take the board.
						</h1>
						<p className="mt-4 max-w-xl text-base text-muted-foreground">
							Team-based product contests — pitch, prototype, and
							present to Mentor judges under a real clock. See
							what&apos;s running right now, what&apos;s opening
							next, and who&apos;s already been crowned.
						</p>
					</Reveal>

					<Reveal
						trigger="mount"
						delay={80}
						className="mt-8"
					>
						<ContestScoreboard contests={contests} />
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<ContestsExplorer contests={contests} />
			</section>
		</>
	);
}
