import type { ContestPreviewMode, WinnerTier } from '@/enums/contest';
import type { EventFormat, EventType } from '@/enums/event';
import type { ProductStage } from '@/enums/product';

export interface StatItem {
	label: string;
	value: string;
}

export interface UpcomingEventCard {
	slug: string;
	title: string;
	eventType: EventType;
	format: EventFormat;
	startAt: string;
	registrationOpen: boolean;
	hasRegistration: boolean;
}

export interface MentorCard {
	slug: string;
	name: string;
	headline: string;
	skills: string[];
}

export interface CaseStudyCard {
	slug: string;
	title: string;
	clientName: string;
	industries: string[];
	authorName: string;
}

export interface ArticleCard {
	slug: string;
	title: string;
	category: string;
	authorName: string;
	readTimeMinutes: number;
}

export interface ProductCard {
	slug: string;
	name: string;
	industry: string;
	stage: ProductStage;
}

export interface ContestCard {
	slug: string;
	title: string;
	mode: ContestPreviewMode;
	dateLabel: string;
	format?: EventFormat;
	winningTeamName?: string;
	winnerTier?: WinnerTier;
}

export interface TestimonialItem {
	authorName: string;
	authorRole: string;
	quote: string;
	rating?: number;
}

export interface SponsorItem {
	name: string;
}
