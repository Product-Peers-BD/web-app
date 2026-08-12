'use client';

import { useEffect, useState } from 'react';

interface ReadingProgressBarProps {
	targetId: string;
}

export function ReadingProgressBar({ targetId }: ReadingProgressBarProps) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		function handleScroll() {
			const target = document.getElementById(targetId);
			if (!target) return;

			const rect = target.getBoundingClientRect();
			const scrollableHeight = rect.height - window.innerHeight;
			if (scrollableHeight <= 0) {
				setProgress(rect.top <= 0 ? 100 : 0);
				return;
			}

			const scrolled = -rect.top;
			const pct = Math.min(
				100,
				Math.max(0, (scrolled / scrollableHeight) * 100)
			);
			setProgress(pct);
		}

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, [targetId]);

	return (
		<div
			className="fixed inset-x-0 top-16 z-30 h-0.5 bg-transparent"
			role="progressbar"
			aria-label="Reading progress"
			aria-valuenow={Math.round(progress)}
			aria-valuemin={0}
			aria-valuemax={100}
		>
			<div
				className="h-full bg-primary motion-safe:transition-[width] motion-safe:duration-150 motion-safe:ease-linear"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
