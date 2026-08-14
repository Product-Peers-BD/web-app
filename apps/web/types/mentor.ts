import type { BookingStatus } from '@/enums/mentor';

export interface MentorSlot {
	id: string;
	startAt: string;
}

export interface ExistingBooking {
	status: BookingStatus;
	slotLabel: string;
}

export interface MentorListItem {
	slug: string;
	name: string;
	headline: string;
	avatarUrl?: string;
	skills: string[];
	sessionDurationMinutes: number;
	isPaid: boolean;
	priceBdt?: number;
	slots: MentorSlot[];
	existingBooking?: ExistingBooking;
}

export interface OfficeHoursEntry {
	mentor: MentorListItem;
	slot: MentorSlot;
}
