import { CaseStudiesSpotlight } from '@/components/features/home/case-studies-spotlight';
import { ContestsPreview } from '@/components/features/home/contests-preview';
import { FeaturedArticles } from '@/components/features/home/featured-articles';
import { Hero } from '@/components/features/home/hero';
import { JoinCommunityCta } from '@/components/features/home/join-community-cta';
import { MentorshipSpotlight } from '@/components/features/home/mentorship-spotlight';
import { ProductsSpotlight } from '@/components/features/home/products-spotlight';
import { SponsorsStrip } from '@/components/features/home/sponsors-strip';
// import { StatsBar } from '@/components/features/home/stats-bar';
// import { StatsBarVariantA } from '@/components/features/home/stats-bar-variant-a';
// import { StatsBarVariantB } from '@/components/features/home/stats-bar-variant-b';
import { StatsBarVariantC } from '@/components/features/home/stats-bar-variant-c';
import { Testimonials } from '@/components/features/home/testimonials';
import { UpcomingEvents } from '@/components/features/home/upcoming-events';

export default function HomePage() {
	return (
		<>
			<Hero />
			<SponsorsStrip />
			{/* TODO: need to check this one */}
			{/* <StatsBar /> */}
			{/* <StatsBarVariantA /> */}
			{/* <StatsBarVariantB /> */}
			<StatsBarVariantC />
			<UpcomingEvents />
			<MentorshipSpotlight />
			<CaseStudiesSpotlight />
			<FeaturedArticles />
			<ProductsSpotlight />
			<ContestsPreview />
			<Testimonials />
			<JoinCommunityCta />
		</>
	);
}
