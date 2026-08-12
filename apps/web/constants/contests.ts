import { WinnerTier } from '@/enums/contest';
import { EventFormat } from '@/enums/event';
import type { ContestListItem } from '@/types/contest';

export const contests: ContestListItem[] = [
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
		priceBdt: 500
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
		priceBdt: 800
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
		isPremium: false
	},
	{
		slug: 'design-sprint-dhaka',
		title: 'Design Sprint Dhaka',
		format: EventFormat.PHYSICAL,
		startAt: '2026-09-20T09:00:00+06:00',
		endAt: '2026-09-27T20:00:00+06:00',
		registrationOpensAt: '2026-08-20T00:00:00+06:00',
		isPremium: false
	},
	{
		slug: 'data-storytelling-cup',
		title: 'Data Storytelling Cup',
		format: EventFormat.ONLINE,
		startAt: '2026-10-05T09:00:00+06:00',
		endAt: '2026-10-19T20:00:00+06:00',
		registrationOpensAt: '2026-08-01T00:00:00+06:00',
		isPremium: false
	},
	{
		slug: 'case-study-slam-vol-3',
		title: 'Case Study Slam, Vol. 3',
		format: EventFormat.ONLINE,
		startAt: '2026-07-01T09:00:00+06:00',
		endAt: '2026-07-15T20:00:00+06:00',
		isPremium: false,
		resultPublishedAt: '2026-07-30T18:00:00+06:00',
		winningTeam: { name: 'Team Shonar Bangla', tier: WinnerTier.CHAMPION }
	},
	{
		slug: 'ux-teardown-tournament',
		title: 'UX Teardown Tournament',
		format: EventFormat.PHYSICAL,
		startAt: '2026-07-20T09:00:00+06:00',
		endAt: '2026-07-28T20:00:00+06:00',
		isPremium: true,
		priceBdt: 600
	},
	{
		slug: 'fintech-case-challenge',
		title: 'Fintech Case Challenge',
		format: EventFormat.ONLINE,
		startAt: '2026-06-01T09:00:00+06:00',
		endAt: '2026-06-10T20:00:00+06:00',
		isPremium: false,
		resultPublishedAt: '2026-06-20T18:00:00+06:00',
		winningTeam: { name: 'Team Nowroz', tier: WinnerTier.RUNNER_UP }
	},
	{
		slug: 'roadmap-rumble',
		title: 'Roadmap Rumble',
		format: EventFormat.HYBRID,
		startAt: '2026-05-01T09:00:00+06:00',
		endAt: '2026-05-12T20:00:00+06:00',
		isPremium: true,
		priceBdt: 450,
		resultPublishedAt: '2026-05-25T18:00:00+06:00',
		winningTeam: { name: 'Team Anchor', tier: WinnerTier.CHAMPION }
	}
];
