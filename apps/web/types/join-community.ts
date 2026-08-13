import type { LucideIcon } from 'lucide-react';

import type { ActivityType } from '@/enums/profile';

export interface CommunityPulseEvent {
	id: string;
	type: ActivityType;
	actorName: string;
	occurredAt: string;
	description: string;
}

export interface WhyJoinItem {
	icon: LucideIcon;
	title: string;
	description: string;
}
