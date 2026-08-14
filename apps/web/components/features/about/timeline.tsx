import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { timelineMilestones } from '@/constants/about';
import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

interface TimelineProps {
	orientation?: 'horizontal' | 'vertical';
}

// Alternating stem lengths so the path reads as a walked journey, not a ruled grid.
const HORIZONTAL_STEM_OFFSETS = ['pt-10', 'pt-18'] as const;

export function Timeline({ orientation = 'horizontal' }: TimelineProps) {
	const isHorizontal = orientation === 'horizontal';
	const lastIndex = timelineMilestones.length - 1;

	return (
		<section
			className={cn(
				'mx-auto px-4 py-20 sm:px-6 lg:px-8',
				isHorizontal ? 'max-w-6xl' : 'max-w-4xl'
			)}
		>
			<SectionHeader
				eyebrow="The story so far"
				title="Building in public, one milestone at a time"
				description="Admin-ordered, not auto-sorted — this is the narrative in the order it actually happened."
			/>

			{isHorizontal ? (
				<div className="-mx-4 mt-16 flex items-start gap-10 overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] px-4 pb-6 [scrollbar-width:none] sm:-mx-6 sm:gap-12 sm:px-6 [&::-webkit-scrollbar]:hidden">
					{timelineMilestones.map((milestone, index) => {
						const isLast = index === lastIndex;

						return (
							<Reveal
								key={milestone.id}
								delay={index * 90}
								className={cn(
									'group relative w-56 shrink-0 sm:w-64',
									HORIZONTAL_STEM_OFFSETS[index % 2]
								)}
							>
								<span
									aria-hidden
									className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-border group-data-[revealed=true]/reveal:scale-x-100 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-power-on"
								/>
								{isLast ? (
									<span
										aria-hidden
										className="absolute -top-[5px] left-0 size-2.5 rounded-full bg-accent/70 motion-safe:animate-ping"
									/>
								) : null}
								<span
									aria-hidden
									className={cn(
										'absolute -top-[5px] left-0 size-2.5 rounded-full ring-4 ring-background motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-125',
										isLast ? 'bg-accent' : 'bg-primary'
									)}
								/>

								<div className="rounded-2xl border border-border bg-card p-5 motion-safe:transition-all motion-safe:duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:border-primary/40 motion-safe:group-hover:shadow-md">
									<div className="flex items-center justify-between">
										<span
											className={cn(
												'flex size-10 items-center justify-center rounded-full border motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105',
												isLast
													? 'border-accent/30 bg-accent/10 text-accent'
													: 'border-primary/30 bg-primary/10 text-primary'
											)}
										>
											<milestone.icon
												aria-hidden
												strokeWidth={1.75}
												className="size-5"
											/>
										</span>
										{isLast ? (
											<Badge className="h-4.5 rounded-sm bg-accent px-1 text-[9px] tracking-wide text-accent-foreground uppercase">
												Now
											</Badge>
										) : null}
									</div>
									<div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
										<span className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
											{milestone.period}
										</span>
										<span className="font-mono text-[11px] text-muted-foreground">
											#
											{String(index + 1).padStart(2, '0')}
										</span>
									</div>
									<h3 className="mt-2 font-heading text-base font-semibold text-foreground">
										{milestone.title}
									</h3>
									<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
										{milestone.description}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			) : (
				<div className="relative mt-14">
					<div
						aria-hidden
						className="absolute top-1 bottom-1 left-3 w-px bg-border"
					/>

					<div className="flex flex-col gap-8">
						{timelineMilestones.map((milestone, index) => {
							const isLast = index === lastIndex;

							return (
								<Reveal
									key={milestone.id}
									delay={index * 70}
									className="group relative pl-10"
								>
									{isLast ? (
										<span
											aria-hidden
											className="absolute top-1 left-3 size-2.5 -translate-x-1/2 rounded-full bg-accent/70 motion-safe:animate-ping"
										/>
									) : null}
									<span
										aria-hidden
										className={cn(
											'absolute top-1 left-3 size-2.5 -translate-x-1/2 rounded-full ring-4 ring-background motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-125',
											isLast ? 'bg-accent' : 'bg-primary'
										)}
									/>

									<div className="rounded-2xl border border-border bg-card p-5 motion-safe:transition-all motion-safe:duration-300 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:border-primary/40 motion-safe:group-hover:shadow-md">
										<div className="flex items-center justify-between">
											<span
												className={cn(
													'flex size-10 items-center justify-center rounded-full border motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105',
													isLast
														? 'border-accent/30 bg-accent/10 text-accent'
														: 'border-primary/30 bg-primary/10 text-primary'
												)}
											>
												<milestone.icon
													aria-hidden
													strokeWidth={1.75}
													className="size-5"
												/>
											</span>
											{isLast ? (
												<Badge className="h-4.5 rounded-sm bg-accent px-1 text-[9px] tracking-wide text-accent-foreground uppercase">
													Now
												</Badge>
											) : null}
										</div>
										<div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
											<span className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
												{milestone.period}
											</span>
											<span className="font-mono text-[11px] text-muted-foreground">
												#
												{String(index + 1).padStart(
													2,
													'0'
												)}
											</span>
										</div>
										<h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
											{milestone.title}
										</h3>
										<p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
											{milestone.description}
										</p>
									</div>
								</Reveal>
							);
						})}
					</div>
				</div>
			)}
		</section>
	);
}
