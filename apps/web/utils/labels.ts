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

export const productStageLabels: Record<ProductStage, string> = {
	[ProductStage.IDEA]: 'Idea',
	[ProductStage.MVP]: 'MVP',
	[ProductStage.BETA]: 'Beta',
	[ProductStage.LIVE]: 'Live'
};
