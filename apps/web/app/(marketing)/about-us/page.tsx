import type { Metadata } from 'next';

import { AboutHero } from '@/components/features/about/about-hero';
import { TeamGrid } from '@/components/features/about/team-grid';
import { Timeline } from '@/components/features/about/timeline';
import { ValuesGrid } from '@/components/features/about/values-grid';
import { JoinCommunityCta } from '@/components/features/home/join-community-cta';
import { StatsBarVariantB } from '@/components/features/home/stats-bar-variant-b';
import { SectionHeader } from '@/components/snippets/section-header/section-header';

export const metadata: Metadata = {
	title: 'About Us — Product Peers BD',
	description:
		"How Product Peers BD started, what it stands for, and who runs it — Bangladesh's community for people who build product."
};

// TODO: hide JoinCommunityCta for logged-in Members once session/auth state exists — matches Home's behavior per spec.
export default function AboutUsPage() {
	return (
		<>
			<AboutHero />
			<StatsBarVariantB />
			<Timeline />

			<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="What we stand for"
					title="Four things we don't compromise on"
				/>
				<ValuesGrid />
			</section>

			<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Who runs this"
					title="The people behind Product Peers BD"
					description="All still working day jobs in product — click through to see what they've shipped."
				/>
				<TeamGrid />
			</section>

			<JoinCommunityCta />
		</>
	);
}
