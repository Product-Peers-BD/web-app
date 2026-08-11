import { CountUpValue } from '@/components/snippets/count-up-value/count-up-value';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { heroStats } from '@/constants/home';

export function StatsBar() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
			<Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_100%_at_100%_0%,black_0%,transparent_70%)] [background-size:20px_20px]"
				/>

				<div className="relative flex items-center gap-2 border-b border-border px-6 py-3.5">
					<span className="relative flex size-1.5">
						<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
						<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
					</span>
					<span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
						Live numbers
					</span>
				</div>

				<dl className="relative grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
					{heroStats.map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col gap-1 bg-card px-4 py-3 sm:px-6 sm:py-5"
						>
							<dt className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground uppercase sm:text-[11px] sm:tracking-[0.12em]">
								{stat.label}
							</dt>
							<dd className="font-mono text-lg font-medium text-foreground tabular-nums sm:text-2xl">
								<CountUpValue value={stat.value} />
							</dd>
						</div>
					))}
				</dl>
			</Reveal>
		</section>
	);
}
