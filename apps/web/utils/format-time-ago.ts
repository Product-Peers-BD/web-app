const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

export function formatTimeAgo(isoDate: string): string {
	const diffMs = Date.now() - new Date(isoDate).getTime();

	if (diffMs < MINUTE_MS) return 'Just now';
	if (diffMs < HOUR_MS) return `${Math.floor(diffMs / MINUTE_MS)}m ago`;
	if (diffMs < DAY_MS) return `${Math.floor(diffMs / HOUR_MS)}h ago`;
	return `${Math.floor(diffMs / DAY_MS)}d ago`;
}
