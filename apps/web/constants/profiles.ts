import { ActivityEntityType, ActivityType } from '@/enums/profile';
import type { PublicProfile } from '@/types/profile';

export const profiles: PublicProfile[] = [
	{
		username: 'sadia-afrin',
		name: 'Sadia Afrin',
		title: 'Business Analyst',
		company: 'City Bank',
		city: 'Dhaka',
		country: 'Bangladesh',
		bio: 'I turn messy internal data into decisions someone actually acts on. Day job is banking analytics at City Bank; nights and weekends go into Shelfie, a hyperlocal inventory app for neighborhood shops. I write mostly about retention metrics and the gap between what a dashboard shows and what a stakeholder needs to hear.',
		skills: [
			'Data Analysis',
			'SQL',
			'Retention Metrics',
			'Stakeholder Reporting',
			'Product Discovery',
			'Figma'
		],
		experience: [
			{
				company: 'Shelfie Labs',
				title: 'Founder',
				duration: 'Jul 2026 — Present',
				description:
					'Built and launched Shelfie, letting neighborhood shops post live stock so nearby customers can check before walking over.'
			},
			{
				company: 'City Bank',
				title: 'Business Analyst',
				duration: 'Jan 2024 — Present',
				description:
					'Unify reporting across retail banking teams and run the metrics that inform quarterly product reviews.'
			},
			{
				company: 'bKash',
				title: 'Junior Data Analyst',
				duration: 'Aug 2022 — Dec 2023',
				description:
					'Supported fraud and transaction-pattern reporting.'
			}
		],
		socialLinks: {
			linkedin: 'https://linkedin.com/in/sadia-afrin',
			website: 'https://shelfie.app'
		},
		followerCount: 612,
		isMentor: false,
		joinedAt: '2025-11-03T10:00:00+06:00',
		activities: [
			{
				id: 'sadia-joined',
				type: ActivityType.JOINED_PLATFORM,
				occurredAt: '2025-11-03T10:00:00+06:00',
				description: 'Joined Product Peers BD'
			},
			{
				id: 'sadia-roadmap-rumble',
				type: ActivityType.WON_CONTEST,
				occurredAt: '2026-05-22T18:00:00+06:00',
				description:
					"Won Roadmap Rumble as team leader of Team Anchor — 'A six-month roadmap that survives every stakeholder objection'",
				href: '/contests/roadmap-rumble',
				entityType: ActivityEntityType.CONTEST,
				entitySlug: 'roadmap-rumble'
			},
			{
				id: 'sadia-case-study',
				type: ActivityType.PUBLISHED_CASE_STUDY,
				occurredAt: '2026-06-14T09:00:00+06:00',
				description:
					"Published the case study 'Unifying Three Internal Dashboards Into One' for City Bank",
				href: '/case-studies/unifying-three-dashboards-into-one',
				entityType: ActivityEntityType.CASE_STUDY,
				entitySlug: 'unifying-three-dashboards-into-one'
			},
			{
				id: 'sadia-shonar-bangla',
				type: ActivityType.WON_CONTEST,
				occurredAt: '2026-07-30T18:00:00+06:00',
				description:
					'Champion with Team Shonar Bangla at Case Study Slam, Vol. 3',
				href: '/contests/case-study-slam-vol-3',
				entityType: ActivityEntityType.CONTEST,
				entitySlug: 'case-study-slam-vol-3'
			},
			{
				id: 'sadia-shelfie',
				type: ActivityType.LAUNCHED_PRODUCT,
				occurredAt: '2026-07-20T10:00:00+06:00',
				description: 'Launched Shelfie on Product Peers BD',
				href: '/products/shelfie',
				entityType: ActivityEntityType.PRODUCT,
				entitySlug: 'shelfie'
			},
			{
				id: 'sadia-article',
				type: ActivityType.PUBLISHED_ARTICLE,
				occurredAt: '2026-08-05T11:00:00+06:00',
				description:
					"Published 'Cohort Retention Metrics That Actually Matter'",
				href: '/articles/cohort-retention-metrics-that-actually-matter',
				entityType: ActivityEntityType.ARTICLE,
				entitySlug: 'cohort-retention-metrics-that-actually-matter'
			},
			{
				id: 'sadia-milestone',
				type: ActivityType.FOLLOWER_MILESTONE,
				occurredAt: '2026-08-10T09:00:00+06:00',
				description: 'Reached 500 followers'
			}
		]
	},
	{
		username: 'nusrat-jahan',
		name: 'Nusrat Jahan',
		title: 'Head of Product',
		company: 'Chaldal',
		city: 'Dhaka',
		country: 'Bangladesh',
		bio: "I run product at Chaldal, where most of my job is saying no to good ideas so the team can ship the one that matters. Outside work I hold office hours for early-career PMs and write about pricing and roadmapping for a Bangladeshi market that most frameworks weren't built for.",
		skills: [
			'Roadmapping',
			'Pricing Strategy',
			'Discovery',
			'Fintech',
			'Growth'
		],
		experience: [
			{
				company: 'Chaldal',
				title: 'Head of Product',
				duration: 'Feb 2024 — Present',
				description:
					'Own the product roadmap across grocery fulfillment and the merchant-facing ops tools.'
			},
			{
				company: 'bKash',
				title: 'Senior Product Manager',
				duration: 'Mar 2021 — Jan 2024',
				description: 'Led pricing and merchant onboarding.'
			}
		],
		socialLinks: {
			linkedin: 'https://linkedin.com/in/nusrat-jahan',
			twitter: 'https://twitter.com/nusratjahan'
		},
		followerCount: 1420,
		isMentor: true,
		mentorCredentials: {
			sessionsDelivered: 34,
			eventsSpoken: 1,
			contestsJudged: 0
		},
		joinedAt: '2025-02-10T10:00:00+06:00',
		activities: [
			{
				id: 'nusrat-joined',
				type: ActivityType.JOINED_PLATFORM,
				occurredAt: '2025-02-10T10:00:00+06:00',
				description: 'Joined Product Peers BD'
			},
			{
				id: 'nusrat-became-mentor',
				type: ActivityType.BECAME_MENTOR,
				occurredAt: '2025-03-01T10:00:00+06:00',
				description: 'Became a Product Peers BD Mentor'
			},
			{
				id: 'nusrat-case-study',
				type: ActivityType.PUBLISHED_CASE_STUDY,
				occurredAt: '2026-06-01T09:00:00+06:00',
				description:
					"Published the case study 'Redesigning Onboarding for a Neobank' for bKash",
				href: '/case-studies/redesigning-onboarding-for-a-neobank',
				entityType: ActivityEntityType.CASE_STUDY,
				entitySlug: 'redesigning-onboarding-for-a-neobank'
			},
			{
				id: 'nusrat-article',
				type: ActivityType.PUBLISHED_ARTICLE,
				occurredAt: '2026-07-15T11:00:00+06:00',
				description:
					"Published 'A Pricing Playbook for Bangladeshi SaaS'",
				href: '/articles/a-pricing-playbook-for-bangladeshi-saas',
				entityType: ActivityEntityType.ARTICLE,
				entitySlug: 'a-pricing-playbook-for-bangladeshi-saas'
			},
			{
				id: 'nusrat-spoke',
				type: ActivityType.SPOKE_AT_EVENT,
				occurredAt: '2026-08-13T00:00:00+06:00',
				description:
					"Moderating 'AI in Product Strategy: A Panel Discussion'",
				href: '/events/ai-product-strategy-panel',
				entityType: ActivityEntityType.EVENT,
				entitySlug: 'ai-product-strategy-panel'
			},
			{
				id: 'nusrat-milestone',
				type: ActivityType.FOLLOWER_MILESTONE,
				occurredAt: '2026-08-11T09:00:00+06:00',
				description: 'Reached 1,000 followers'
			}
		]
	},
	{
		username: 'imran-hossain',
		name: 'Imran Hossain',
		title: 'Co-Founder & Director of Product',
		company: 'Flizz',
		city: 'Dhaka',
		country: 'Bangladesh',
		bio: "I started Product Peers BD in 2025 because I was tired of joining calls with PMs in Bangalore or Jakarta and hearing advice that assumed a payment stack, a logistics network, or a user base we don't have here. Now I run product at Sheba Platform by day, and spend most nights reading the case studies members post — still the best part of my week.",
		skills: [
			'Product Strategy',
			'Marketplace Growth',
			'0-to-1',
			'Community Building',
			'Fintech'
		],
		experience: [
			{
				company: 'Flizz',
				title: 'Co-Founder & Director of Product',
				duration: 'Nov 2024 — Present',
				description:
					'Drive product roadmap through continuous market research and competitor analysis. Validate product opportunities with structured experiments and prototypes. Define success metrics and align cross-functional teams around shared outcomes.'
			},
			{
				company: 'Gravio',
				title: 'Business Analyst',
				duration: 'Apr 2022 — Oct 2024',
				description:
					'Analyzed stakeholder requirements and created actionable specifications aligned with business strategy. Developed process documentation and user stories that minimized development friction. Served as the bridge between business teams and engineering, ensuring shared understanding'
			},
			{
				company: 'Freelance',
				title: 'Digital Marketing Expert',
				duration: 'Feb 2019 — Mar 2023',
				description:
					'Managed and optimized Facebook ad campaigns using audience data, A/B testing, and performance analysis. Developed multi-channel marketing strategies to acquire and retain customers profitably. Analyzed campaign data to continuously improve conversion rates and ROAS'
			}
		],
		socialLinks: {
			linkedin: 'https://linkedin.com/in/imranhossain-pm',
			twitter: 'https://twitter.com/imranhossain'
		},
		followerCount: 2140,
		isMentor: true,
		mentorCredentials: {
			sessionsDelivered: 58,
			eventsSpoken: 4,
			contestsJudged: 3
		},
		joinedAt: '2025-10-12T10:00:00+06:00',
		activities: [
			{
				id: 'imran-founded',
				type: ActivityType.JOINED_PLATFORM,
				occurredAt: '2025-10-12T10:00:00+06:00',
				description: 'Founded Product Peers BD'
			},
			{
				id: 'imran-article',
				type: ActivityType.PUBLISHED_ARTICLE,
				occurredAt: '2026-07-15T09:00:00+06:00',
				description: "Published 'Writing PRDs People Actually Read'",
				href: '/articles/writing-prds-people-actually-read',
				entityType: ActivityEntityType.ARTICLE,
				entitySlug: 'writing-prds-people-actually-read'
			},
			{
				id: 'imran-judged',
				type: ActivityType.JUDGED_CONTEST,
				occurredAt: '2026-07-30T18:00:00+06:00',
				description: 'Judged Case Study Slam, Vol. 3',
				href: '/contests/case-study-slam-vol-3',
				entityType: ActivityEntityType.CONTEST,
				entitySlug: 'case-study-slam-vol-3'
			}
		]
	},
	{
		username: 'iftekhar-alam',
		name: 'Iftekhar Alam',
		title: 'Senior Product Designer',
		company: 'Bkash',
		city: 'Dhaka',
		country: 'Bangladesh',
		bio: "I co-founded Product Peers BD to fix a specific problem: there was nowhere in Bangladesh to ask a senior PM or designer a dumb question without it living on your LinkedIn feed forever. I built the mentor-matching flow myself, badge and all, and I still review every mentor application before it's approved.",
		skills: [
			'Product Design',
			'Design Systems',
			'Mentorship',
			'User Research',
			'Figma'
		],
		experience: [
			{
				company: 'Bkash',
				title: 'Senior Product Designer',
				duration: 'Mar 2022 — Present',
				description:
					'Lead design for the merchant payments and QR checkout experience.'
			},
			{
				company: 'Grameenphone',
				title: 'Product Designer',
				duration: 'Jun 2019 — Feb 2022',
				description: 'Designed the MyGP self-care app redesign.'
			}
		],
		socialLinks: {
			linkedin: 'https://linkedin.com/in/iftekhar-alam',
			website: 'https://iftekharalam.design'
		},
		followerCount: 1870,
		isMentor: true,
		mentorCredentials: {
			sessionsDelivered: 71,
			eventsSpoken: 6,
			contestsJudged: 5
		},
		joinedAt: '2025-10-12T10:00:00+06:00',
		activities: [
			{
				id: 'iftekhar-joined',
				type: ActivityType.JOINED_PLATFORM,
				occurredAt: '2025-10-12T10:00:00+06:00',
				description: 'Joined Product Peers BD as a co-founder'
			},
			{
				id: 'iftekhar-became-mentor',
				type: ActivityType.BECAME_MENTOR,
				occurredAt: '2025-11-01T10:00:00+06:00',
				description: 'Became a Product Peers BD Mentor'
			},
			{
				id: 'iftekhar-milestone',
				type: ActivityType.FOLLOWER_MILESTONE,
				occurredAt: '2026-08-01T09:00:00+06:00',
				description: 'Reached 1,500 followers'
			}
		]
	}
];

export function getProfileByUsername(
	username: string
): PublicProfile | undefined {
	return profiles.find((profile) => profile.username === username);
}
