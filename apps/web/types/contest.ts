import type { WinnerTier } from '@/enums/contest';
import type { EventFormat } from '@/enums/event';

export interface ContestWinningTeam {
	name: string;
	tier: WinnerTier;
}

export interface ContestListItem {
	slug: string;
	title: string;
	format: EventFormat;
	startAt: string;
	endAt: string;
	registrationOpensAt?: string;
	registrationClosedByAdmin?: boolean;
	capacity?: number;
	seatsTaken?: number;
	isPremium: boolean;
	priceBdt?: number;
	resultPublishedAt?: string;
	winningTeam?: ContestWinningTeam;
}

export type ContestSortOption =
	| 'default'
	| 'date-asc'
	| 'date-desc'
	| 'title-asc'
	| 'title-desc';
