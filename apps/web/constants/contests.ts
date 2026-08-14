import { WinnerTier } from '@/enums/contest';
import { EventFormat, SponsorTierName } from '@/enums/event';
import type { ContestDetail } from '@/types/contest';

export const contests: ContestDetail[] = [
	{
		slug: 'growth-hack-arena',
		title: 'Growth Hack Arena',
		format: EventFormat.ONLINE,
		startAt: '2026-08-03T09:00:00+06:00',
		endAt: '2026-08-24T20:00:00+06:00',
		registrationOpensAt: '2026-07-10T00:00:00+06:00',
		registrationClosedByAdmin: true,
		capacity: 30,
		seatsTaken: 30,
		isPremium: true,
		priceBdt: 500,
		resultTargetAt: '2026-09-05T18:00:00+06:00',
		description: [
			"Four weeks, one growth lever, no vanity metrics. Teams pick a real acquisition or retention channel and pitch a testable hack — then defend the math behind it in front of judges who've actually run the playbook.",
			"This isn't a hackathon for pretty decks. Judges score on whether the experiment is buildable in a week and whether the projected lift survives a hard question."
		],
		judges: [
			{
				slug: 'imran-kabir',
				name: 'Imran Kabir',
				title: 'Founder, ShipFast Labs'
			},
			{
				slug: 'farzana-rahman',
				name: 'Farzana Rahman',
				title: 'Group Product Manager, Grameenphone'
			}
		],
		teams: [
			{
				slug: 'team-velocity',
				name: 'Team Velocity',
				members: [
					{
						slug: 'tanvir-ahmed',
						name: 'Tanvir Ahmed',
						isLeader: true
					},
					{ slug: 'nabila-karim', name: 'Nabila Karim' },
					{ slug: 'shakil-rahman', name: 'Shakil Rahman' }
				]
			},
			{
				slug: 'team-funnel-forge',
				name: 'Funnel Forge',
				members: [
					{ slug: 'ruma-akter', name: 'Ruma Akter', isLeader: true },
					{ slug: 'fahim-chowdhury', name: 'Fahim Chowdhury' },
					{ slug: 'priya-das', name: 'Priya Das' },
					{ slug: 'arif-hossain', name: 'Arif Hossain' }
				]
			},
			{
				slug: 'team-loop-and-hook',
				name: 'Loop & Hook',
				members: [
					{
						slug: 'mim-sultana',
						name: 'Mim Sultana',
						isLeader: true
					},
					{ slug: 'kazi-nayeem', name: 'Kazi Nayeem' }
				]
			},
			{
				slug: 'team-north-star',
				name: 'North Star Metrics',
				members: [
					{
						slug: 'lamia-sultana',
						name: 'Lamia Sultana',
						isLeader: true
					},
					{ slug: 'rezaul-karim', name: 'Rezaul Karim' },
					{ slug: 'nadia-islam', name: 'Nadia Islam' }
				]
			}
		],
		winners: [],
		showWinnerSubmission: false,
		ranking: [],
		showParticipantScores: false,
		videoUrls: ['https://www.youtube.com/watch?v=growth-hack-kickoff'],
		galleryCount: 0,
		faqs: [
			{
				question: 'Can I join without a team?',
				answer: "Register solo and we'll slot you into a team during the kickoff call — teams are capped at 5 members."
			},
			{
				question: 'Does the hack need to be live by the deadline?',
				answer: 'No — a clickable prototype or a clear experiment plan with projected numbers is enough. Judges score feasibility, not a shipped feature.'
			}
		],
		sponsorTiers: [
			{
				tier: SponsorTierName.GOLD,
				sponsors: [{ name: 'Pathao' }, { name: 'Sheba.xyz' }]
			}
		],
		discussions: [
			{
				authorName: 'Tanvir Ahmed',
				postedAt: '2026-08-04T11:20:00+06:00',
				body: "Are we allowed to hack on a channel outside our own product's category, or does it need to tie back to what we actually work on?",
				comments: [
					{
						authorName: 'Farzana Rahman',
						authorIsMentor: true,
						postedAt: '2026-08-04T14:05:00+06:00',
						body: "Any channel works — we're scoring the reasoning, not domain fit.",
						replies: []
					}
				]
			}
		],
		registrationQuestions: ['Which growth channel do you want to hack on?']
	},
	{
		slug: 'pitchcraft-b2b-edition',
		title: 'PitchCraft: B2B Edition',
		format: EventFormat.HYBRID,
		startAt: '2026-08-08T09:00:00+06:00',
		endAt: '2026-08-22T20:00:00+06:00',
		registrationOpensAt: '2026-07-15T00:00:00+06:00',
		capacity: 50,
		seatsTaken: 22,
		isPremium: true,
		priceBdt: 800,
		venueAddress: 'WeWork, Gulshan 2, Dhaka',
		venueMapUrl: 'https://maps.google.com/?q=WeWork+Gulshan+2+Dhaka',
		resultTargetAt: '2026-09-01T18:00:00+06:00',
		description: [
			"A five-team-max pitch contest built for B2B products — the ones that live and die on a procurement conversation, not a viral loop. Judges are operators who've actually sat on the buying side of an enterprise deal.",
			'Scoring runs live throughout the contest window as submissions come in, so the standings below update as teams present — you can watch the board move.'
		],
		judges: [
			{
				slug: 'zubair-hasan',
				name: 'Zubair Hasan',
				title: 'Founder, LedgerBD'
			},
			{
				slug: 'rima-chowdhury',
				name: 'Rima Chowdhury',
				title: 'Design Lead, Wolt'
			}
		],
		teams: [
			{
				slug: 'team-ledger-labs',
				name: 'Ledger Labs',
				members: [
					{
						slug: 'shuvo-ahmed',
						name: 'Shuvo Ahmed',
						isLeader: true
					},
					{ slug: 'tasnim-rahman', name: 'Tasnim Rahman' },
					{ slug: 'kazi-nayeem', name: 'Kazi Nayeem' }
				]
			},
			{
				slug: 'team-procure-io',
				name: 'Procure.io',
				members: [
					{
						slug: 'nadia-islam',
						name: 'Nadia Islam',
						isLeader: true
					},
					{ slug: 'arif-hossain', name: 'Arif Hossain' },
					{ slug: 'mim-sultana', name: 'Mim Sultana' }
				]
			},
			{
				slug: 'team-supply-signal',
				name: 'Supply Signal',
				members: [
					{
						slug: 'rezaul-karim',
						name: 'Rezaul Karim',
						isLeader: true
					},
					{ slug: 'priya-das', name: 'Priya Das' }
				]
			},
			{
				slug: 'team-vendorwise',
				name: 'VendorWise',
				members: [
					{
						slug: 'fahim-chowdhury',
						name: 'Fahim Chowdhury',
						isLeader: true
					},
					{ slug: 'ruma-akter', name: 'Ruma Akter' },
					{ slug: 'shakil-rahman', name: 'Shakil Rahman' }
				]
			},
			{
				slug: 'team-invoice-nine',
				name: 'Invoice Nine',
				members: [
					{
						slug: 'nabila-karim',
						name: 'Nabila Karim',
						isLeader: true
					},
					{ slug: 'tanvir-ahmed', name: 'Tanvir Ahmed' }
				]
			}
		],
		winners: [],
		showWinnerSubmission: false,
		ranking: [
			{
				rank: 1,
				teamSlug: 'team-ledger-labs',
				teamName: 'Ledger Labs',
				score: 8.7
			},
			{
				rank: 2,
				teamSlug: 'team-procure-io',
				teamName: 'Procure.io',
				score: 8.35
			},
			{
				rank: 3,
				teamSlug: 'team-vendorwise',
				teamName: 'VendorWise',
				score: 7.9
			},
			{
				rank: 4,
				teamSlug: 'team-supply-signal',
				teamName: 'Supply Signal',
				score: 7.2
			},
			{
				rank: 5,
				teamSlug: 'team-invoice-nine',
				teamName: 'Invoice Nine',
				score: 6.6
			}
		],
		showParticipantScores: true,
		videoUrls: [],
		galleryCount: 2,
		faqs: [
			{
				question: 'Do we pitch in person or can we join remotely?',
				answer: 'Both — the final pitch session streams live for remote teams, and the venue hosts anyone who wants to present in the room.'
			},
			{
				question: 'How often do the standings update?',
				answer: 'Judges score submissions as they come in, so the board above reflects the latest scores at any point during the contest.'
			}
		],
		sponsorTiers: [
			{ tier: SponsorTierName.SILVER, sponsors: [{ name: 'bKash' }] }
		],
		discussions: [
			{
				authorName: 'Shuvo Ahmed',
				postedAt: '2026-08-09T10:00:00+06:00',
				body: 'Is there a hard cap on deck length, or just a time cap for the live pitch?',
				comments: [
					{
						authorName: 'Zubair Hasan',
						authorIsMentor: true,
						postedAt: '2026-08-09T12:30:00+06:00',
						body: 'Just an 8-minute time cap — bring as many slides as you need to fill it well.',
						replies: []
					}
				]
			}
		],
		registrationQuestions: ['Which B2B vertical is your pitch in?']
	},
	{
		slug: 'product-sprint-2026',
		title: 'Product Sprint 2026',
		format: EventFormat.HYBRID,
		startAt: '2026-09-01T09:00:00+06:00',
		endAt: '2026-09-14T20:00:00+06:00',
		registrationOpensAt: '2026-08-01T00:00:00+06:00',
		capacity: 60,
		seatsTaken: 47,
		isPremium: false,
		venueAddress: 'Startup Bangladesh Hub, Karwan Bazar, Dhaka',
		venueMapUrl: 'https://maps.google.com/?q=Startup+Bangladesh+Hub',
		resultTargetAt: '2026-09-28T18:00:00+06:00',
		description: [
			'A two-week product sprint for anyone who has an idea and wants a real deadline to ship against. Teams form after registration closes, so you can join solo — the roster below fills in once teams are assembled.',
			'Judges are looking for a working prototype with a clear problem statement, not a polished pitch deck. The scoring rubric favors evidence over ambition.'
		],
		judges: [
			{
				slug: 'imran-kabir',
				name: 'Imran Kabir',
				title: 'Founder, ShipFast Labs'
			},
			{
				slug: 'sabbir-ahmed',
				name: 'Sabbir Ahmed',
				title: 'Data Science Lead, Sheba.xyz'
			}
		],
		teams: [],
		winners: [],
		showWinnerSubmission: false,
		ranking: [],
		showParticipantScores: false,
		videoUrls: ['https://www.youtube.com/watch?v=product-sprint-promo'],
		galleryCount: 0,
		faqs: [
			{
				question: 'When are teams assembled?',
				answer: 'Right after registration closes on Aug 28 — admin builds teams from the registered roster and posts assignments here.'
			},
			{
				question: 'Is prior product experience required?',
				answer: 'No — the sprint is open to anyone in the community, including designers, engineers, and analysts pairing up with PMs.'
			}
		],
		sponsorTiers: [],
		discussions: [
			{
				authorName: 'Nabila Karim',
				postedAt: '2026-08-05T09:15:00+06:00',
				body: 'Can we request to be teamed up with someone we already know, or is it fully randomized?',
				comments: []
			}
		],
		registrationQuestions: ["What's your product focus area?"]
	},
	{
		slug: 'design-sprint-dhaka',
		title: 'Design Sprint Dhaka',
		format: EventFormat.PHYSICAL,
		startAt: '2026-09-20T09:00:00+06:00',
		endAt: '2026-09-27T20:00:00+06:00',
		registrationOpensAt: '2026-08-20T00:00:00+06:00',
		isPremium: false,
		venueAddress: 'Concord Tower, Panthapath, Dhaka',
		venueMapUrl:
			'https://maps.google.com/?q=Concord+Tower+Panthapath+Dhaka',
		resultTargetAt: '2026-10-11T18:00:00+06:00',
		description: [
			'A week-long, in-person design sprint. Teams get a design brief on day one and present a tested prototype to judges on the final day — no remote track for this one, the whole point is working shoulder-to-shoulder.',
			'Registration opens closer to the date so teams can be built from people who can actually commit to the full week on-site.'
		],
		judges: [
			{
				slug: 'rima-chowdhury',
				name: 'Rima Chowdhury',
				title: 'Design Lead, Wolt'
			},
			{
				slug: 'farzana-rahman',
				name: 'Farzana Rahman',
				title: 'Group Product Manager, Grameenphone'
			}
		],
		teams: [],
		winners: [],
		showWinnerSubmission: false,
		ranking: [],
		showParticipantScores: false,
		videoUrls: [],
		galleryCount: 0,
		faqs: [
			{
				question: 'Do I need to bring my own laptop and design tools?',
				answer: 'Yes — bring a laptop with your usual design tools installed. Printing and whiteboard space are provided on-site.'
			},
			{
				question: 'Is this beginner-friendly?',
				answer: "It's aimed at people with some design or research experience — the pace assumes you can move fast without ramp-up."
			}
		],
		sponsorTiers: [],
		discussions: [],
		registrationQuestions: ['Can you commit to all 5 on-site days?']
	},
	{
		slug: 'data-storytelling-cup',
		title: 'Data Storytelling Cup',
		format: EventFormat.ONLINE,
		startAt: '2026-10-05T09:00:00+06:00',
		endAt: '2026-10-19T20:00:00+06:00',
		registrationOpensAt: '2026-08-01T00:00:00+06:00',
		isPremium: false,
		resultTargetAt: '2026-11-02T18:00:00+06:00',
		description: [
			'Teams get a raw, messy dataset and two weeks to turn it into a decision a stakeholder would actually act on. No visualization-for-its-own-sake — judges score on whether the story changes what a reader would do next.',
			'Fully remote, fully async — submit your writeup and dashboard link before the deadline and judging happens after the window closes.'
		],
		judges: [
			{
				slug: 'sabbir-ahmed',
				name: 'Sabbir Ahmed',
				title: 'Data Science Lead, Sheba.xyz'
			},
			{
				slug: 'zubair-hasan',
				name: 'Zubair Hasan',
				title: 'Founder, LedgerBD'
			}
		],
		teams: [],
		winners: [],
		showWinnerSubmission: false,
		ranking: [],
		showParticipantScores: false,
		videoUrls: ['https://www.youtube.com/watch?v=data-storytelling-brief'],
		galleryCount: 0,
		faqs: [
			{
				question: 'What tools can we use for the dashboard?',
				answer: 'Any — Looker Studio, Tableau, a custom web chart, or even a well-designed spreadsheet. Judges care about the story, not the tool.'
			},
			{
				question: 'Is the dataset the same for every team?',
				answer: 'Yes — every team works from the same dataset, released at the start of the window, so the comparison is fair.'
			}
		],
		sponsorTiers: [],
		discussions: [],
		registrationQuestions: ['Any prior experience with public datasets?']
	},
	{
		slug: 'case-study-slam-vol-3',
		title: 'Case Study Slam, Vol. 3',
		format: EventFormat.ONLINE,
		startAt: '2026-07-01T09:00:00+06:00',
		endAt: '2026-07-15T20:00:00+06:00',
		isPremium: false,
		resultPublishedAt: '2026-07-30T18:00:00+06:00',
		resultTargetAt: '2026-07-28T18:00:00+06:00',
		winningTeam: { name: 'Team Shonar Bangla', tier: WinnerTier.CHAMPION },
		description: [
			"The community's longest-running contest, now in its third round: teams take a real product problem from their own workplace, anonymize it, and write it up as a judged case study — then defend the recommendation live.",
			'Six teams competed this round. Judges scored on problem framing, the strength of the tradeoff analysis, and whether the recommendation actually held up under questioning.'
		],
		judges: [
			{
				slug: 'imran-kabir',
				name: 'Imran Kabir',
				title: 'Founder, ShipFast Labs'
			},
			{
				slug: 'farzana-rahman',
				name: 'Farzana Rahman',
				title: 'Group Product Manager, Grameenphone'
			},
			{
				slug: 'zubair-hasan',
				name: 'Zubair Hasan',
				title: 'Founder, LedgerBD'
			}
		],
		teams: [
			{
				slug: 'team-shonar-bangla',
				name: 'Team Shonar Bangla',
				members: [
					{
						slug: 'mahin-islam',
						name: 'Mahin Islam',
						isLeader: true
					},
					{ slug: 'sadia-afrin', name: 'Sadia Afrin' },
					{ slug: 'tasnim-rahman', name: 'Tasnim Rahman' }
				]
			},
			{
				slug: 'team-anushilon',
				name: 'Team Anushilon',
				members: [
					{
						slug: 'nadia-islam',
						name: 'Nadia Islam',
						isLeader: true
					},
					{ slug: 'rezaul-karim', name: 'Rezaul Karim' },
					{ slug: 'mim-sultana', name: 'Mim Sultana' }
				]
			},
			{
				slug: 'team-kaaj',
				name: 'Team Kaaj',
				members: [
					{
						slug: 'arif-hossain',
						name: 'Arif Hossain',
						isLeader: true
					},
					{ slug: 'priya-das', name: 'Priya Das' }
				]
			},
			{
				slug: 'team-porikolpona',
				name: 'Porikolpona',
				members: [
					{
						slug: 'fahim-chowdhury',
						name: 'Fahim Chowdhury',
						isLeader: true
					},
					{ slug: 'ruma-akter', name: 'Ruma Akter' },
					{ slug: 'shakil-rahman', name: 'Shakil Rahman' }
				]
			},
			{
				slug: 'team-uddyog',
				name: 'Team Uddyog',
				members: [
					{
						slug: 'tanvir-ahmed',
						name: 'Tanvir Ahmed',
						isLeader: true
					},
					{ slug: 'nabila-karim', name: 'Nabila Karim' }
				]
			},
			{
				slug: 'team-digonto',
				name: 'Digonto',
				members: [
					{
						slug: 'kazi-nayeem',
						name: 'Kazi Nayeem',
						isLeader: true
					},
					{ slug: 'lamia-sultana', name: 'Lamia Sultana' },
					{ slug: 'shuvo-ahmed', name: 'Shuvo Ahmed' }
				]
			}
		],
		winners: [
			{
				tier: WinnerTier.CHAMPION,
				teams: [
					{
						slug: 'team-shonar-bangla',
						name: 'Team Shonar Bangla',
						submission: {
							title: 'Cutting checkout drop-off on a grocery app by 18%',
							summary:
								'Reframed a payment-failure problem as a trust problem, then redesigned the retry flow around the actual failure reason instead of a generic error.',
							documentUrl:
								'https://docs.google.com/document/d/shonar-bangla-case-study',
							prototypeUrl:
								'https://www.figma.com/proto/shonar-bangla',
							videoUrl:
								'https://www.youtube.com/watch?v=shonar-bangla-pitch'
						}
					}
				]
			},
			{
				tier: WinnerTier.RUNNER_UP,
				teams: [
					{
						slug: 'team-anushilon',
						name: 'Team Anushilon',
						submission: {
							title: "Rebuilding onboarding for a bank's least-active segment",
							summary:
								'Segmented dormant users by drop-off step rather than tenure, then shipped a three-step onboarding fix targeted at the biggest single leak.',
							documentUrl:
								'https://docs.google.com/document/d/anushilon-case-study',
							presentationUrl:
								'https://www.canva.com/design/anushilon-deck'
						}
					}
				]
			}
		],
		showWinnerSubmission: true,
		ranking: [
			{
				rank: 1,
				teamSlug: 'team-shonar-bangla',
				teamName: 'Team Shonar Bangla',
				score: 9.4
			},
			{
				rank: 2,
				teamSlug: 'team-anushilon',
				teamName: 'Team Anushilon',
				score: 8.9
			},
			{
				rank: 3,
				teamSlug: 'team-kaaj',
				teamName: 'Team Kaaj',
				score: 8.1
			},
			{
				rank: 4,
				teamSlug: 'team-porikolpona',
				teamName: 'Porikolpona',
				score: 7.6
			},
			{
				rank: 5,
				teamSlug: 'team-uddyog',
				teamName: 'Team Uddyog',
				score: 7.2
			},
			{
				rank: 6,
				teamSlug: 'team-digonto',
				teamName: 'Digonto',
				score: 6.5
			}
		],
		showParticipantScores: true,
		videoUrls: ['https://www.youtube.com/watch?v=case-study-slam-recap'],
		galleryCount: 4,
		faqs: [
			{
				question: 'Can I read the winning write-ups in full?',
				answer: 'Yes — the champion and runner-up submissions are linked above, including their supporting documents and prototypes.'
			},
			{
				question: 'Will there be a Vol. 4?',
				answer: 'Yes — the next round opens for registration roughly a quarter after this one closes. Watch this page for the announcement.'
			}
		],
		sponsorTiers: [
			{
				tier: SponsorTierName.GOLD,
				sponsors: [{ name: 'Chaldal' }, { name: 'Pathao' }]
			}
		],
		discussions: [
			{
				authorName: 'Product Peers BD',
				postedAt: '2026-07-30T18:10:00+06:00',
				isPinned: true,
				isAnnouncement: true,
				body: 'Results are live — congratulations to Team Shonar Bangla and Team Anushilon. Thank you to all six teams for a genuinely close round.',
				comments: [
					{
						authorName: 'Mahin Islam',
						postedAt: '2026-07-30T19:02:00+06:00',
						body: 'Huge thanks to the judges for the detailed feedback — learned more from the Q&A than the prep.',
						replies: []
					}
				]
			}
		],
		registrationQuestions: ['Which workplace problem are you anonymizing?']
	},
	{
		slug: 'ux-teardown-tournament',
		title: 'UX Teardown Tournament',
		format: EventFormat.PHYSICAL,
		startAt: '2026-07-20T09:00:00+06:00',
		endAt: '2026-07-28T20:00:00+06:00',
		isPremium: true,
		priceBdt: 600,
		venueAddress: 'Six Seasons Hotel, Gulshan 2, Dhaka',
		venueMapUrl:
			'https://maps.google.com/?q=Six+Seasons+Hotel+Gulshan+Dhaka',
		resultTargetAt: '2026-08-20T18:00:00+06:00',
		description: [
			'Four teams, one live product each, ninety minutes to tear down the UX and pitch a fix — in front of a room, no slides allowed past the first two minutes.',
			'Judging wrapped after the final round on Jul 28. Scores are being finalized and results will post here once Admin publishes them.'
		],
		judges: [
			{
				slug: 'rima-chowdhury',
				name: 'Rima Chowdhury',
				title: 'Design Lead, Wolt'
			},
			{
				slug: 'farzana-rahman',
				name: 'Farzana Rahman',
				title: 'Group Product Manager, Grameenphone'
			}
		],
		teams: [
			{
				slug: 'team-pixel-patrol',
				name: 'Pixel Patrol',
				members: [
					{ slug: 'priya-das', name: 'Priya Das', isLeader: true },
					{ slug: 'arif-hossain', name: 'Arif Hossain' },
					{ slug: 'mim-sultana', name: 'Mim Sultana' }
				]
			},
			{
				slug: 'team-flow-state',
				name: 'Flow State',
				members: [
					{
						slug: 'shakil-rahman',
						name: 'Shakil Rahman',
						isLeader: true
					},
					{ slug: 'ruma-akter', name: 'Ruma Akter' }
				]
			},
			{
				slug: 'team-heuristics',
				name: 'The Heuristics',
				members: [
					{
						slug: 'kazi-nayeem',
						name: 'Kazi Nayeem',
						isLeader: true
					},
					{ slug: 'lamia-sultana', name: 'Lamia Sultana' },
					{ slug: 'rezaul-karim', name: 'Rezaul Karim' }
				]
			},
			{
				slug: 'team-clarity-first',
				name: 'Clarity First',
				members: [
					{
						slug: 'nabila-karim',
						name: 'Nabila Karim',
						isLeader: true
					},
					{ slug: 'tanvir-ahmed', name: 'Tanvir Ahmed' },
					{ slug: 'nadia-islam', name: 'Nadia Islam' }
				]
			}
		],
		winners: [],
		showWinnerSubmission: false,
		ranking: [],
		showParticipantScores: false,
		videoUrls: [],
		galleryCount: 3,
		faqs: [
			{
				question: 'Which products get torn down?',
				answer: 'Each team draws a real, live consumer app at random on the day — nobody knows their product in advance.'
			},
			{
				question: 'When will results be published?',
				answer: 'Admin is finalizing scores now. The target publish date is shown above — check back or watch this page for the announcement.'
			}
		],
		sponsorTiers: [
			{ tier: SponsorTierName.SILVER, sponsors: [{ name: 'Wolt' }] }
		],
		discussions: [
			{
				authorName: 'Kazi Nayeem',
				postedAt: '2026-07-29T10:00:00+06:00',
				body: "Any update on when we'll see scores? Just curious how close it was.",
				comments: []
			}
		],
		registrationQuestions: ['Any product teardown experience before?']
	},
	{
		slug: 'fintech-case-challenge',
		title: 'Fintech Case Challenge',
		format: EventFormat.ONLINE,
		startAt: '2026-06-01T09:00:00+06:00',
		endAt: '2026-06-10T20:00:00+06:00',
		isPremium: false,
		resultPublishedAt: '2026-06-20T18:00:00+06:00',
		resultTargetAt: '2026-06-18T18:00:00+06:00',
		winningTeam: { name: 'Team Nowroz', tier: WinnerTier.CHAMPION },
		description: [
			"A ten-day remote challenge built around a single question: how would you design a fraud-detection UX that doesn't punish honest users? Four teams took it on.",
			'Winner visibility for this round is limited by design — the panel opted to keep submission assets private out of respect for the fintech partners who supplied the brief.'
		],
		judges: [
			{
				slug: 'sabbir-ahmed',
				name: 'Sabbir Ahmed',
				title: 'Data Science Lead, Sheba.xyz'
			},
			{
				slug: 'zubair-hasan',
				name: 'Zubair Hasan',
				title: 'Founder, LedgerBD'
			}
		],
		teams: [
			{
				slug: 'team-nowroz',
				name: 'Team Nowroz',
				members: [
					{
						slug: 'rezaul-karim',
						name: 'Rezaul Karim',
						isLeader: true
					},
					{ slug: 'nadia-islam', name: 'Nadia Islam' },
					{ slug: 'shuvo-ahmed', name: 'Shuvo Ahmed' }
				]
			},
			{
				slug: 'team-secure-flow',
				name: 'Secure Flow',
				members: [
					{
						slug: 'tasnim-rahman',
						name: 'Tasnim Rahman',
						isLeader: true
					},
					{ slug: 'kazi-nayeem', name: 'Kazi Nayeem' }
				]
			},
			{
				slug: 'team-trustline',
				name: 'Trustline',
				members: [
					{
						slug: 'mim-sultana',
						name: 'Mim Sultana',
						isLeader: true
					},
					{ slug: 'fahim-chowdhury', name: 'Fahim Chowdhury' },
					{ slug: 'priya-das', name: 'Priya Das' }
				]
			},
			{
				slug: 'team-riskguard',
				name: 'RiskGuard',
				members: [
					{
						slug: 'lamia-sultana',
						name: 'Lamia Sultana',
						isLeader: true
					},
					{ slug: 'arif-hossain', name: 'Arif Hossain' }
				]
			}
		],
		winners: [
			{
				tier: WinnerTier.CHAMPION,
				teams: [{ slug: 'team-nowroz', name: 'Team Nowroz' }]
			}
		],
		showWinnerSubmission: false,
		ranking: [],
		showParticipantScores: false,
		videoUrls: [],
		galleryCount: 2,
		faqs: [
			{
				question: "Why aren't the submissions public?",
				answer: 'This round used a real fraud dataset shared under a private agreement, so submission assets stay internal to Admin, judges, and each team.'
			},
			{
				question: 'Is standings data available?',
				answer: "Rankings for this round weren't made public — only the winning team is shown, consistent with this contest's visibility settings."
			}
		],
		sponsorTiers: [],
		discussions: [
			{
				authorName: 'Rezaul Karim',
				postedAt: '2026-06-20T19:00:00+06:00',
				body: 'Grateful for the challenge — the dataset was genuinely messy in the way real fraud data is. Good problem.',
				comments: []
			}
		],
		registrationQuestions: ['Any fintech or trust & safety background?']
	},
	{
		slug: 'roadmap-rumble',
		title: 'Roadmap Rumble',
		format: EventFormat.HYBRID,
		startAt: '2026-05-01T09:00:00+06:00',
		endAt: '2026-05-12T20:00:00+06:00',
		isPremium: true,
		priceBdt: 450,
		venueAddress: 'Radisson Blu Water Garden, Dhaka',
		venueMapUrl:
			'https://maps.google.com/?q=Radisson+Blu+Water+Garden+Dhaka',
		resultPublishedAt: '2026-05-25T18:00:00+06:00',
		resultTargetAt: '2026-05-22T18:00:00+06:00',
		winningTeam: { name: 'Team Anchor', tier: WinnerTier.CHAMPION },
		description: [
			"Five teams, one shared constraint: a fixed six-month budget and an already-oversubscribed backlog. Build the roadmap you'd actually ship and defend every cut you made.",
			"Judges scored the tradeoff reasoning, not the roadmap's ambition — the winning entry was the one that could survive a stakeholder pushing back on every line."
		],
		judges: [
			{
				slug: 'imran-kabir',
				name: 'Imran Kabir',
				title: 'Founder, ShipFast Labs'
			},
			{
				slug: 'rima-chowdhury',
				name: 'Rima Chowdhury',
				title: 'Design Lead, Wolt'
			}
		],
		teams: [
			{
				slug: 'team-anchor',
				name: 'Team Anchor',
				members: [
					{
						slug: 'sadia-afrin',
						name: 'Sadia Afrin',
						isLeader: true
					},
					{ slug: 'mahin-islam', name: 'Mahin Islam' },
					{ slug: 'tanvir-ahmed', name: 'Tanvir Ahmed' }
				]
			},
			{
				slug: 'team-backlog-busters',
				name: 'Backlog Busters',
				members: [
					{
						slug: 'nabila-karim',
						name: 'Nabila Karim',
						isLeader: true
					},
					{ slug: 'shakil-rahman', name: 'Shakil Rahman' }
				]
			},
			{
				slug: 'team-triage',
				name: 'Triage',
				members: [
					{ slug: 'ruma-akter', name: 'Ruma Akter', isLeader: true },
					{ slug: 'fahim-chowdhury', name: 'Fahim Chowdhury' },
					{ slug: 'arif-hossain', name: 'Arif Hossain' }
				]
			},
			{
				slug: 'team-north-quarter',
				name: 'North Quarter',
				members: [
					{
						slug: 'kazi-nayeem',
						name: 'Kazi Nayeem',
						isLeader: true
					},
					{ slug: 'mim-sultana', name: 'Mim Sultana' }
				]
			},
			{
				slug: 'team-runway',
				name: 'Runway',
				members: [
					{
						slug: 'lamia-sultana',
						name: 'Lamia Sultana',
						isLeader: true
					},
					{ slug: 'rezaul-karim', name: 'Rezaul Karim' },
					{ slug: 'nadia-islam', name: 'Nadia Islam' }
				]
			}
		],
		winners: [
			{
				tier: WinnerTier.CHAMPION,
				teams: [
					{
						slug: 'team-anchor',
						name: 'Team Anchor',
						submission: {
							title: 'A six-month roadmap that survives every stakeholder objection',
							summary:
								'Cut the backlog to three bets tied to a single north-star metric, with an explicit list of what was deliberately not built and why.',
							documentUrl:
								'https://docs.google.com/document/d/team-anchor-roadmap',
							presentationUrl:
								'https://www.canva.com/design/team-anchor-deck',
							videoUrl:
								'https://www.youtube.com/watch?v=team-anchor-defense'
						}
					}
				]
			}
		],
		showWinnerSubmission: true,
		ranking: [
			{
				rank: 1,
				teamSlug: 'team-anchor',
				teamName: 'Team Anchor',
				score: 9.1
			},
			{
				rank: 2,
				teamSlug: 'team-triage',
				teamName: 'Triage',
				score: 8.4
			},
			{
				rank: 3,
				teamSlug: 'team-backlog-busters',
				teamName: 'Backlog Busters',
				score: 7.8
			},
			{
				rank: 4,
				teamSlug: 'team-runway',
				teamName: 'Runway',
				score: 7.3
			},
			{
				rank: 5,
				teamSlug: 'team-north-quarter',
				teamName: 'North Quarter',
				score: 6.9
			}
		],
		showParticipantScores: true,
		videoUrls: ['https://www.youtube.com/watch?v=roadmap-rumble-recap'],
		galleryCount: 3,
		faqs: [
			{
				question: 'Was the backlog the same for every team?',
				answer: 'Yes — every team worked from the same oversubscribed backlog and budget, released at kickoff.'
			},
			{
				question: 'Can I see the losing roadmaps too?',
				answer: 'Only the winning submission is published on this page — the visibility setting for this round covers the champion only.'
			}
		],
		sponsorTiers: [
			{ tier: SponsorTierName.GOLD, sponsors: [{ name: 'bKash' }] }
		],
		discussions: [
			{
				authorName: 'Sadia Afrin',
				postedAt: '2026-05-25T18:30:00+06:00',
				body: 'Cutting two of our three "safe" features was the scariest part of the defense — glad it landed.',
				comments: [
					{
						authorName: 'Imran Kabir',
						authorIsMentor: true,
						postedAt: '2026-05-25T20:00:00+06:00',
						body: 'That cut is exactly why you won — everyone else hedged.',
						replies: []
					}
				]
			}
		],
		registrationQuestions: ['What product area is your roadmap for?']
	}
];

export function getContestBySlug(slug: string): ContestDetail | undefined {
	return contests.find((contest) => contest.slug === slug);
}
