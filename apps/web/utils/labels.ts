import { ContestStatus, WinnerTier } from '@/enums/contest';
import {
	EventFormat,
	EventStatus,
	EventType,
	SpeakerRole,
	SponsorTierName
} from '@/enums/event';
import { ProductStage } from '@/enums/product';

export const eventTypeLabels: Record<EventType, string> = {
	[EventType.MENTOR_SESSION]: 'Mentor Session',
	[EventType.PANEL_DISCUSSION]: 'Panel Discussion',
	[EventType.COMMUNITY_ADDA]: 'Community Adda',
	[EventType.MEETUP]: 'Meetup'
};

export const eventFormatLabels: Record<EventFormat, string> = {
	[EventFormat.ONLINE]: 'Online',
	[EventFormat.PHYSICAL]: 'In person',
	[EventFormat.HYBRID]: 'Hybrid'
};

export const eventStatusLabels: Record<EventStatus, string> = {
	[EventStatus.ONGOING]: 'Ongoing',
	[EventStatus.UPCOMING]: 'Upcoming',
	[EventStatus.PAST]: 'Past'
};

export const speakerRoleLabels: Record<SpeakerRole, string> = {
	[SpeakerRole.SPEAKER]: 'Speaker',
	[SpeakerRole.HOST]: 'Host',
	[SpeakerRole.MENTOR]: 'Mentor',
	[SpeakerRole.PANELIST]: 'Panelist'
};

export const sponsorTierLabels: Record<SponsorTierName, string> = {
	[SponsorTierName.TITLE]: 'Title Sponsor',
	[SponsorTierName.GOLD]: 'Gold',
	[SponsorTierName.SILVER]: 'Silver',
	[SponsorTierName.COMMUNITY]: 'Community Partner'
};

export const contestStatusLabels: Record<ContestStatus, string> = {
	[ContestStatus.RUNNING]: 'Running',
	[ContestStatus.UPCOMING]: 'Upcoming',
	[ContestStatus.PAST]: 'Past'
};

export const winnerTierLabels: Record<WinnerTier, string> = {
	[WinnerTier.CHAMPION]: 'Champion',
	[WinnerTier.RUNNER_UP]: 'Runner-up'
};

export const productStageLabels: Record<ProductStage, string> = {
	[ProductStage.IDEA]: 'Idea',
	[ProductStage.MVP]: 'MVP',
	[ProductStage.BETA]: 'Beta',
	[ProductStage.LIVE]: 'Live',
	[ProductStage.PAUSED]: 'Paused',
	[ProductStage.SUNSET]: 'Sunset'
};
