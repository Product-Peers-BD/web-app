import { EventStatus } from '@/enums/event';
import type { EventListItem, EventSortOption } from '@/types/event';
import { getEventStatus } from '@/utils/get-event-status';

const statusRank: Record<EventStatus, number> = {
	[EventStatus.ONGOING]: 0,
	[EventStatus.UPCOMING]: 1,
	[EventStatus.PAST]: 2
};

export function sortEvents<T extends EventListItem>(
	items: T[],
	sortOption: EventSortOption
): T[] {
	const sorted = [...items];

	if (sortOption === 'title-asc') {
		return sorted.sort((a, b) => a.title.localeCompare(b.title));
	}
	if (sortOption === 'title-desc') {
		return sorted.sort((a, b) => b.title.localeCompare(a.title));
	}
	if (sortOption === 'date-asc') {
		return sorted.sort(
			(a, b) =>
				new Date(a.startAt).getTime() - new Date(b.startAt).getTime()
		);
	}
	if (sortOption === 'date-desc') {
		return sorted.sort(
			(a, b) =>
				new Date(b.startAt).getTime() - new Date(a.startAt).getTime()
		);
	}

	return sorted.sort((a, b) => {
		const statusA = getEventStatus(a.startAt, a.endAt);
		const statusB = getEventStatus(b.startAt, b.endAt);
		if (statusA !== statusB)
			return statusRank[statusA] - statusRank[statusB];

		const startA = new Date(a.startAt).getTime();
		const startB = new Date(b.startAt).getTime();
		return statusA === EventStatus.PAST ? startB - startA : startA - startB;
	});
}
