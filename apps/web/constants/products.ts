import { ProductStage } from '@/enums/product';
import type { ProductDetail } from '@/types/product';

function daysAgo(days: number): string {
	return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export const products: ProductDetail[] = [
	{
		slug: 'shelfie',
		name: 'Shelfie',
		industries: ['Retail Tech'],
		stage: ProductStage.BETA,
		tags: ['Marketplace', 'Mobile'],
		viewCount: 812,
		publishedAt: '2026-07-20T10:00:00+06:00',
		companyName: 'Shelfie Labs',
		description: [
			'Shelfie lets neighborhood shops list what is actually on their shelves right now, so nearby customers can check stock before walking over instead of gambling on a closed rack.',
			'Shopkeepers update inventory with a barcode scan between customers — no spreadsheets, no separate admin panel to learn.'
		],
		galleryCount: 4,
		productUrl: 'https://shelfie.app',
		problem:
			'Neighborhood shops in Dhaka have no easy way to tell nearby customers what is in stock right now, so people default to the same two or three big-box apps out of habit.',
		team: [
			{
				slug: 'sadia-afrin',
				name: 'Sadia Afrin',
				role: 'Founder',
				isCreator: true
			},
			{
				slug: 'tanvir-ahmed',
				name: 'Tanvir Ahmed',
				role: 'Engineering Lead'
			}
		],
		relatedCaseStudies: [
			{
				slug: 'cutting-checkout-drop-off-40-percent',
				title: 'Cutting Checkout Drop-off by 40%',
				clientName: 'Chaldal'
			}
		],
		likeCount: 64,
		comments: [
			{
				authorName: 'Rifat Hasan',
				authorIsMentor: true,
				body: 'Shipping barcode-scan restocking before a native app is the right call at this stage — keep the loop tight until retention proves out.',
				postedAt: daysAgo(6),
				replies: []
			}
		]
	},
	{
		slug: 'khoros',
		name: 'Khoros',
		industries: ['HealthTech'],
		stage: ProductStage.MVP,
		tags: ['AI', 'B2B'],
		viewCount: 540,
		publishedAt: '2026-07-02T10:00:00+06:00',
		companyName: 'Khoros Health',
		description: [
			'Khoros gives private clinics outside Dhaka a queue board and an intake assistant that flags returning patients with pending lab results, replacing the paper register at the front desk.',
			'Currently running in three pilot clinics in Comilla while the intake-assistant model is tuned on real patient flow.'
		],
		galleryCount: 0,
		problem:
			'Private clinics outside Dhaka run patient intake on paper registers, so there is no way to see wait times or flag patients with pending results.',
		team: [
			{
				slug: 'nabila-karim',
				name: 'Nabila Karim',
				role: 'Founder',
				isCreator: true
			}
		],
		relatedCaseStudies: [],
		likeCount: 38,
		comments: []
	},
	{
		slug: 'routely',
		name: 'Routely',
		industries: ['Logistics'],
		stage: ProductStage.LIVE,
		tags: ['API', 'B2B'],
		viewCount: 1204,
		publishedAt: '2026-05-14T10:00:00+06:00',
		companyName: 'Routely',
		description: [
			'Routely re-plans delivery routes every morning against live traffic instead of a fixed manual plan, and exposes the same optimizer as an API so fleets can drop it into their own dispatch tools.',
			'Three courier networks now run their daily routing through Routely, covering roughly 40,000 stops a week across Dhaka and Chattogram.'
		],
		galleryCount: 5,
		productUrl: 'https://routely.io',
		problem:
			'Delivery fleets in Dhaka plan routes manually every morning, which wastes fuel and consistently misses delivery windows during peak traffic.',
		team: [
			{
				slug: 'kazi-nayeem',
				name: 'Kazi Nayeem',
				role: 'Founder',
				isCreator: true
			},
			{
				slug: 'mahin-islam',
				name: 'Mahin Islam',
				role: 'Product Manager'
			},
			{ slug: 'priya-das', name: 'Priya Das', role: 'Backend Engineer' }
		],
		relatedCaseStudies: [
			{
				slug: 'from-zero-to-10k-riders',
				title: 'From Zero to 10,000 Riders in 90 Days',
				clientName: 'Pathao'
			},
			{
				slug: 'onboarding-freight-operators-offline-first',
				title: 'Onboarding Freight Operators With an Offline-First Flow',
				clientName: 'Truck Lagbe'
			}
		],
		likeCount: 152,
		comments: [
			{
				authorName: 'Nusrat Jahan',
				authorIsMentor: true,
				body: 'The API-first angle is the right bet — most local logistics tools bolt on integrations as an afterthought, and that always shows later.',
				postedAt: daysAgo(11),
				replies: [
					{
						authorName: 'Kazi Nayeem',
						body: 'Thanks! It is basically the only way we could support three different dispatch systems without three separate codebases.',
						postedAt: daysAgo(10)
					}
				]
			}
		]
	},
	{
		slug: 'paathshala',
		name: 'Paathshala',
		industries: ['EdTech'],
		stage: ProductStage.LIVE,
		tags: ['Mobile', 'Subscription'],
		viewCount: 980,
		publishedAt: '2026-04-28T10:00:00+06:00',
		companyName: 'Paathshala',
		description: [
			'Paathshala is an offline-first exam-prep app — question banks and video explainers download once and stay usable through the patchy connections common outside major cities.',
			'A daily practice streak and district-level leaderboards keep students returning between the offline study sessions.'
		],
		galleryCount: 4,
		productUrl: 'https://paathshala.app',
		problem:
			'Students outside major cities lose study time to unreliable internet, so most exam-prep apps become unusable exactly when they are needed most.',
		team: [
			{
				slug: 'lamia-sultana',
				name: 'Lamia Sultana',
				role: 'Founder',
				isCreator: true
			},
			{ slug: 'arif-hossain', name: 'Arif Hossain', role: 'Content Lead' }
		],
		relatedCaseStudies: [],
		likeCount: 91,
		comments: []
	},
	{
		slug: 'khamarbondhu',
		name: 'Khamarbondhu',
		industries: ['AgriTech'],
		stage: ProductStage.MVP,
		tags: ['IoT', 'B2B'],
		viewCount: 205,
		publishedAt: '2026-06-18T10:00:00+06:00',
		companyName: 'Khamarbondhu',
		description: [
			'Khamarbondhu pairs a low-cost soil sensor kit with an SMS advisory service, so a smallholder farmer without a smartphone can still get a same-day irrigation or fertilizer recommendation.'
		],
		galleryCount: 2,
		problem:
			'Smallholder farmers make irrigation and fertilizer decisions by guesswork, since soil-testing services are expensive and far from most villages.',
		team: [
			{
				slug: 'mim-sultana',
				name: 'Mim Sultana',
				role: 'Founder',
				isCreator: true
			}
		],
		relatedCaseStudies: [],
		likeCount: 22,
		comments: []
	},
	{
		slug: 'thikana',
		name: 'Thikana',
		industries: ['Real Estate'],
		stage: ProductStage.IDEA,
		tags: ['Marketplace'],
		viewCount: 64,
		publishedAt: '2026-08-05T10:00:00+06:00',
		description: [
			'Thikana is a rental listings idea built around verification first — every listing would require a landlord to confirm ownership before it goes live, cutting out the unverified posts that fill most Facebook rental groups today.'
		],
		galleryCount: 0,
		problem:
			'Renters in Dhaka rely on word-of-mouth and unverified Facebook groups to find apartments, with no reliable way to confirm a listing is real before visiting.',
		team: [
			{
				slug: 'nadia-islam',
				name: 'Nadia Islam',
				role: 'Founder',
				isCreator: true
			}
		],
		relatedCaseStudies: [],
		likeCount: 5,
		comments: []
	},
	{
		slug: 'bhromon',
		name: 'Bhromon',
		industries: ['Travel'],
		stage: ProductStage.BETA,
		tags: ['Mobile', 'AI'],
		viewCount: 431,
		publishedAt: '2026-06-30T10:00:00+06:00',
		companyName: 'Bhromon',
		description: [
			'Bhromon strings together bus, launch, and train schedules into a single multi-stop itinerary for domestic travel, instead of leaving travelers to piece together timetables from a dozen operator pages by hand.'
		],
		galleryCount: 3,
		productUrl: 'https://bhromon.app',
		problem:
			'Planning a multi-stop trip inside Bangladesh means piecing together bus, launch, and train schedules from a dozen different sources by hand.',
		team: [
			{
				slug: 'fahim-chowdhury',
				name: 'Fahim Chowdhury',
				role: 'Founder',
				isCreator: true
			},
			{ slug: 'tasnim-rahman', name: 'Tasnim Rahman', role: 'Design' }
		],
		relatedCaseStudies: [],
		likeCount: 47,
		comments: []
	},
	{
		slug: 'taskbondhu',
		name: 'Taskbondhu',
		industries: ['Productivity'],
		stage: ProductStage.LIVE,
		tags: ['SaaS', 'Subscription'],
		viewCount: 1502,
		publishedAt: '2026-03-11T10:00:00+06:00',
		companyName: 'ShipFast Labs',
		description: [
			'Taskbondhu is a lightweight task board built for small teams who found Jira too heavy and a shared spreadsheet too loose — boards, due dates, and a daily digest, nothing else.',
			'Now used by over 300 small teams, most switching over from a spreadsheet rather than another task tool.'
		],
		galleryCount: 6,
		productUrl: 'https://taskbondhu.com',
		problem:
			'Small teams outgrow a shared spreadsheet quickly but find most task-management tools too heavy to set up and keep updated.',
		team: [
			{
				slug: 'imran-kabir',
				name: 'Imran Kabir',
				role: 'Founder',
				isCreator: true
			},
			{ slug: 'rezaul-karim', name: 'Rezaul Karim', role: 'Growth' }
		],
		relatedCaseStudies: [],
		likeCount: 218,
		comments: [
			{
				authorName: 'Farzana Rahman',
				authorIsMentor: true,
				body: 'The daily digest over notifications is a good call for a small-team tool — fewer interruptions, same visibility.',
				postedAt: daysAgo(20),
				replies: []
			}
		]
	},
	{
		slug: 'adalat-ai',
		name: 'Adalat AI',
		industries: ['LegalTech'],
		stage: ProductStage.IDEA,
		tags: ['AI', 'B2B'],
		viewCount: 39,
		publishedAt: '2026-08-09T10:00:00+06:00',
		description: [
			'Adalat AI would summarize case filings and flag upcoming hearing dates for small law firms, who currently track both by hand across paper files and personal calendars.'
		],
		galleryCount: 0,
		problem:
			'Small law firms track hearing dates and case status by hand, so filings slip through and hearings get missed.',
		team: [
			{
				slug: 'ruma-akter',
				name: 'Ruma Akter',
				role: 'Founder',
				isCreator: true
			}
		],
		relatedCaseStudies: [],
		likeCount: 3,
		comments: []
	},
	{
		slug: 'paatabondhu',
		name: 'Paatabondhu',
		industries: ['FinTech'],
		stage: ProductStage.LIVE,
		tags: ['API', 'Security'],
		viewCount: 1120,
		publishedAt: '2026-02-22T10:00:00+06:00',
		companyName: 'Paatabondhu',
		description: [
			'Paatabondhu is a bank-statement reconciliation API for small businesses — upload a statement, and it matches every line against invoices automatically instead of an accountant doing it by hand at month end.'
		],
		galleryCount: 3,
		productUrl: 'https://paatabondhu.com',
		problem:
			'Small businesses reconcile bank statements against invoices by hand every month, which eats a full day of an accountant’s time and still misses mismatches.',
		team: [
			{
				slug: 'meherun-nesa',
				name: 'Meherun Nesa',
				role: 'Founder',
				isCreator: true
			},
			{
				slug: 'shanto-roy',
				name: 'Shanto Roy',
				role: 'Security Engineer'
			}
		],
		relatedCaseStudies: [
			{
				slug: 'redesigning-onboarding-for-a-neobank',
				title: 'Redesigning Onboarding for a Neobank',
				clientName: 'bKash'
			},
			{
				slug: 'unifying-three-dashboards-into-one',
				title: 'Unifying Three Internal Dashboards Into One',
				clientName: 'City Bank'
			}
		],
		likeCount: 134,
		comments: []
	},
	{
		slug: 'rangmoshaal',
		name: 'Rangmoshaal',
		industries: ['Creative Tools'],
		stage: ProductStage.PAUSED,
		tags: ['Design', 'SaaS'],
		viewCount: 178,
		publishedAt: '2026-01-16T10:00:00+06:00',
		companyName: 'Rangmoshaal',
		description: [
			'Rangmoshaal was a collaborative mood-board tool built for Bangladeshi design teams, with local stock textures and Bangla type pairing built in rather than bolted on.'
		],
		galleryCount: 3,
		productUrl: 'https://rangmoshaal.design',
		problem:
			'Design teams were stitching together separate mood-board and stock-asset tools that had no local Bangla type or texture support.',
		team: [
			{
				slug: 'proma-akter',
				name: 'Proma Akter',
				role: 'Founder',
				isCreator: true
			}
		],
		relatedCaseStudies: [],
		likeCount: 29,
		comments: []
	},
	{
		slug: 'quickkhabar',
		name: 'QuickKhabar',
		industries: ['Food Delivery'],
		stage: ProductStage.SUNSET,
		tags: ['Marketplace', 'Mobile'],
		viewCount: 690,
		publishedAt: '2025-11-08T10:00:00+06:00',
		companyName: 'QuickKhabar',
		description: [
			'QuickKhabar connected home cooks with office workers looking for a home-style lunch subscription, delivered daily by the cooks themselves within a fixed radius.',
			'The product is no longer accepting new subscriptions — the team is folding the learnings into a new venture.'
		],
		galleryCount: 2,
		productUrl: 'https://quickkhabar.com',
		problem:
			'Office workers wanted daily home-style lunch instead of the same handful of restaurant delivery options.',
		team: [
			{
				slug: 'rakib-hasan',
				name: 'Rakib Hasan',
				role: 'Founder',
				isCreator: true
			}
		],
		relatedCaseStudies: [],
		likeCount: 41,
		comments: []
	},
	{
		slug: 'green-circuit',
		name: 'Green Circuit',
		industries: ['Climate Tech'],
		stage: ProductStage.MVP,
		tags: ['Hardware', 'IoT'],
		viewCount: 96,
		publishedAt: '2026-07-27T10:00:00+06:00',
		companyName: 'Green Circuit',
		description: [
			'Green Circuit is a plug-in energy monitor for small factories that flags which machines are drawing power outside their normal pattern, catching failing motors before they fail completely.'
		],
		galleryCount: 1,
		problem:
			'Small factories only discover a failing motor after it stops production, since there is no affordable way to watch per-machine power draw.',
		team: [
			{
				slug: 'ornob-hasan',
				name: 'Ornob Hasan',
				role: 'Founder',
				isCreator: true
			}
		],
		relatedCaseStudies: [],
		likeCount: 14,
		comments: []
	}
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
	return products.find((product) => product.slug === slug);
}
