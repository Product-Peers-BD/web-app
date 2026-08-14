import type { Metadata } from 'next';

import { ArticlesExplorer } from '@/components/features/articles/articles-explorer';
import { CuratedPicksCarousel } from '@/components/features/articles/curated-picks-carousel';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { articles } from '@/constants/articles';

export const metadata: Metadata = {
	title: 'Articles — Product Peers BD',
	description:
		'Write-ups from members and Mentors across Bangladesh’s product community — PRDs, pricing, careers, and everything in between.'
};

export default function ArticlesPage() {
	return (
		<>
			<section className="border-b border-border bg-secondary/30">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
					<Reveal trigger="mount">
						<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
							Articles
						</p>
						<h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							Written by the people doing the work.
						</h1>
						<p className="mt-4 max-w-xl text-base text-muted-foreground">
							PRDs, pricing calls, career pivots, and the odd
							hard-won lesson — from Members and Mentors across
							Bangladesh&apos;s product community.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
				<CuratedPicksCarousel articles={articles} />
			</section>

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<ArticlesExplorer articles={articles} />
			</section>
		</>
	);
}
