export function formatEventDate(isoDate: string): string {
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		timeZone: 'Asia/Dhaka'
	}).format(new Date(isoDate));
}

export function formatEventDateLong(isoDate: string): string {
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'Asia/Dhaka'
	}).format(new Date(isoDate));
}

export function formatEventTime(isoDate: string): string {
	return new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		timeZone: 'Asia/Dhaka'
	}).format(new Date(isoDate));
}
