import { CountUpValue } from '@/components/snippets/count-up-value/count-up-value';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { heroStats } from '@/constants/home';

export function StatsBarVariantC() {
	const [featured, ...rest] = heroStats;

	return (
		<section>
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Community"
					title="Growing Every Week"
					description="Product professionals building, learning, and hiring together across Bangladesh."
				/>

				<Reveal className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
					{featured && (
						<div className="shrink-0">
							<div className="font-mono text-6xl font-semibold tracking-tight text-foreground tabular-nums sm:text-7xl lg:text-8xl">
								<CountUpValue value={featured.value} />
							</div>
							<div className="mt-4 h-0.5 w-10 bg-accent" />
							<div className="mt-3 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
								<span className="relative flex size-1.5">
									<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
									<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
								</span>
								{featured.label}
							</div>
						</div>
					)}

					<div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4 lg:border-l lg:border-border lg:pl-16">
						{rest.map((stat) => (
							<div
								key={stat.label}
								className="flex flex-col gap-1.5"
							>
								<span className="font-mono text-3xl font-medium text-foreground tabular-nums sm:text-4xl">
									<CountUpValue value={stat.value} />
								</span>
								<span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
