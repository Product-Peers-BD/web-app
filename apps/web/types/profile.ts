import type { ActivityEntityType, ActivityType } from '@/enums/profile';

export interface ProfileSocialLinks {
	linkedin?: string;
	twitter?: string;
	website?: string;
}

export interface ProfileExperienceEntry {
	company: string;
	title: string;
	duration: string;
	description?: string;
}

export interface ProfileActivity {
	id: string;
	type: ActivityType;
	occurredAt: string;
	description: string;
	href?: string;
	entityType?: ActivityEntityType;
	entitySlug?: string;
}

export interface MentorCredentials {
	sessionsDelivered: number;
	eventsSpoken: number;
	contestsJudged: number;
}

export interface PublicProfile {
	username: string;
	name: string;
	title: string;
	company?: string;
	city: string;
	country: string;
	bio: string;
	skills: string[];
	experience: ProfileExperienceEntry[];
	socialLinks: ProfileSocialLinks;
	followerCount: number;
	isMentor: boolean;
	mentorCredentials?: MentorCredentials;
	joinedAt: string;
	activities: ProfileActivity[];
}
