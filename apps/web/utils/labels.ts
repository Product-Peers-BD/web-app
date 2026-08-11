import { EventFormat, EventType } from '@/enums/event';
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

export const productStageLabels: Record<ProductStage, string> = {
	[ProductStage.IDEA]: 'Idea',
	[ProductStage.MVP]: 'MVP',
	[ProductStage.BETA]: 'Beta',
	[ProductStage.LIVE]: 'Live'
};
