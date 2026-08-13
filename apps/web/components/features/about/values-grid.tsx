import { Reveal } from '@/components/snippets/reveal/reveal';
import { valuePillars } from '@/constants/about';

export function ValuesGrid() {
	return (
		<div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
			{valuePillars.map((pillar, index) => {
				const Icon = pillar.icon;

				return (
					<Reveal
						key={pillar.title}
						delay={index * 60}
						className="flex flex-col gap-4 bg-card p-6 sm:p-8"
					>
						<div className="flex items-center justify-between">
							<span className="flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
								<Icon
									aria-hidden
									strokeWidth={1.75}
									className="size-5"
								/>
							</span>
							<span className="font-mono text-xs text-muted-foreground">
								&sect;{String(index + 1).padStart(2, '0')}
							</span>
						</div>
						<div>
							<h3 className="font-heading text-base font-semibold text-foreground">
								{pillar.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{pillar.description}
							</p>
						</div>
					</Reveal>
				);
			})}
		</div>
	);
}
