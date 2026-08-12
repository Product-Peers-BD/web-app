const TIME_ZONE = 'Asia/Dhaka';

export function formatSlotTime(isoDate: string): string {
	return new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		timeZone: TIME_ZONE
	}).format(new Date(isoDate));
}

export function formatSlotDayLabel(isoDate: string): string {
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		timeZone: TIME_ZONE
	}).format(new Date(isoDate));
}

export function formatSlotCompact(isoDate: string): string {
	const weekday = new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		timeZone: TIME_ZONE
	}).format(new Date(isoDate));
	return `${weekday} ${formatSlotTime(isoDate)}`;
}
