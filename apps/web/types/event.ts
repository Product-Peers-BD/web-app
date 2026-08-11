import type {
	EventFormat,
	EventType,
	SpeakerRole,
	SponsorTierName
} from '@/enums/event';

export interface EventSpeaker {
	slug: string;
	name: string;
	role: SpeakerRole;
	title: string;
	sessionTopic?: string;
}

export interface EventActivity {
	title: string;
	description?: string;
	startTime?: string;
	endTime?: string;
}

export interface EventFaq {
	question: string;
	answer: string;
}

export interface EventSponsor {
	name: string;
}

export interface EventSponsorTier {
	tier: SponsorTierName;
	sponsors: EventSponsor[];
}

export interface EventDiscussionReply {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
}

export interface EventDiscussionComment {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
	replies: EventDiscussionReply[];
}

export interface EventDiscussionThread {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
	isPinned?: boolean;
	isAnnouncement?: boolean;
	comments: EventDiscussionComment[];
}

export interface EventListItem {
	slug: string;
	title: string;
	eventType: EventType;
	categories: string[];
	format: EventFormat;
	startAt: string;
	endAt: string;
	hasRegistration: boolean;
	registrationOpensAt?: string;
	registrationClosedByAdmin?: boolean;
	isPremium: boolean;
	priceBdt?: number;
	capacity?: number;
	seatsTaken?: number;
	tags: string[];
}

export type EventSortOption =
	| 'default'
	| 'title-asc'
	| 'title-desc'
	| 'date-asc'
	| 'date-desc';

export interface EventDetail extends EventListItem {
	description: string[];
	speakers: EventSpeaker[];
	venueAddress?: string;
	venueMapUrl?: string;
	activities: EventActivity[];
	videoUrls: string[];
	galleryCount: number;
	faqs: EventFaq[];
	sponsorTiers: EventSponsorTier[];
	pastRecap?: string;
	discussions: EventDiscussionThread[];
	registrationQuestions: string[];
}
