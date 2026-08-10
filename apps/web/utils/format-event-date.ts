export function formatEventDate(isoDate: string): string {
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		timeZone: 'Asia/Dhaka'
	}).format(new Date(isoDate));
}
