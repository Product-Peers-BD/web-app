import type { CaseStudyAuthor, CaseStudyListItem } from '@/types/case-study';

const authors = {
	rifat: {
		slug: 'rifat-hasan',
		name: 'Rifat Hasan',
		title: 'Senior Business Analyst, City Bank',
		isMentor: false
	},
	nusrat: {
		slug: 'nusrat-jahan',
		name: 'Nusrat Jahan',
		title: 'Head of Product, Chaldal',
		isMentor: true
	},
	farzana: {
		slug: 'farzana-rahman',
		name: 'Farzana Rahman',
		title: 'Lead Product Designer',
		isMentor: true
	},
	imran: {
		slug: 'imran-kabir',
		name: 'Imran Kabir',
		title: 'Founder, ShipFast Labs',
		isMentor: true
	},
	tanvir: {
		slug: 'tanvir-ahmed',
		name: 'Tanvir Ahmed',
		title: 'Head of Growth, D2C',
		isMentor: false
	},
	sadia: {
		slug: 'sadia-afrin',
		name: 'Sadia Afrin',
		title: 'Business Analyst, City Bank',
		isMentor: false
	}
} satisfies Record<string, CaseStudyAuthor>;

function daysAgo(days: number): string {
	return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export const caseStudies: CaseStudyListItem[] = [
	{
		slug: 'cutting-checkout-drop-off-40-percent',
		title: 'Cutting Checkout Drop-off by 40%',
		clientName: 'Chaldal',
		category: 'Growth & Retention',
		industries: ['E-commerce'],
		author: authors.rifat,
		viewCount: 6210,
		publishedAt: daysAgo(3)
	},
	{
		slug: 'redesigning-onboarding-for-a-neobank',
		title: 'Redesigning Onboarding for a Neobank',
		clientName: 'bKash',
		category: 'Onboarding & Activation',
		industries: ['Fintech'],
		author: authors.nusrat,
		viewCount: 5480,
		publishedAt: daysAgo(6)
	},
	{
		slug: 'from-zero-to-10k-riders',
		title: 'From Zero to 10,000 Riders in 90 Days',
		clientName: 'Pathao',
		category: 'Platform Scaling',
		industries: ['Mobility'],
		author: authors.farzana,
		viewCount: 4920,
		publishedAt: daysAgo(9)
	},
	{
		slug: 'a-pricing-model-that-survived-ramadan',
		title: 'A Pricing Model That Survived Ramadan Demand Spikes',
		clientName: 'ShopUp',
		category: 'Pricing & Monetization',
		industries: ['E-commerce', 'Logistics'],
		author: authors.tanvir,
		viewCount: 3110,
		publishedAt: daysAgo(12)
	},
	{
		slug: 'unifying-three-dashboards-into-one',
		title: 'Unifying Three Internal Dashboards Into One',
		clientName: 'City Bank',
		category: 'Design Systems',
		industries: ['Fintech', 'Banking'],
		author: authors.sadia,
		viewCount: 1870,
		publishedAt: daysAgo(15)
	},
	{
		slug: 'the-research-sprint-that-killed-a-feature',
		title: 'The Research Sprint That Killed a Feature Before It Shipped',
		clientName: 'Sheba.xyz',
		category: 'Research & Discovery',
		industries: ['Home Services'],
		author: authors.imran,
		viewCount: 2640,
		publishedAt: daysAgo(18)
	},
	{
		slug: 'rebuilding-search-for-a-classifieds-marketplace',
		title: 'Rebuilding Search for a 20-Million-Listing Marketplace',
		clientName: 'Bikroy',
		category: 'Platform Scaling',
		industries: ['Marketplace'],
		author: authors.nusrat,
		viewCount: 2280,
		publishedAt: daysAgo(21)
	},
	{
		slug: 'retention-loop-for-a-grocery-app',
		title: 'Building the Retention Loop That Doubled Week-4 Users',
		clientName: 'Daraz',
		category: 'Growth & Retention',
		industries: ['E-commerce'],
		author: authors.rifat,
		viewCount: 3960,
		publishedAt: daysAgo(24)
	},
	{
		slug: 'onboarding-freight-operators-offline-first',
		title: 'Onboarding Freight Operators With an Offline-First Flow',
		clientName: 'Truck Lagbe',
		category: 'Onboarding & Activation',
		industries: ['Logistics'],
		author: authors.farzana,
		viewCount: 1420,
		publishedAt: daysAgo(27)
	}
];

export function getCaseStudyBySlug(
	slug: string
): CaseStudyListItem | undefined {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
