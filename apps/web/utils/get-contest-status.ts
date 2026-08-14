import { ContestStatus } from '@/enums/contest';

export function getContestStatus(
	startAt: string,
	endAt: string
): ContestStatus {
	const now = Date.now();
	const start = new Date(startAt).getTime();
	const end = new Date(endAt).getTime();

	if (now < start) return ContestStatus.UPCOMING;
	if (now > end) return ContestStatus.PAST;
	return ContestStatus.RUNNING;
}
