import { heroStats } from '@/constants/home';

export function StatsBar() {
	return (
		<section className="border-y border-border bg-card">
			<div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6 lg:px-8">
				<dl className="flex min-w-max divide-x divide-border">
					{heroStats.map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col gap-1 px-6 py-5 first:pl-0 last:pr-0"
						>
							<dt className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
								{stat.label}
							</dt>
							<dd className="font-mono text-2xl font-medium text-foreground tabular-nums">
								{stat.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
