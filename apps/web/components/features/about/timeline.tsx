import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { timelineMilestones } from '@/constants/about';

export function Timeline() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
			<SectionHeader
				eyebrow="The story so far"
				title="Building in public, one milestone at a time"
				description="Admin-ordered, not auto-sorted — this is the narrative in the order it actually happened."
			/>

			<div className="relative mt-14">
				<div
					aria-hidden
					className="absolute top-1 bottom-1 left-3 w-px bg-border"
				/>

				<div className="flex flex-col gap-10">
					{timelineMilestones.map((milestone, index) => (
						<Reveal
							key={milestone.id}
							delay={index * 70}
							className="relative pl-10"
						>
							<span
								aria-hidden
								className="absolute top-1 left-3 size-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background"
							/>
							<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<span className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
									{milestone.period}
								</span>
								<span className="font-mono text-[11px] text-muted-foreground">
									#{String(index + 1).padStart(2, '0')}
								</span>
							</div>
							<h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
								{milestone.title}
							</h3>
							<p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
								{milestone.description}
							</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
