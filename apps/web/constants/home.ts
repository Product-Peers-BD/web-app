import { ContestPreviewMode, WinnerTier } from '@/enums/contest';
import { EventFormat, EventType } from '@/enums/event';
import { ProductStage } from '@/enums/product';
import type {
	ArticleCard,
	CaseStudyCard,
	ContestCard,
	MentorCard,
	ProductCard,
	SponsorItem,
	StatItem,
	TestimonialItem,
	UpcomingEventCard
} from '@/types/home';

export const heroStats: StatItem[] = [
	{ label: 'Members', value: '1,204' },
	{ label: 'Events hosted', value: '84' },
	{ label: 'Contests held', value: '12' },
	{ label: 'Mentors available', value: '46' },
	{ label: 'Articles published', value: '128' },
	{ label: 'Case studies', value: '36' },
	{ label: '1:1 sessions', value: '212' },
	{ label: 'Products listed', value: '58' }
];

export const upcomingEvents: UpcomingEventCard[] = [
	{
		slug: 'roadmapping-under-uncertainty',
		title: 'Roadmapping Under Uncertainty',
		eventType: EventType.PANEL_DISCUSSION,
		format: EventFormat.HYBRID,
		startAt: '2026-08-14T18:00:00+06:00',
		registrationOpen: true,
		hasRegistration: true
	},
	{
		slug: 'friday-product-adda',
		title: 'Friday Product Adda: Dhaka Chapter',
		eventType: EventType.COMMUNITY_ADDA,
		format: EventFormat.PHYSICAL,
		startAt: '2026-08-16T19:00:00+06:00',
		registrationOpen: true,
		hasRegistration: true
	},
	{
		slug: 'office-hours-with-a-growth-lead',
		title: 'Office Hours with a Growth Lead',
		eventType: EventType.MENTOR_SESSION,
		format: EventFormat.ONLINE,
		startAt: '2026-08-19T13:00:00+06:00',
		registrationOpen: false,
		hasRegistration: true
	},
	{
		slug: 'meetup-analytics-for-pms',
		title: 'Analytics for PMs — Monthly Meetup',
		eventType: EventType.MEETUP,
		format: EventFormat.PHYSICAL,
		startAt: '2026-08-23T18:30:00+06:00',
		registrationOpen: true,
		hasRegistration: true
	}
];

export const spotlightMentors: MentorCard[] = [
	{
		slug: 'nusrat-jahan',
		name: 'Nusrat Jahan',
		headline: 'Senior PM, fintech',
		skills: ['Roadmapping', 'Discovery', 'Fintech']
	},
	{
		slug: 'tanvir-ahmed',
		name: 'Tanvir Ahmed',
		headline: 'Head of Growth, D2C',
		skills: ['Growth', 'Lifecycle', 'Analytics']
	},
	{
		slug: 'farzana-rahman',
		name: 'Farzana Rahman',
		headline: 'Lead Product Designer',
		skills: ['Research', 'Design Systems']
	}
];

export const spotlightCaseStudies: CaseStudyCard[] = [
	{
		slug: 'cutting-checkout-drop-off-40-percent',
		title: 'Cutting Checkout Drop-off by 40%',
		clientName: 'Chaldal',
		industries: ['E-commerce'],
		authorName: 'Rifat Hasan'
	},
	{
		slug: 'redesigning-onboarding-for-a-neobank',
		title: 'Redesigning Onboarding for a Neobank',
		clientName: 'bKash',
		industries: ['Fintech'],
		authorName: 'Nusrat Jahan'
	},
	{
		slug: 'from-zero-to-10k-riders',
		title: 'From Zero to 10,000 Riders in 90 Days',
		clientName: 'Pathao',
		industries: ['Mobility'],
		authorName: 'Farzana Rahman'
	}
];

export const featuredArticles: ArticleCard[] = [
	{
		slug: 'writing-prds-people-actually-read',
		title: 'Writing PRDs People Actually Read',
		category: 'Product Management',
		authorName: 'Tanvir Ahmed',
		readTimeMinutes: 6
	},
	{
		slug: 'a-pricing-playbook-for-bangladeshi-saas',
		title: 'A Pricing Playbook for Bangladeshi SaaS',
		category: 'Growth',
		authorName: 'Nusrat Jahan',
		readTimeMinutes: 9
	},
	{
		slug: 'the-analyst-to-pm-transition',
		title: 'The Analyst-to-PM Transition, Honestly',
		category: 'Careers',
		authorName: 'Rifat Hasan',
		readTimeMinutes: 5
	}
];

export const spotlightProducts: ProductCard[] = [
	{
		slug: 'shelfie',
		name: 'Shelfie',
		industry: 'Retail Tech',
		stage: ProductStage.BETA
	},
	{
		slug: 'khoros',
		name: 'Khoros',
		industry: 'HealthTech',
		stage: ProductStage.MVP
	},
	{
		slug: 'routely',
		name: 'Routely',
		industry: 'Logistics',
		stage: ProductStage.LIVE
	}
];

export const contestPreview: ContestCard[] = [
	{
		slug: 'product-sprint-2026',
		title: 'Product Sprint 2026',
		mode: ContestPreviewMode.UPCOMING,
		dateLabel: 'Registrations close Aug 28',
		format: EventFormat.HYBRID
	},
	{
		slug: 'case-study-slam-vol-3',
		title: 'Case Study Slam, Vol. 3',
		mode: ContestPreviewMode.WINNERS,
		dateLabel: 'Results published Jul 30',
		winningTeamName: 'Team Shonar Bangla',
		winnerTier: WinnerTier.CHAMPION
	}
];

export const testimonials: TestimonialItem[] = [
	{
		authorName: 'Mahin Islam',
		authorRole: 'Product Manager, Sheba.xyz',
		quote: 'The mentor session I booked here changed how I run discovery. Ten minutes in, I had three assumptions I needed to go test.',
		rating: 5
	},
	{
		authorName: 'Sadia Afrin',
		authorRole: 'Business Analyst, City Bank',
		quote: 'PPBD is the first place in Dhaka where a BA, a designer, and a PM will actually argue about the same problem in the same room.',
		rating: 5
	},
	{
		authorName: 'Imran Kabir',
		authorRole: 'Founder, Routely',
		quote: 'Listed our product on a Wednesday, had two pilot customers reach out by Friday.',
		rating: 4
	}
];

export const featuredSponsors: SponsorItem[] = [
	{ name: 'bKash' },
	{ name: 'Chaldal' },
	{ name: 'Pathao' },
	{ name: 'Sheba.xyz' },
	{ name: 'Bondstein' },
	{ name: 'Bohubrihi' }
];
