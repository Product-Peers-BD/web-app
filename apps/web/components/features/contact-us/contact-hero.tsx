import { Reveal } from '@/components/snippets/reveal/reveal';

export function ContactHero() {
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

			<div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pt-20 pb-14 text-center sm:px-6 sm:pt-28 sm:pb-16 lg:px-8">
				<Reveal trigger="mount">
					<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
						Get in touch
					</p>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={90}
					className="mt-4"
				>
					<h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl">
						Tell us what&apos;s on your mind.
					</h1>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={180}
					className="mt-6"
				>
					<p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
						A question about an event, a mentor, or your account —
						or a company looking to back the community. Pick a lane
						below and it lands with the right person.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
