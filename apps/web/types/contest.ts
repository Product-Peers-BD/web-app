import type { WinnerTier } from '@/enums/contest';
import type { EventFormat } from '@/enums/event';
import type {
	EventDiscussionThread,
	EventFaq,
	EventSponsorTier
} from '@/types/event';

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

export interface ContestJudge {
	slug: string;
	name: string;
	title: string;
}

export interface ContestTeamMember {
	slug: string;
	name: string;
	isLeader?: boolean;
}

export interface ContestTeam {
	slug: string;
	name: string;
	members: ContestTeamMember[];
}

export interface ContestSubmission {
	title: string;
	summary: string;
	documentUrl?: string;
	prototypeUrl?: string;
	presentationUrl?: string;
	videoUrl?: string;
}

export interface ContestWinnerTeam {
	slug: string;
	name: string;
	submission?: ContestSubmission;
}

export interface ContestWinnerGroup {
	tier: WinnerTier;
	teams: ContestWinnerTeam[];
}

export interface ContestRankingEntry {
	rank: number;
	teamSlug: string;
	teamName: string;
	score?: number;
}

export interface ContestDetail extends ContestListItem {
	description: string[];
	judges: ContestJudge[];
	resultTargetAt: string;
	venueAddress?: string;
	venueMapUrl?: string;
	teams: ContestTeam[];
	winners: ContestWinnerGroup[];
	showWinnerSubmission: boolean;
	ranking: ContestRankingEntry[];
	showParticipantScores: boolean;
	videoUrls: string[];
	galleryCount: number;
	faqs: EventFaq[];
	sponsorTiers: EventSponsorTier[];
	discussions: EventDiscussionThread[];
	registrationQuestions: string[];
}
