import type { CaseStudyAuthor, CaseStudyDetail } from '@/types/case-study';

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
	imranHossain: {
		slug: 'imran-hossain',
		name: 'Imran Hossain',
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

export const caseStudies: CaseStudyDetail[] = [
	{
		slug: 'cutting-checkout-drop-off-40-percent',
		title: 'Cutting Checkout Drop-off by 40%',
		clientName: 'Chaldal',
		category: 'Growth & Retention',
		industries: ['E-commerce'],
		author: authors.rifat,
		viewCount: 6210,
		likeCount: 348,
		readTimeMinutes: 7,
		publishedAt: daysAgo(3),
		problem:
			'Cart-to-checkout completion had been sliding for two quarters, and nobody could point to a single cause — session recordings showed drop-off scattered across every step.',
		tools: ['Amplitude', 'Figma', 'Hotjar'],
		externalLink: 'https://chaldal.com',
		associatedProducts: [
			{ slug: 'shelfie', name: 'Shelfie', industry: 'Retail Tech' }
		],
		associatedContests: [],
		content: [
			{
				type: 'paragraph',
				text: 'Chaldal came to us with a funnel that looked fine in aggregate and terrible in every cohort cut. Checkout completion had drifted from 61% to 46% over two quarters, and the usual suspects — page speed, payment failures — were clean.'
			},
			{
				type: 'heading',
				text: 'The drop-off wasn’t one step, it was the address form'
			},
			{
				type: 'paragraph',
				text: 'Session recordings showed the real pattern once we watched enough of them back to back: users weren’t abandoning at payment, they were abandoning while re-entering delivery addresses that autocomplete kept getting wrong for non-standard Dhaka addresses.'
			},
			{
				type: 'quote',
				text: 'The funnel chart told us where people left. It took forty session recordings to tell us why.',
				attribution: 'Rifat Hasan'
			},
			{
				type: 'paragraph',
				text: 'We shipped a saved-address model with manual pin-drop as a first-class option instead of a fallback, and rewrote the autocomplete matching to weight landmark text over street-name text — landmarks are how most people actually describe where they live here.'
			},
			{
				type: 'heading',
				text: 'Results held through Ramadan, the real test'
			},
			{
				type: 'paragraph',
				text: 'Checkout completion recovered to 64% within three weeks and, more importantly, held through the Ramadan order spike — the period that had originally masked the problem as "seasonal."'
			}
		],
		comments: [
			{
				authorName: 'Sadia Afrin',
				body: 'The landmark-over-street-name insight is so specific to how addresses actually work here. Great catch.',
				postedAt: daysAgo(2),
				replies: []
			},
			{
				authorName: 'Imran Kabir',
				authorIsMentor: true,
				body: 'Curious what the pin-drop adoption rate looked like after launch — did it cannibalize the address book or add on top?',
				postedAt: daysAgo(1),
				replies: [
					{
						authorName: 'Rifat Hasan',
						body: 'Mostly additive — about 30% of orders now use pin-drop for a new address before ever saving one.',
						postedAt: daysAgo(1)
					}
				]
			}
		]
	},
	{
		slug: 'redesigning-onboarding-for-a-neobank',
		title: 'Redesigning Onboarding for a Neobank',
		clientName: 'bKash',
		category: 'Onboarding & Activation',
		industries: ['Fintech'],
		author: authors.nusrat,
		viewCount: 5480,
		likeCount: 301,
		readTimeMinutes: 8,
		publishedAt: daysAgo(6),
		problem:
			'KYC completion rates were healthy, but the gap between account creation and first transaction stretched to nine days on average — most new accounts sat dormant.',
		tools: ['Figma', 'Mixpanel', 'Maze'],
		externalLink: undefined,
		associatedProducts: [],
		associatedContests: [
			{
				slug: 'product-sprint-2026',
				title: 'Product Sprint 2026',
				dateLabel: 'Feb 2026'
			}
		],
		content: [
			{
				type: 'paragraph',
				text: 'The KYC funnel wasn’t the problem — 89% of people who started verification finished it. The problem showed up after: a nine-day median gap between "account created" and "first transaction sent."'
			},
			{
				type: 'heading',
				text: 'Verified isn’t the same as ready'
			},
			{
				type: 'paragraph',
				text: 'We mapped every screen a user saw between verification and their first send, and found the app assumed people already knew who they wanted to pay. New users didn’t — they’d downloaded the app for one specific reason, usually a bill or a family transfer, and the home screen didn’t surface it.'
			},
			{
				type: 'paragraph',
				text: 'We rebuilt first-run to ask one question — "What did you come here to do?" — and routed the next three screens entirely around that answer, skipping every feature that wasn’t relevant yet.'
			},
			{
				type: 'heading',
				text: 'Nine days to under two'
			},
			{
				type: 'paragraph',
				text: 'Median time-to-first-transaction dropped to under two days within the first month post-launch, and stayed there through a full quarter of new-user cohorts — not just an early-adopter spike.'
			}
		],
		comments: [
			{
				authorName: 'Farzana Rahman',
				authorIsMentor: true,
				body: 'The "what did you come here to do" reframe is such a clean unlock. Stealing the framing for a client onboarding audit next week.',
				postedAt: daysAgo(5),
				replies: []
			}
		]
	},
	{
		slug: 'from-zero-to-10k-riders',
		title: 'From Zero to 10,000 Riders in 90 Days',
		clientName: 'Pathao',
		category: 'Platform Scaling',
		industries: ['Mobility'],
		author: authors.farzana,
		viewCount: 4920,
		likeCount: 276,
		readTimeMinutes: 6,
		publishedAt: daysAgo(9),
		problem: undefined,
		tools: ['Looker', 'Figma'],
		externalLink: 'https://pathao.com',
		associatedProducts: [
			{ slug: 'routely', name: 'Routely', industry: 'Logistics' }
		],
		associatedContests: [],
		content: [
			{
				type: 'paragraph',
				text: 'Launching a new city for a ride-hailing product is mostly a supply problem before it’s a demand problem — riders don’t stay if wait times are bad, and wait times are bad without riders. We were brought in to break that loop for a second-tier city launch.'
			},
			{
				type: 'heading',
				text: 'Subsidizing the wrong side of the loop'
			},
			{
				type: 'paragraph',
				text: 'The initial plan leaned entirely on rider incentives. We proposed flipping most of the budget toward guaranteed minimum earnings for the first 500 drivers instead — enough supply density that wait times looked good from day one, which is what actually earns repeat riders.'
			},
			{
				type: 'quote',
				text: 'Riders don’t come back for a discount. They come back because the car showed up in four minutes.'
			},
			{
				type: 'paragraph',
				text: 'Ten thousand weekly active riders by day 90, with average wait time under six minutes citywide — both ahead of the original plan, at a lower total incentive spend than the rider-first version would have cost.'
			}
		],
		comments: []
	},
	{
		slug: 'a-pricing-model-that-survived-ramadan',
		title: 'A Pricing Model That Survived Ramadan Demand Spikes',
		clientName: 'ShopUp',
		category: 'Pricing & Monetization',
		industries: ['E-commerce', 'Logistics'],
		author: authors.imranHossain,
		viewCount: 3110,
		likeCount: 164,
		readTimeMinutes: 6,
		publishedAt: daysAgo(12),
		problem:
			'Delivery pricing was static year-round, which meant it was underpriced during Ramadan demand spikes and overpriced the rest of the year — margin bled on both ends.',
		tools: ['Google Sheets', 'Metabase'],
		externalLink: undefined,
		associatedProducts: [],
		associatedContests: [],
		content: [
			{
				type: 'paragraph',
				text: 'ShopUp’s delivery pricing hadn’t changed in over a year, which felt like stability but was actually two separate problems wearing one number: underpriced during Ramadan surge, overpriced the rest of the year relative to actual cost-to-serve.'
			},
			{
				type: 'heading',
				text: 'A pricing band, not a price point'
			},
			{
				type: 'paragraph',
				text: 'We modeled a banded structure that flexed within a pre-approved range based on live delivery-zone density, rather than a single fixed number merchants had to be renegotiated into. That kept the change invisible at the UI level — merchants saw a price, not a formula.'
			},
			{
				type: 'paragraph',
				text: 'The band survived the Ramadan spike without a manual override for the first time in three years, and full-year delivery margin improved by holding steady during off-peak months instead of quietly under-recovering cost.'
			}
		],
		comments: [
			{
				authorName: 'Rifat Hasan',
				body: 'Would love to know how merchants reacted once they noticed prices moving week to week — any pushback?',
				postedAt: daysAgo(11),
				replies: [
					{
						authorName: 'Imran Hossain',
						body: 'Some at first, until we started showing the "why" — delivery zone density — right on the price line. Complaints dropped fast once it wasn’t a black box.',
						postedAt: daysAgo(10)
					}
				]
			}
		]
	},
	{
		slug: 'unifying-three-dashboards-into-one',
		title: 'Unifying Three Internal Dashboards Into One',
		clientName: 'City Bank',
		category: 'Design Systems',
		industries: ['Fintech', 'Banking'],
		author: authors.sadia,
		viewCount: 1870,
		likeCount: 92,
		readTimeMinutes: 5,
		publishedAt: daysAgo(15),
		problem:
			'Three teams had each built their own reporting dashboard over two years, and branch staff were switching between all three to answer one question.',
		tools: ['Figma', 'Power BI'],
		externalLink: undefined,
		associatedProducts: [],
		associatedContests: [],
		content: [
			{
				type: 'paragraph',
				text: 'Three internal teams had each shipped their own reporting dashboard over roughly two years, solving real problems in isolation. Branch staff were opening all three tabs to answer questions that should have taken one lookup.'
			},
			{
				type: 'heading',
				text: 'Auditing before designing'
			},
			{
				type: 'paragraph',
				text: 'Before touching a single screen, we catalogued every metric across all three tools and found 60% overlap — the same numbers, computed three slightly different ways, which was quietly eroding trust in all of them.'
			},
			{
				type: 'paragraph',
				text: 'The unified dashboard shipped with one canonical definition per metric, owned by a single team, and a shared component library so future additions couldn’t drift back into three visual languages.'
			}
		],
		comments: []
	},
	{
		slug: 'the-research-sprint-that-killed-a-feature',
		title: 'The Research Sprint That Killed a Feature Before It Shipped',
		clientName: 'Sheba.xyz',
		category: 'Research & Discovery',
		industries: ['Home Services'],
		author: authors.imran,
		viewCount: 2640,
		likeCount: 201,
		readTimeMinutes: 5,
		publishedAt: daysAgo(18),
		problem: undefined,
		tools: ['Notion', 'Google Meet'],
		externalLink: 'https://sheba.xyz',
		associatedProducts: [],
		associatedContests: [
			{
				slug: 'case-study-slam-vol-3',
				title: 'Case Study Slam Vol. 3',
				dateLabel: 'Mar 2026'
			}
		],
		content: [
			{
				type: 'paragraph',
				text: 'A subscription tier for recurring home services had already been scoped, estimated, and half-designed by the time we ran the first customer interview. Five interviews in, we recommended killing it.'
			},
			{
				type: 'heading',
				text: 'Recurring intent isn’t recurring willingness to commit'
			},
			{
				type: 'paragraph',
				text: 'Customers genuinely rebooked the same services on a predictable cadence — the usage data was real. But every single interview surfaced the same objection to a subscription: they wanted the flexibility to skip a month without feeling like they were cancelling something.'
			},
			{
				type: 'quote',
				text: 'The data said "recurring." The interviews said "recurring, but don’t make me promise."'
			},
			{
				type: 'paragraph',
				text: 'We shipped a lightweight "rebook in 30 days" reminder instead of a subscription tier — a fraction of the engineering cost, and it captured the same repeat-booking lift the subscription model was projected to deliver, without the commitment friction that would have suppressed it.'
			}
		],
		comments: [
			{
				authorName: 'Farzana Rahman',
				authorIsMentor: true,
				body: 'This is a great example of research changing scope, not just polish. More of these, please.',
				postedAt: daysAgo(17),
				replies: []
			}
		]
	},
	{
		slug: 'rebuilding-search-for-a-classifieds-marketplace',
		title: 'Rebuilding Search for a 20-Million-Listing Marketplace',
		clientName: 'Bikroy',
		category: 'Platform Scaling',
		industries: ['Marketplace'],
		author: authors.nusrat,
		viewCount: 2280,
		likeCount: 118,
		readTimeMinutes: 9,
		publishedAt: daysAgo(21),
		problem:
			'Search relevance had been tuned incrementally for years and had drifted into a state where exact-match listings routinely ranked below loosely related ones.',
		tools: ['Elasticsearch', 'Amplitude'],
		externalLink: undefined,
		associatedProducts: [],
		associatedContests: [],
		content: [
			{
				type: 'paragraph',
				text: 'Search relevance on a 20-million-listing marketplace had been tuned incrementally, by different people, for years — the kind of system where nobody fully understands why any given ranking weight exists anymore.'
			},
			{
				type: 'heading',
				text: 'Starting from what "relevant" means to a buyer'
			},
			{
				type: 'paragraph',
				text: 'Rather than re-tune the existing black box, we rebuilt ranking around three explicit signals — exact-match strength, seller responsiveness, and listing freshness — and made each one visible in an internal debug view so future tuning wouldn’t repeat the same drift.'
			},
			{
				type: 'paragraph',
				text: 'Click-through on the first three results improved by double digits, and — the metric that mattered most to the business — time-to-first-message from buyers dropped, meaning people were finding what they wanted faster, not just clicking more.'
			}
		],
		comments: []
	},
	{
		slug: 'retention-loop-for-a-grocery-app',
		title: 'Building the Retention Loop That Doubled Week-4 Users',
		clientName: 'Daraz',
		category: 'Growth & Retention',
		industries: ['E-commerce'],
		author: authors.rifat,
		viewCount: 3960,
		likeCount: 229,
		readTimeMinutes: 6,
		publishedAt: daysAgo(24),
		problem:
			'First-order conversion was strong, but most new customers never placed a second order within the first month.',
		tools: ['Amplitude', 'Braze'],
		externalLink: undefined,
		associatedProducts: [],
		associatedContests: [],
		content: [
			{
				type: 'paragraph',
				text: 'Getting a first order was never the hard part — the app converted well. The drop happened right after: most new customers never placed a second order inside their first month.'
			},
			{
				type: 'heading',
				text: 'The second order is a different job than the first'
			},
			{
				type: 'paragraph',
				text: 'The first order is driven by a promotion or a specific need. The second one only happens if the experience itself earned enough trust to become a habit — and nothing in the post-purchase flow was doing that job.'
			},
			{
				type: 'paragraph',
				text: 'We built a reorder-in-one-tap flow surfaced exactly seven days after the first delivery, timed to typical grocery restock cycles, plus a delivery-quality follow-up that closed the trust gap before asking for the next order.'
			},
			{
				type: 'heading',
				text: 'Week-4 retention, not just a second order'
			},
			{
				type: 'paragraph',
				text: 'Week-4 active users roughly doubled across the next two cohorts, which mattered more than the second-order rate alone — it meant the habit was forming, not just a one-time nudge working once.'
			}
		],
		comments: [
			{
				authorName: 'Imran Hossain',
				body: 'The seven-day timing detail is underrated — most reorder nudges I’ve seen just fire on a generic 3-day timer regardless of category.',
				postedAt: daysAgo(23),
				replies: []
			}
		]
	},
	{
		slug: 'onboarding-freight-operators-offline-first',
		title: 'Onboarding Freight Operators With an Offline-First Flow',
		clientName: 'Truck Lagbe',
		category: 'Onboarding & Activation',
		industries: ['Logistics'],
		author: authors.farzana,
		viewCount: 1420,
		likeCount: 74,
		readTimeMinutes: 5,
		publishedAt: daysAgo(27),
		problem:
			'Driver onboarding assumed a stable data connection, but a large share of signups came from highway routes with patchy 3G at best.',
		tools: ['Figma', 'Firebase'],
		externalLink: 'https://trucklagbe.com',
		associatedProducts: [],
		associatedContests: [],
		content: [
			{
				type: 'paragraph',
				text: 'Freight operator onboarding assumed a stable connection throughout — document upload, verification, everything synchronous. A large share of signups were actually happening from highway routes with patchy 3G at best, and the flow simply broke there.'
			},
			{
				type: 'heading',
				text: 'Designing for the network you actually have'
			},
			{
				type: 'paragraph',
				text: 'We rebuilt onboarding as a queue: every step saved locally first and synced opportunistically, with clear "waiting to upload" states instead of spinners that implied something was actively failing.'
			},
			{
				type: 'paragraph',
				text: 'Onboarding completion from highway-route signups closed most of the gap with urban signups within the first month — the flow stopped punishing people for the connection they had.'
			}
		],
		comments: []
	}
];

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
	return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
