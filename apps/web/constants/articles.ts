import type { ArticleAuthor, ArticleDetail } from '@/types/article';

const authors = {
	nusrat: {
		slug: 'nusrat-jahan',
		name: 'Nusrat Jahan',
		title: 'Head of Product, Chaldal',
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
	rifat: {
		slug: 'rifat-hasan',
		name: 'Rifat Hasan',
		title: 'Senior Business Analyst, City Bank',
		isMentor: false
	},
	farzana: {
		slug: 'farzana-rahman',
		name: 'Farzana Rahman',
		title: 'Lead Product Designer',
		isMentor: true
	},
	sadia: {
		slug: 'sadia-afrin',
		name: 'Sadia Afrin',
		title: 'Business Analyst, City Bank',
		isMentor: false
	}
} satisfies Record<string, ArticleAuthor>;

function daysAgo(days: number): string {
	return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export const articles: ArticleDetail[] = [
	{
		slug: 'writing-prds-people-actually-read',
		title: 'Writing PRDs People Actually Read',
		excerpt:
			'Most PRDs die in a Google Doc nobody scrolls past page one of. Here’s the structure that gets engineers and designers to actually read yours.',
		category: 'Product Management',
		author: authors.tanvir,
		isCurated: true,
		readTimeMinutes: 6,
		viewCount: 5420,
		likeCount: 312,
		publishedAt: daysAgo(2),
		content: [
			{
				type: 'paragraph',
				text: 'Every PM has written a PRD that took three days and got read by exactly nobody. Not because the thinking was bad — because the document asked the reader to do the thinking for you.'
			},
			{
				type: 'heading',
				text: 'Lead with the decision, not the context'
			},
			{
				type: 'paragraph',
				text: 'Engineers and designers open a PRD to answer one question: what am I building and why does it matter? If that answer is buried under three paragraphs of market context, you’ve already lost the room. Put the decision in the first two sentences. Everything else is supporting evidence.'
			},
			{
				type: 'quote',
				text: 'A PRD is not a record of your thinking. It’s a tool for someone else’s thinking.',
				attribution: 'Tanvir Ahmed'
			},
			{
				type: 'paragraph',
				text: 'At my last two companies, we moved to a one-page format with a strict rule: if it doesn’t change what gets built, it doesn’t belong in the doc. Appendices exist for a reason — use them.'
			},
			{
				type: 'heading',
				text: 'Write the FAQ before anyone asks'
			},
			{
				type: 'paragraph',
				text: 'The fastest way to kill a 40-comment review thread is to answer the five questions you already know are coming, right in the doc. It feels like more work upfront. It’s always less work overall.'
			}
		],
		comments: [
			{
				authorName: 'Sadia Afrin',
				body: 'The "FAQ before anyone asks" bit is exactly what our reviews are missing. Stealing this for next sprint.',
				postedAt: daysAgo(1),
				replies: [
					{
						authorName: 'Tanvir Ahmed',
						authorIsMentor: false,
						body: 'Steal away — happy to share the actual template if useful.',
						postedAt: daysAgo(1)
					}
				]
			},
			{
				authorName: 'Imran Kabir',
				authorIsMentor: true,
				body: 'Strong agree on decision-first. I’ve started rejecting PRDs in review if I can’t find the ask in the first screen.',
				postedAt: daysAgo(1),
				replies: []
			},
			{
				authorName: 'Farzana Rahman',
				authorIsMentor: true,
				body: 'Would love a follow-up on how design specs fit into this — we still end up duplicating a lot of the "why".',
				postedAt: daysAgo(0),
				replies: []
			}
		]
	},
	{
		slug: 'a-pricing-playbook-for-bangladeshi-saas',
		title: 'A Pricing Playbook for Bangladeshi SaaS',
		excerpt:
			'Global pricing frameworks assume dollar-denominated willingness to pay. Here’s how to adapt them for a BDT market without underpricing yourself.',
		category: 'Growth',
		author: authors.nusrat,
		isCurated: true,
		readTimeMinutes: 9,
		viewCount: 4180,
		likeCount: 267,
		publishedAt: daysAgo(4),
		content: [
			{
				type: 'paragraph',
				text: 'Copy-pasting a US SaaS pricing page into BDT and dividing by 110 is the single most common pricing mistake I see local founders make. It anchors your product as cheap before a single customer has evaluated the value.'
			},
			{
				type: 'heading',
				text: 'Start from willingness to pay, not cost-plus'
			},
			{
				type: 'paragraph',
				text: 'Run five customer conversations before you set a number. Ask what they currently spend solving this problem — manually, with a competitor, or with a spreadsheet someone maintains part-time. That number is your anchor, not your server bill.'
			},
			{
				type: 'paragraph',
				text: 'For B2B tools selling into mid-size Bangladeshi companies, we consistently found willingness to pay 3-4x higher than what founders initially guessed — mostly because founders were pricing against other startups, not against the actual cost of the status quo.'
			},
			{
				type: 'heading',
				text: 'Tiering that survives a bKash checkout flow'
			},
			{
				type: 'paragraph',
				text: 'Three tiers, not five. Every additional tier is a decision tax at checkout, and local payment flows already add friction. Simplicity converts better than completeness here.'
			}
		],
		comments: [
			{
				authorName: 'Rifat Hasan',
				body: 'The "3-4x higher than founders guess" stat matches what we saw at City Bank fintech partnerships too.',
				postedAt: daysAgo(3),
				replies: []
			},
			{
				authorName: 'Tania Ahmed',
				body: 'How do you handle currency risk for annual contracts given BDT volatility?',
				postedAt: daysAgo(2),
				replies: [
					{
						authorName: 'Nusrat Jahan',
						authorIsMentor: true,
						body: 'We repriced annually and grandfathered existing customers for 90 days after any change — kept churn low.',
						postedAt: daysAgo(2)
					}
				]
			}
		]
	},
	{
		slug: 'the-analyst-to-pm-transition',
		title: 'The Analyst-to-PM Transition, Honestly',
		excerpt:
			'It took me two failed internal transfers before I understood what "PM potential" actually meant to the people deciding. Here’s what I’d tell myself three years ago.',
		category: 'Careers',
		author: authors.rifat,
		isCurated: true,
		readTimeMinutes: 5,
		viewCount: 3902,
		likeCount: 401,
		publishedAt: daysAgo(6),
		content: [
			{
				type: 'paragraph',
				text: 'I was the best analyst on my team for two straight quarters and still got passed over for an internal PM role. It took a blunt conversation with my manager to understand why.'
			},
			{
				type: 'heading',
				text: 'Analysis is not the job. Deciding under uncertainty is.'
			},
			{
				type: 'paragraph',
				text: 'As an analyst, my job was to be right. As a PM, the job is to make a call when the data is incomplete and own what happens next. Those are different muscles, and nobody tells you that the switch is what’s actually being evaluated.'
			},
			{
				type: 'quote',
				text: 'Nobody promotes the person with the best dashboard. They promote the person willing to be wrong in front of the room.'
			},
			{
				type: 'paragraph',
				text: 'The thing that actually moved the needle for me: I started closing every analysis with a recommendation and a next step, even when nobody asked for one. Six months of that, unprompted, and the conversation about transferring got a lot shorter.'
			}
		],
		comments: [
			{
				authorName: 'Sadia Afrin',
				body: 'This is basically my situation right now. Bookmarking to reread before my next 1:1.',
				postedAt: daysAgo(5),
				replies: []
			},
			{
				authorName: 'Tanvir Ahmed',
				body: 'The "recommendation + next step" habit is underrated advice for basically every function, not just analysts.',
				postedAt: daysAgo(4),
				replies: [
					{
						authorName: 'Rifat Hasan',
						body: 'Agreed — it changed how people read my Slack messages before it changed my title.',
						postedAt: daysAgo(4)
					}
				]
			},
			{
				authorName: 'Imran Kabir',
				authorIsMentor: true,
				body: 'Hiring manager perspective: this is exactly the signal I look for in internal transfer candidates.',
				postedAt: daysAgo(3),
				replies: []
			}
		]
	},
	{
		slug: 'designing-empty-states-that-teach',
		title: 'Designing Empty States That Teach, Not Apologize',
		excerpt:
			'"No data yet" is a wasted screen. A good empty state tells the user exactly what to do next — in the product’s voice, not a shrug.',
		category: 'Design',
		author: authors.farzana,
		isCurated: true,
		readTimeMinutes: 4,
		viewCount: 2140,
		likeCount: 189,
		publishedAt: daysAgo(8),
		content: [
			{
				type: 'paragraph',
				text: 'Most empty states are apologies. "Nothing here yet." "No results found." They describe the absence of something instead of pointing at the action that fills it.'
			},
			{
				type: 'heading',
				text: 'Three questions every empty state should answer'
			},
			{
				type: 'paragraph',
				text: 'What is this space for, why is it empty right now, and what’s the one action that changes that. If your copy answers all three in under fifteen words, you’re close.'
			},
			{
				type: 'image',
				caption:
					'Before/after: a dashboard’s empty state rewritten as a call to action'
			},
			{
				type: 'paragraph',
				text: 'We rewrote every empty state across our dashboard using this frame and saw first-action completion jump noticeably in the following sprint — not because the product changed, but because the screen finally told people what to do.'
			}
		],
		comments: [
			{
				authorName: 'Nusrat Jahan',
				authorIsMentor: true,
				body: 'The "three questions" frame is going straight into our design review checklist.',
				postedAt: daysAgo(7),
				replies: []
			}
		]
	},
	{
		slug: 'cohort-retention-metrics-that-actually-matter',
		title: 'Cohort Retention Metrics That Actually Matter',
		excerpt:
			'Week-1 retention is a vanity number for most B2C apps in Bangladesh. Here’s the cohort cut that actually predicts revenue.',
		category: 'Data & Analytics',
		author: authors.sadia,
		isCurated: false,
		readTimeMinutes: 8,
		viewCount: 1620,
		likeCount: 94,
		publishedAt: daysAgo(10),
		content: [
			{
				type: 'paragraph',
				text: 'Week-1 retention charts look great in a board deck and predict almost nothing about whether a user will still be around in month three. For most consumer apps I’ve worked on locally, the real signal shows up at day 21.'
			},
			{
				type: 'heading',
				text: 'The habit-formation window'
			},
			{
				type: 'paragraph',
				text: 'Users who complete a second core action within three weeks of signup retain at roughly triple the rate of those who don’t — regardless of how active they were in week one. Optimize for the second action, not the first session.'
			},
			{
				type: 'paragraph',
				text: 'This reframes a lot of onboarding work: the goal isn’t a great first session, it’s engineering a reason to come back a second and third time inside that three-week window.'
			}
		],
		comments: []
	},
	{
		slug: 'running-discovery-with-a-two-person-team',
		title: 'Running Discovery With a Two-Person Team',
		excerpt:
			'No research ops, no dedicated UXR, no budget for panels. Here’s how we ran 40 customer interviews in six weeks anyway.',
		category: 'Product Management',
		author: authors.imran,
		isCurated: true,
		readTimeMinutes: 7,
		viewCount: 2870,
		likeCount: 203,
		publishedAt: daysAgo(13),
		content: [
			{
				type: 'paragraph',
				text: 'When it’s just you and one engineer, "discovery" tends to quietly disappear — there’s no headcount to protect it. We built a lightweight system that ran alongside shipping, not instead of it.'
			},
			{
				type: 'heading',
				text: 'The 20-minute rule'
			},
			{
				type: 'paragraph',
				text: 'Every customer call was capped at 20 minutes, scheduled back-to-back on Tuesday and Thursday mornings. Short calls are easier to book, easier to run consistently, and force you to ask the sharpest version of your question.'
			},
			{
				type: 'quote',
				text: 'Forty short, focused calls beat ten long, meandering ones — every time.'
			},
			{
				type: 'paragraph',
				text: 'The unlock wasn’t a tool or a process. It was treating discovery as a standing calendar block with the same protection as a sprint ceremony.'
			}
		],
		comments: [
			{
				authorName: 'Tania Ahmed',
				body: 'The 20-minute cap is such a simple lever. Trying this next week.',
				postedAt: daysAgo(12),
				replies: []
			},
			{
				authorName: 'Farzana Rahman',
				authorIsMentor: true,
				body: 'Curious how you kept notes consistent across two interviewers — that’s usually where this breaks down for us.',
				postedAt: daysAgo(11),
				replies: [
					{
						authorName: 'Imran Kabir',
						authorIsMentor: true,
						body: 'Shared a single Notion template, five fixed fields, filled in during the call not after. No exceptions.',
						postedAt: daysAgo(11)
					}
				]
			}
		]
	},
	{
		slug: 'the-case-for-boring-roadmaps',
		title: 'The Case for Boring Roadmaps',
		excerpt:
			'Ambitious roadmaps make for great all-hands slides and terrible quarters. A defense of the unglamorous, sequential kind.',
		category: 'Leadership',
		author: authors.nusrat,
		isCurated: false,
		readTimeMinutes: 6,
		viewCount: 1340,
		likeCount: 88,
		publishedAt: daysAgo(16),
		content: [
			{
				type: 'paragraph',
				text: 'Every ambitious roadmap I’ve seen fail had the same shape: five parallel bets, all "high priority," none sequenced against the other. It reads well in a slide and executes like chaos.'
			},
			{
				type: 'heading',
				text: 'Sequencing is the actual strategy work'
			},
			{
				type: 'paragraph',
				text: 'The interesting decision isn’t what’s on the roadmap — it’s what’s deliberately not happening this quarter so that the thing that matters most gets the whole team’s attention.'
			},
			{
				type: 'paragraph',
				text: 'Boring roadmaps say no more often than they say yes. That’s uncomfortable in a room full of stakeholders with their own priorities. It’s also the only version that consistently ships.'
			}
		],
		comments: [
			{
				authorName: 'Rifat Hasan',
				body: 'This should be required reading before every quarterly planning cycle.',
				postedAt: daysAgo(15),
				replies: []
			}
		]
	},
	{
		slug: 'onboarding-flows-for-low-bandwidth-users',
		title: 'Onboarding Flows for Low-Bandwidth Users',
		excerpt:
			'Half of our signups were dropping mid-onboarding on 3G. The fix wasn’t a lighter design system — it was rethinking what onboarding needed to load at all.',
		category: 'Design',
		author: authors.farzana,
		isCurated: false,
		readTimeMinutes: 5,
		viewCount: 980,
		likeCount: 61,
		publishedAt: daysAgo(19),
		content: [
			{
				type: 'paragraph',
				text: 'We assumed our onboarding drop-off was a UX problem. The session recordings told a different story: most drop-offs were just loading spinners on 3G connections outside Dhaka.'
			},
			{
				type: 'heading',
				text: 'Defer everything that isn’t step one'
			},
			{
				type: 'paragraph',
				text: 'We moved every non-essential asset — illustrations, fonts beyond the system default, anything above the fold that wasn’t a form field — out of the first screen’s critical path. Time-to-interactive dropped by more than half.'
			},
			{
				type: 'paragraph',
				text: 'The lesson generalizes: for a meaningful share of users outside major cities, "loading state design" is as important as the screens it’s hiding.'
			}
		],
		comments: []
	},
	{
		slug: 'what-good-standups-actually-sound-like',
		title: 'What Good Standups Actually Sound Like',
		excerpt:
			'A transcript-style breakdown of a standup that stayed useful for eight straight months — and the three habits that kept it that way.',
		category: 'Leadership',
		author: authors.tanvir,
		isCurated: false,
		readTimeMinutes: 4,
		viewCount: 760,
		likeCount: 42,
		publishedAt: daysAgo(22),
		content: [
			{
				type: 'paragraph',
				text: 'Most standups decay into status theater within a month. Ours didn’t, and I think it’s because we banned one specific sentence: "no blockers."'
			},
			{
				type: 'heading',
				text: 'If you say "no blockers," you have to name a risk instead'
			},
			{
				type: 'paragraph',
				text: 'Forcing the team to surface a risk — even a minor one — instead of defaulting to "no blockers" kept the meeting honest. Risks surfaced two days earlier on average than they would have otherwise.'
			}
		],
		comments: []
	},
	{
		slug: 'negotiating-your-first-pm-offer-in-dhaka',
		title: 'Negotiating Your First PM Offer in Dhaka',
		excerpt:
			'The local market has different norms than the negotiation scripts you’ll find online. What actually works when the recruiter says "this is our final offer."',
		category: 'Careers',
		author: authors.rifat,
		isCurated: false,
		readTimeMinutes: 7,
		viewCount: 3310,
		likeCount: 227,
		publishedAt: daysAgo(25),
		content: [
			{
				type: 'paragraph',
				text: '"This is our final offer" is negotiable roughly 70% of the time in my experience on both sides of the table locally — but the lever that works isn’t the one most guides recommend.'
			},
			{
				type: 'heading',
				text: 'Timeline flexibility beats a competing offer'
			},
			{
				type: 'paragraph',
				text: 'Most companies here have more room on start date and signing structure than on base number. Asking for a two-week delay to complete a competing process often gets further than a direct counter-number.'
			},
			{
				type: 'paragraph',
				text: 'It won’t work everywhere, and it isn’t a script — but understanding what the hiring manager can actually move is worth more than any word-for-word template.'
			}
		],
		comments: [
			{
				authorName: 'Sadia Afrin',
				body: 'The timeline flexibility point is something nobody told me during my own search. Wish I’d read this a year ago.',
				postedAt: daysAgo(24),
				replies: []
			},
			{
				authorName: 'Tania Ahmed',
				body: 'Does this hold for BA roles too or mostly PM-track hiring?',
				postedAt: daysAgo(23),
				replies: [
					{
						authorName: 'Rifat Hasan',
						body: 'Seen it work for BA and data roles as well — the lever is more about the hiring manager’s process constraints than the title.',
						postedAt: daysAgo(23)
					}
				]
			},
			{
				authorName: 'Imran Kabir',
				authorIsMentor: true,
				body: 'Hiring manager confirmation: this matches what I can actually move on my end most of the time.',
				postedAt: daysAgo(22),
				replies: []
			}
		]
	},
	{
		slug: 'reading-a-competitors-changelog-like-a-pm',
		title: 'Reading a Competitor’s Changelog Like a PM',
		excerpt:
			'A changelog is the most honest strategy document a competitor will ever publish. Most PMs skim it. Here’s how to actually read one.',
		category: 'Product Management',
		author: authors.tanvir,
		isCurated: false,
		readTimeMinutes: 5,
		viewCount: 540,
		likeCount: 33,
		publishedAt: daysAgo(28),
		content: [
			{
				type: 'paragraph',
				text: 'A changelog tells you what a competitor’s roadmap actually was, not what their marketing says it was. The gap between those two things is usually where the useful signal lives.'
			},
			{
				type: 'heading',
				text: 'Look for what shipped together'
			},
			{
				type: 'paragraph',
				text: 'Features that ship in the same release often share an underlying bet, even when the release notes don’t say so. Clustering changelog entries by release date, not by category, surfaces strategy faster than reading each line in isolation.'
			}
		],
		comments: []
	}
];

export function getArticleBySlug(slug: string): ArticleDetail | undefined {
	return articles.find((article) => article.slug === slug);
}
