export function getLaunchDate(): Date | null {
	const raw = process.env.NEXT_PUBLIC_LAUNCH_DATE;

	if (!raw) {
		return null;
	}

	const date = new Date(raw);

	if (Number.isNaN(date.getTime()) || date.getTime() <= Date.now()) {
		return null;
	}

	return date;
}
