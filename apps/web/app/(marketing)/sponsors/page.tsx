import type { Metadata } from 'next';

import { BecomeSponsorCta } from '@/components/features/sponsors/become-sponsor-cta';
import { FeaturedSponsors } from '@/components/features/sponsors/featured-sponsors';
import { SponsorsGrid } from '@/components/features/sponsors/sponsors-grid';
import { SponsorsHero } from '@/components/features/sponsors/sponsors-hero';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { sponsors } from '@/constants/home';

export const metadata: Metadata = {
	title: 'Sponsors — Product Peers BD',
	description:
		"The companies backing Bangladesh's product community — founding partners and everyone who's chosen to support Product Peers BD."
};

export default function SponsorsPage() {
	return (
		<>
			<SponsorsHero />

			<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Founding partners"
					title="The companies leading the way"
					description="Featured sponsors get top billing here and on the homepage."
				/>
				<div className="mt-10">
					<FeaturedSponsors />
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Every backer, one list"
					title="All sponsors"
					description={`All ${sponsors.length} companies backing Bangladesh's product community — founding partners and everyone who's chosen to support Product Peers BD..`}
				/>
				<div className="mt-10">
					<SponsorsGrid />
				</div>
			</section>

			<BecomeSponsorCta />
		</>
	);
}
