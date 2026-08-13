import { Reveal } from '@/components/snippets/reveal/reveal';
import { aboutMission } from '@/constants/about';

export function AboutHero() {
	return (
		<section className="relative overflow-hidden bg-background">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)] bg-size-[24px_24px]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -top-48 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
			/>

			<div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
				<Reveal trigger="mount">
					<div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs tracking-[0.15em] text-foreground uppercase">
						<span className="inline-flex size-2 rounded-full bg-primary" />
						{aboutMission.foundedLabel} &middot;{' '}
						{aboutMission.locationLabel}
					</div>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={90}
					className="mt-6"
				>
					<h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl">
						{aboutMission.headline}
					</h1>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={180}
					className="mt-8 flex flex-col gap-4"
				>
					{aboutMission.paragraphs.map((paragraph) => (
						<p
							key={paragraph}
							className="text-base leading-relaxed text-muted-foreground sm:text-lg"
						>
							{paragraph}
						</p>
					))}
				</Reveal>
			</div>
		</section>
	);
}
