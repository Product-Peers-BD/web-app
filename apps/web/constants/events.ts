import {
	EventFormat,
	EventType,
	SpeakerRole,
	SponsorTierName
} from '@/enums/event';
import type { EventDetail } from '@/types/event';

function hoursFromNow(hours: number): string {
	return new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
}

export const events: EventDetail[] = [
	{
		slug: 'ai-product-strategy-panel',
		title: 'AI in Product Strategy: A Panel Discussion',
		eventType: EventType.PANEL_DISCUSSION,
		categories: ['Product Manager', 'Founder'],
		tags: ['AI', 'Leadership'],
		format: EventFormat.HYBRID,
		startAt: hoursFromNow(-2),
		endAt: hoursFromNow(2),
		hasRegistration: true,
		isPremium: false,
		capacity: 120,
		seatsTaken: 96,
		description: [
			"Every product team is being asked the same question right now: where does AI actually belong in the roadmap, and where is it just noise? This panel brings together four operators who've shipped AI features at very different scales — a 12-person startup, a 200-person scale-up, and two enterprise product orgs.",
			'Expect a working-level conversation, not a keynote: what got cut from the roadmap, what the eval process actually looks like, and how each team is measuring whether an AI feature is worth the maintenance cost six months later.'
		],
		speakers: [
			{
				slug: 'nusrat-jahan',
				name: 'Nusrat Jahan',
				role: SpeakerRole.HOST,
				title: 'Head of Product, Chaldal',
				sessionTopic: 'Moderator'
			},
			{
				slug: 'rafiul-islam',
				name: 'Rafiul Islam',
				role: SpeakerRole.PANELIST,
				title: 'VP Product, Pathao',
				sessionTopic: 'AI in logistics matching'
			},
			{
				slug: 'tania-ahmed',
				name: 'Tania Ahmed',
				role: SpeakerRole.PANELIST,
				title: 'Senior PM, bKash',
				sessionTopic: 'Fraud detection UX tradeoffs'
			},
			{
				slug: 'imran-kabir',
				name: 'Imran Kabir',
				role: SpeakerRole.MENTOR,
				title: 'Founder, ShipFast Labs',
				sessionTopic: 'Shipping AI features on a 3-person team'
			}
		],
		venueAddress: 'BASIS Auditorium, Agargaon, Dhaka',
		venueMapUrl: 'https://maps.google.com/?q=BASIS+Auditorium+Dhaka',
		activities: [
			{
				title: 'Doors open + networking',
				startTime: '18:00',
				endTime: '18:20'
			},
			{
				title: 'Panel discussion',
				description: 'Moderated conversation across all four speakers',
				startTime: '18:20',
				endTime: '19:20'
			},
			{
				title: 'Audience Q&A',
				startTime: '19:20',
				endTime: '19:45'
			},
			{
				title: 'Open networking',
				startTime: '19:45',
				endTime: '20:00'
			}
		],
		videoUrls: [],
		galleryCount: 0,
		faqs: [
			{
				question:
					'Is the hybrid link shared before or after registering?',
				answer: 'The online link is emailed 24 hours before the session to everyone registered, whether you selected in-person or online.'
			},
			{
				question:
					'Can I switch from online to in-person after registering?',
				answer: 'Yes — message the organizers on WhatsApp using the number on your confirmation and we’ll update your seat.'
			}
		],
		sponsorTiers: [
			{
				tier: SponsorTierName.TITLE,
				sponsors: [{ name: 'bKash' }]
			},
			{
				tier: SponsorTierName.GOLD,
				sponsors: [{ name: 'Pathao' }, { name: 'Chaldal' }]
			}
		],
		discussions: [
			{
				authorName: 'PPBD Team',
				isAnnouncement: true,
				isPinned: true,
				body: 'Slides and the eval framework mentioned by Tania will be posted here right after the panel wraps. Drop your questions below and we’ll relay the top ones to the panel live.',
				postedAt: '2026-08-10T09:00:00Z',
				comments: [
					{
						authorName: 'Farhan Hossain',
						body: 'Would love to hear how Pathao handles false positives in the matching model — that’s our exact problem right now.',
						postedAt: '2026-08-10T10:15:00Z',
						replies: [
							{
								authorName: 'Rafiul Islam',
								authorIsMentor: true,
								body: 'Great question, added it to the moderator queue — we’ll get to it in the Q&A block.',
								postedAt: '2026-08-10T11:02:00Z'
							}
						]
					}
				]
			}
		],
		registrationQuestions: [
			'What team are you shipping AI features on?',
			'Attending in-person or online?'
		]
	},
	{
		slug: 'mentor-session-portfolio-teardown',
		title: 'Mentor Session: Portfolio Teardown for Aspiring PMs',
		eventType: EventType.MENTOR_SESSION,
		categories: ['Product Manager'],
		tags: ['Career Growth'],
		format: EventFormat.ONLINE,
		startAt: '2026-08-14T13:00:00Z',
		endAt: '2026-08-14T14:30:00Z',
		hasRegistration: true,
		isPremium: false,
		capacity: 40,
		seatsTaken: 22,
		description: [
			"Bring your case study deck or portfolio site — live, on screen. Farzana will walk through three volunteer portfolios end-to-end: what a hiring panel notices in the first 90 seconds, where most PM portfolios lose the plot, and how to reframe a project you didn't fully own into a strong story.",
			'Not presenting your own portfolio this round? Come anyway — the teardown format works well as a group session.'
		],
		speakers: [
			{
				slug: 'farzana-rahman',
				name: 'Farzana Rahman',
				role: SpeakerRole.MENTOR,
				title: 'Group Product Manager, Grameenphone',
				sessionTopic: 'Live portfolio teardown'
			}
		],
		activities: [],
		videoUrls: [],
		galleryCount: 0,
		faqs: [
			{
				question: 'Do I need to submit my portfolio in advance?',
				answer: 'Volunteering to be torn down live is first-come, first-served in the session chat — no advance submission needed.'
			},
			{
				question: 'Is this recorded?',
				answer: 'No — to keep the feedback candid, this session is not recorded or shared afterward.'
			}
		],
		sponsorTiers: [],
		discussions: [
			{
				authorName: 'Shuvo Ahmed',
				body: 'Is this suitable for someone still job-hunting with zero formal PM title yet, just side projects?',
				postedAt: '2026-08-12T08:20:00Z',
				comments: [
					{
						authorName: 'Farzana Rahman',
						authorIsMentor: true,
						body: 'Yes — side-project portfolios are actually the most common case we cover in these sessions.',
						postedAt: '2026-08-12T09:00:00Z',
						replies: []
					}
				]
			}
		],
		registrationQuestions: [
			'Link to the portfolio you might want torn down (optional)'
		]
	},
	{
		slug: 'growth-marketing-community-adda',
		title: 'Growth Marketing Community Adda',
		eventType: EventType.COMMUNITY_ADDA,
		categories: ['Growth Marketer'],
		tags: ['B2B SaaS', 'Remote Work'],
		format: EventFormat.PHYSICAL,
		startAt: '2026-08-20T11:00:00Z',
		endAt: '2026-08-20T14:00:00Z',
		hasRegistration: true,
		isPremium: false,
		capacity: 60,
		seatsTaken: 60,
		description: [
			'An unstructured, low-agenda afternoon for anyone doing growth/marketing at a Bangladeshi B2B SaaS company. No talks, no slides — just table conversations seeded by a few discussion prompts, and enough chairs for anyone to pull one up.',
			'Seats are genuinely limited to keep the room conversational rather than lecture-sized — this one usually fills fast.'
		],
		speakers: [
			{
				slug: 'nabila-hoque',
				name: 'Nabila Hoque',
				role: SpeakerRole.HOST,
				title: 'Growth Lead, Shopup'
			},
			{
				slug: 'kazi-rahman',
				name: 'Kazi Rahman',
				role: SpeakerRole.HOST,
				title: 'Marketing Lead, 10 Minute School'
			}
		],
		venueAddress: 'WeWork, Gulshan 2, Dhaka',
		venueMapUrl: 'https://maps.google.com/?q=WeWork+Gulshan+2+Dhaka',
		activities: [
			{
				title: 'Arrival + table assignment',
				startTime: '17:00',
				endTime: '17:15'
			},
			{
				title: 'Round 1: What’s actually working in acquisition right now',
				startTime: '17:15',
				endTime: '17:50'
			},
			{
				title: 'Round 2: Retention & lifecycle prompts',
				startTime: '17:50',
				endTime: '18:25'
			},
			{
				title: 'Open floor + wrap-up',
				startTime: '18:25',
				endTime: '19:00'
			}
		],
		videoUrls: [],
		galleryCount: 0,
		faqs: [
			{
				question: 'It shows sold out — can I join a waitlist?',
				answer: 'Not for this session — message us on WhatsApp and we’ll flag you first for the next Growth Adda.'
			}
		],
		sponsorTiers: [
			{
				tier: SponsorTierName.COMMUNITY,
				sponsors: [{ name: 'Shopup' }]
			}
		],
		discussions: [],
		registrationQuestions: []
	},
	{
		slug: 'fintech-founders-meetup',
		title: 'Fintech Founders Meetup',
		eventType: EventType.MEETUP,
		categories: ['Founder', 'Product Manager'],
		tags: ['Fintech'],
		format: EventFormat.PHYSICAL,
		startAt: '2026-09-05T09:00:00Z',
		endAt: '2026-09-05T12:00:00Z',
		hasRegistration: true,
		registrationOpensAt: '2026-08-25T00:00:00Z',
		isPremium: true,
		priceBdt: 1500,
		capacity: 80,
		seatsTaken: 0,
		description: [
			'A working session for founders and early product hires building in payments, lending, and insurance in Bangladesh — regulatory workarounds, bKash/Nagad integration war stories, and what actually moves NBR/Bangladesh Bank approvals along faster.',
			'Ticket includes lunch and a printed regulatory-checklist handout put together with input from three fintech legal teams.'
		],
		speakers: [
			{
				slug: 'ariful-islam',
				name: 'Ariful Islam',
				role: SpeakerRole.SPEAKER,
				title: 'Co-founder, PaySome',
				sessionTopic: 'Getting a PSO license in under a year'
			},
			{
				slug: 'lamia-chowdhury',
				name: 'Lamia Chowdhury',
				role: SpeakerRole.SPEAKER,
				title: 'Head of Compliance, Nagad',
				sessionTopic: 'What regulators actually check first'
			}
		],
		venueAddress: 'Pan Pacific Sonargaon, Karwan Bazar, Dhaka',
		venueMapUrl: 'https://maps.google.com/?q=Pan+Pacific+Sonargaon+Dhaka',
		activities: [
			{
				title: 'Registration + breakfast',
				startTime: '09:00',
				endTime: '09:30'
			},
			{
				title: 'Talk: Getting a PSO license in under a year',
				startTime: '09:30',
				endTime: '10:15'
			},
			{
				title: 'Talk: What regulators actually check first',
				startTime: '10:15',
				endTime: '11:00'
			},
			{
				title: 'Founder roundtables + lunch',
				startTime: '11:00',
				endTime: '12:00'
			}
		],
		videoUrls: [],
		galleryCount: 0,
		faqs: [
			{
				question: 'What does the BDT 1,500 ticket cover?',
				answer: 'Venue, lunch, the printed regulatory handout, and access to the founder roundtable block.'
			},
			{
				question: 'Is there a refund if I can no longer attend?',
				answer: 'Refunds aren’t self-service — contact Admin via WhatsApp or the Contact Us form and it’ll be handled manually.'
			}
		],
		sponsorTiers: [
			{ tier: SponsorTierName.TITLE, sponsors: [{ name: 'Nagad' }] },
			{ tier: SponsorTierName.SILVER, sponsors: [{ name: 'PaySome' }] }
		],
		discussions: [],
		registrationQuestions: [
			'Company name',
			'Are you a founder or an early employee?'
		]
	},
	{
		slug: 'ux-research-panel-remote-teams',
		title: 'UX Research for Remote Teams',
		eventType: EventType.PANEL_DISCUSSION,
		categories: ['UX Designer'],
		tags: ['Remote Work'],
		format: EventFormat.ONLINE,
		startAt: '2026-08-16T12:00:00Z',
		endAt: '2026-08-16T13:15:00Z',
		hasRegistration: true,
		registrationClosedByAdmin: true,
		isPremium: false,
		description: [
			'A focused conversation on running moderated usability research when your team, and your users, are scattered across time zones — recruiting panels remotely, running unmoderated tests that still surface real signal, and getting stakeholders to actually watch the recordings.'
		],
		speakers: [
			{
				slug: 'sabrina-yasmin',
				name: 'Sabrina Yasmin',
				role: SpeakerRole.PANELIST,
				title: 'Lead UX Researcher, Wolt'
			},
			{
				slug: 'joynal-abedin',
				name: 'Joynal Abedin',
				role: SpeakerRole.PANELIST,
				title: 'Design Lead, Sheba.xyz'
			}
		],
		activities: [],
		videoUrls: [],
		galleryCount: 0,
		faqs: [],
		sponsorTiers: [],
		discussions: [],
		registrationQuestions: []
	},
	{
		slug: 'product-analytics-deep-dive',
		title: 'Product Analytics Deep Dive',
		eventType: EventType.PANEL_DISCUSSION,
		categories: ['Data Analyst', 'Product Manager'],
		tags: ['Analytics'],
		format: EventFormat.ONLINE,
		startAt: '2026-08-30T13:00:00Z',
		endAt: '2026-08-30T14:30:00Z',
		hasRegistration: false,
		isPremium: false,
		description: [
			"An informational session on how three product teams instrument events, define North Star metrics, and avoid dashboard sprawl. No registration needed — this one streams publicly and the recording will be added to the page's Videos section afterward."
		],
		speakers: [
			{
				slug: 'orin-mahmud',
				name: 'Orin Mahmud',
				role: SpeakerRole.SPEAKER,
				title: 'Analytics Lead, ShopUp'
			}
		],
		activities: [],
		videoUrls: [],
		galleryCount: 0,
		faqs: [
			{
				question: 'Where do I watch this?',
				answer: 'A public stream link will be posted here 30 minutes before the session starts.'
			}
		],
		sponsorTiers: [],
		discussions: [],
		registrationQuestions: []
	},
	{
		slug: 'career-transition-community-adda-recap',
		title: 'Career Transition Stories: Community Adda',
		eventType: EventType.COMMUNITY_ADDA,
		categories: ['Product Manager'],
		tags: ['Career Growth'],
		format: EventFormat.PHYSICAL,
		startAt: '2026-07-10T11:00:00Z',
		endAt: '2026-07-10T14:00:00Z',
		hasRegistration: true,
		isPremium: false,
		capacity: 50,
		seatsTaken: 50,
		description: [
			'Five community members shared how they moved into product roles from engineering, customer support, journalism, and teaching — an afternoon of table conversations rather than a stage format.'
		],
		speakers: [
			{
				slug: 'mahin-sarker',
				name: 'Mahin Sarker',
				role: SpeakerRole.HOST,
				title: 'Community Lead, PPBD'
			}
		],
		venueAddress: 'Startup Bangladesh Hub, Karwan Bazar, Dhaka',
		venueMapUrl: 'https://maps.google.com/?q=Startup+Bangladesh+Hub',
		activities: [
			{ title: 'Story circle', startTime: '17:00', endTime: '18:00' },
			{
				title: 'Open table conversations',
				startTime: '18:00',
				endTime: '19:00'
			}
		],
		videoUrls: [
			'https://www.youtube.com/watch?v=ppbd-career-transition-recap'
		],
		galleryCount: 8,
		faqs: [],
		sponsorTiers: [
			{
				tier: SponsorTierName.COMMUNITY,
				sponsors: [{ name: 'Startup Bangladesh' }]
			}
		],
		pastRecap:
			'Around 50 members packed the Startup Bangladesh Hub for an afternoon that ran long in the best way — the story circle alone went 20 minutes over because nobody wanted to cut it short. Five speakers, five completely different paths into product: from a support queue to a PM seat, from a newsroom to a research role. The recording of the story circle and the full photo set are below.',
		discussions: [
			{
				authorName: 'PPBD Team',
				isAnnouncement: true,
				isPinned: true,
				body: 'Thanks to everyone who came out — the recap and gallery are up. Drop a comment if you want an intro to any of the five speakers.',
				postedAt: '2026-07-11T09:00:00Z',
				comments: [
					{
						authorName: 'Ruhul Amin',
						body: 'That was genuinely the best PPBD event I’ve been to. Would love a part two focused on the design-to-PM transition specifically.',
						postedAt: '2026-07-11T10:30:00Z',
						replies: [
							{
								authorName: 'Mahin Sarker',
								authorIsMentor: true,
								body: 'Noted — already scouting speakers for a design-to-PM edition.',
								postedAt: '2026-07-11T12:00:00Z'
							}
						]
					}
				]
			}
		],
		registrationQuestions: []
	},
	{
		slug: 'b2b-saas-pricing-mentor-session',
		title: 'B2B SaaS Pricing Clinic',
		eventType: EventType.MENTOR_SESSION,
		categories: ['Product Manager', 'Founder'],
		tags: ['B2B SaaS'],
		format: EventFormat.ONLINE,
		startAt: '2026-06-20T13:00:00Z',
		endAt: '2026-06-20T14:30:00Z',
		hasRegistration: true,
		isPremium: true,
		priceBdt: 2000,
		capacity: 30,
		seatsTaken: 30,
		description: [
			'A working clinic on packaging and pricing B2B SaaS for the Bangladeshi and broader South Asian market — tiering, usage-based add-ons, and how to run a price increase without losing your existing base.'
		],
		speakers: [
			{
				slug: 'zubair-hasan',
				name: 'Zubair Hasan',
				role: SpeakerRole.MENTOR,
				title: 'Founder, LedgerBD',
				sessionTopic: 'Pricing teardown of 3 live SaaS products'
			}
		],
		activities: [],
		videoUrls: [],
		galleryCount: 0,
		faqs: [],
		sponsorTiers: [],
		discussions: [],
		registrationQuestions: ['What are you currently charging, if anything?']
	},
	{
		slug: 'design-systems-meetup',
		title: 'Design Systems Meetup Dhaka',
		eventType: EventType.MEETUP,
		categories: ['UX Designer'],
		tags: ['Leadership'],
		format: EventFormat.HYBRID,
		startAt: '2026-08-22T10:00:00Z',
		endAt: '2026-08-22T13:00:00Z',
		hasRegistration: true,
		isPremium: false,
		description: [
			'Three lightning talks on running a design system with a small team: token architecture, getting engineering buy-in, and the governance model that actually gets used instead of ignored.'
		],
		speakers: [
			{
				slug: 'meherun-nesa',
				name: 'Meherun Nesa',
				role: SpeakerRole.SPEAKER,
				title: 'Design Systems Lead, bKash',
				sessionTopic: 'Token architecture that survives a rebrand'
			},
			{
				slug: 'proshanto-biswas',
				name: 'Proshanto Biswas',
				role: SpeakerRole.SPEAKER,
				title: 'Staff Designer, Pathao',
				sessionTopic: 'Getting engineering buy-in'
			}
		],
		venueAddress: 'Toffee Digital Office, Banani, Dhaka',
		venueMapUrl: 'https://maps.google.com/?q=Toffee+Digital+Banani',
		activities: [
			{ title: 'Lightning talks', startTime: '16:00', endTime: '17:00' },
			{
				title: 'Component crit + networking',
				startTime: '17:00',
				endTime: '19:00'
			}
		],
		videoUrls: [],
		galleryCount: 0,
		faqs: [
			{
				question: 'Is the online stream interactive?',
				answer: 'Remote attendees can post questions in the stream chat, relayed live to the room by a host.'
			}
		],
		sponsorTiers: [
			{
				tier: SponsorTierName.GOLD,
				sponsors: [{ name: 'Toffee Digital' }]
			}
		],
		discussions: [
			{
				authorName: 'PPBD Team',
				isAnnouncement: true,
				isPinned: true,
				body: 'Remote link goes out the morning of the event to everyone registered, in-person or online.',
				postedAt: '2026-08-13T09:00:00Z',
				comments: []
			}
		],
		registrationQuestions: []
	}
];

export function getEventBySlug(slug: string): EventDetail | undefined {
	return events.find((event) => event.slug === slug);
}
