import type { LucideIcon } from 'lucide-react';

export interface Milestone {
	id: string;
	period: string;
	title: string;
	description: string;
}

export interface ValuePillar {
	icon: LucideIcon;
	title: string;
	description: string;
}

export interface TeamMember {
	username: string;
	// name: string;
	designation: string;
	// isMentor: boolean;
}
