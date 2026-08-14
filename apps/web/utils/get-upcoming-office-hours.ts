import type {
	MentorListItem,
	MentorSlot,
	OfficeHoursEntry
} from '@/types/mentor';

export function getNextSlotForMentor(
	mentor: MentorListItem
): MentorSlot | undefined {
	const now = Date.now();
	return [...mentor.slots]
		.filter((slot) => new Date(slot.startAt).getTime() > now)
		.sort(
			(a, b) =>
				new Date(a.startAt).getTime() - new Date(b.startAt).getTime()
		)[0];
}

export function getUpcomingOfficeHours(
	mentors: MentorListItem[],
	limit: number
): OfficeHoursEntry[] {
	const nextSlotPerMentor: OfficeHoursEntry[] = mentors.flatMap((mentor) => {
		const nextSlot = getNextSlotForMentor(mentor);
		return nextSlot ? [{ mentor, slot: nextSlot }] : [];
	});

	return nextSlotPerMentor
		.sort(
			(a, b) =>
				new Date(a.slot.startAt).getTime() -
				new Date(b.slot.startAt).getTime()
		)
		.slice(0, limit);
}
