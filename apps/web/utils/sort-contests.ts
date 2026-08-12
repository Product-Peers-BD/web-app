import { ContestStatus } from '@/enums/contest';
import type { ContestListItem, ContestSortOption } from '@/types/contest';
import { getContestStatus } from '@/utils/get-contest-status';

const statusRank: Record<ContestStatus, number> = {
	[ContestStatus.RUNNING]: 0,
	[ContestStatus.UPCOMING]: 1,
	[ContestStatus.PAST]: 2
};

export function sortContests<T extends ContestListItem>(
	items: T[],
	sortOption: ContestSortOption
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
		const statusA = getContestStatus(a.startAt, a.endAt);
		const statusB = getContestStatus(b.startAt, b.endAt);
		if (statusA !== statusB)
			return statusRank[statusA] - statusRank[statusB];

		if (statusA === ContestStatus.PAST) {
			const resultA = new Date(a.resultPublishedAt ?? a.endAt).getTime();
			const resultB = new Date(b.resultPublishedAt ?? b.endAt).getTime();
			return resultB - resultA;
		}

		const startA = new Date(a.startAt).getTime();
		const startB = new Date(b.startAt).getTime();
		return startA - startB;
	});
}
