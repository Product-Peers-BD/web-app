import type { Metadata } from 'next';

import { JoinCommunityCta } from '@/components/features/home/join-community-cta';
import { StatsBarVariantB } from '@/components/features/home/stats-bar-variant-b';
import { Testimonials } from '@/components/features/home/testimonials';
import { CommunityPulse } from '@/components/features/join-community/community-pulse';
import { JoinCommunityFaq } from '@/components/features/join-community/join-community-faq';
import { JoinCommunityHero } from '@/components/features/join-community/join-community-hero';
import { WhyJoinGrid } from '@/components/features/join-community/why-join-grid';
import { SectionHeader } from '@/components/snippets/section-header/section-header';

export const metadata: Metadata = {
	title: 'Join Community — Product Peers BD',
	description:
		"Create a free account and get into every room: events, mentors, contests, and the case studies Bangladesh's product community usually keeps to itself."
};

// TODO: redirect logged-in Members to Member Dashboard Overview once session/auth state exists — this page is Guest-only per spec.
export default function JoinCommunityPage() {
	return (
		<>
			<JoinCommunityHero />
			<CommunityPulse />

			<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Why join"
					title="What you get on day one"
					description="No trial period, no locked tiers — a free account opens all of this at once."
				/>
				<WhyJoinGrid />
			</section>

			<StatsBarVariantB />
			<Testimonials />
			<JoinCommunityFaq />
			<JoinCommunityCta />
		</>
	);
}
