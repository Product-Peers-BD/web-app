'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpValueProps {
	value: string;
	className?: string;
}

function parseTarget(value: string): number | null {
	const numeric = Number(value.replace(/[^0-9.-]/g, ''));
	return Number.isFinite(numeric) ? numeric : null;
}

export function CountUpValue({ value, className }: CountUpValueProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const [display, setDisplay] = useState(value);

	useEffect(() => {
		const node = ref.current;
		const target = parseTarget(value);
		if (!node || target === null) return;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return;
				observer.unobserve(node);

				const duration = 900;
				const start = performance.now();

				const tick = (now: number) => {
					const progress = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 3);
					setDisplay(
						new Intl.NumberFormat('en-US').format(
							Math.round(target * eased)
						)
					);
					if (progress < 1) {
						requestAnimationFrame(tick);
					} else {
						setDisplay(value);
					}
				};

				requestAnimationFrame(tick);
			},
			{ threshold: 0.4 }
		);
		observer.observe(node);

		return () => observer.disconnect();
	}, [value]);

	return (
		<span
			ref={ref}
			className={className}
		>
			{display}
		</span>
	);
}
