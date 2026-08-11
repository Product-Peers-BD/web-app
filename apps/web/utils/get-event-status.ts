import { EventStatus } from '@/enums/event';

export function getEventStatus(startAt: string, endAt: string): EventStatus {
	const now = Date.now();
	const start = new Date(startAt).getTime();
	const end = new Date(endAt).getTime();

	if (now < start) return EventStatus.UPCOMING;
	if (now > end) return EventStatus.PAST;
	return EventStatus.ONGOING;
}

interface RegistrationInput {
	hasRegistration: boolean;
	registrationOpensAt?: string;
	registrationClosedByAdmin?: boolean;
	capacity?: number;
	seatsTaken?: number;
	startAt: string;
	endAt: string;
}

interface RegistrationState {
	capacityFull: boolean;
	notYetOpen: boolean;
	closedByAdmin: boolean;
	isOpen: boolean;
}

export function getRegistrationState(
	event: RegistrationInput
): RegistrationState {
	const capacityFull =
		event.capacity !== undefined &&
		(event.seatsTaken ?? 0) >= event.capacity;
	const notYetOpen =
		!!event.registrationOpensAt &&
		Date.now() < new Date(event.registrationOpensAt).getTime();
	const closedByAdmin = !!event.registrationClosedByAdmin;
	const isEnded =
		getEventStatus(event.startAt, event.endAt) === EventStatus.PAST;
	const isOpen =
		event.hasRegistration &&
		!closedByAdmin &&
		!capacityFull &&
		!notYetOpen &&
		!isEnded;

	return { capacityFull, notYetOpen, closedByAdmin, isOpen };
}

export function isRegistrationOpen(event: RegistrationInput): boolean {
	return getRegistrationState(event).isOpen;
}
