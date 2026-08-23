'use client';

import { useEffect, useState } from 'react';

interface Remaining {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

function getRemaining(target: string): Remaining | null {
	const diff = new Date(target).getTime() - Date.now();

	if (diff <= 0) {
		return null;
	}

	const totalSeconds = Math.floor(diff / 1000);

	return {
		days: Math.floor(totalSeconds / 86400),
		hours: Math.floor((totalSeconds % 86400) / 3600),
		minutes: Math.floor((totalSeconds % 3600) / 60),
		seconds: totalSeconds % 60
	};
}

function pad(value: number) {
	return String(value).padStart(2, '0');
}

interface CountdownValueProps {
	target: string;
}

export function CountdownValue({ target }: CountdownValueProps) {
	// undefined = not yet mounted (server-rendered markup and the client's first
	// hydration pass must match exactly, so the real, time-dependent value is only
	// computed once mounted, in the effect below, to avoid a hydration mismatch).
	// null = mounted and the target has already passed.
	const [remaining, setRemaining] = useState<Remaining | null | undefined>(
		undefined
	);

	useEffect(() => {
		setRemaining(getRemaining(target));
		const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
		return () => clearInterval(id);
	}, [target]);

	if (remaining === undefined) {
		return <span className="tabular-nums">--d --h --m --s</span>;
	}

	if (remaining === null) {
		return <span>Launching now</span>;
	}

	return (
		<span className="tabular-nums">
			{pad(remaining.days)}d {pad(remaining.hours)}h{' '}
			{pad(remaining.minutes)}m {pad(remaining.seconds)}s
		</span>
	);
}
