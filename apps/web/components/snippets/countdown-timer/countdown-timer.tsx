'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
	target: string;
	className?: string;
}

interface TimeParts {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

function getTimeParts(target: string): TimeParts {
	const diff = Math.max(0, new Date(target).getTime() - Date.now());
	const totalSeconds = Math.floor(diff / 1000);

	return {
		days: Math.floor(totalSeconds / 86_400),
		hours: Math.floor((totalSeconds % 86_400) / 3_600),
		minutes: Math.floor((totalSeconds % 3_600) / 60),
		seconds: totalSeconds % 60
	};
}

function pad(value: number): string {
	return value.toString().padStart(2, '0');
}

export function CountdownTimer({ target, className }: CountdownTimerProps) {
	const [parts, setParts] = useState<TimeParts>(() => getTimeParts(target));

	useEffect(() => {
		const interval = setInterval(
			() => setParts(getTimeParts(target)),
			1000
		);
		return () => clearInterval(interval);
	}, [target]);

	return (
		<div className={className}>
			<div className="flex items-baseline gap-2 font-mono text-2xl font-semibold text-foreground tabular-nums">
				<span>{pad(parts.days)}</span>
				<span className="text-muted-foreground">:</span>
				<span>{pad(parts.hours)}</span>
				<span className="text-muted-foreground">:</span>
				<span>{pad(parts.minutes)}</span>
				<span className="text-muted-foreground">:</span>
				<span>{pad(parts.seconds)}</span>
			</div>
			<div className="mt-1 flex gap-2 font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
				<span className="w-8 text-center">Days</span>
				<span className="w-2" />
				<span className="w-8 text-center">Hrs</span>
				<span className="w-2" />
				<span className="w-8 text-center">Min</span>
				<span className="w-2" />
				<span className="w-8 text-center">Sec</span>
			</div>
		</div>
	);
}
