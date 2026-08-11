import Link from 'next/link';

import { Reveal } from '@/components/snippets/reveal/reveal';
import { Button } from '@workspace/ui/components/button';

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-background">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)] [background-size:24px_24px]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute top-[-12rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
			/>

			<div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
				<Reveal trigger="mount">
					<div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs tracking-[0.15em] text-foreground uppercase">
						<span className="relative flex size-2">
							<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
							<span className="relative inline-flex size-2 rounded-full bg-primary" />
						</span>
						Live — Bangladesh&apos;s product community
					</div>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={90}
					className="mt-6"
				>
					<h1 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl">
						Where product people
						<br />
						in Bangladesh get sharper.
					</h1>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={180}
					className="mt-6"
				>
					<p className="max-w-xl text-lg text-muted-foreground">
						Events, mentors, contests, and real case studies — run
						by the community, not a course catalog.
					</p>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={270}
					className="mt-9"
				>
					<div className="flex flex-col gap-3 sm:flex-row">
						<Button
							asChild
							variant="accent"
							size="lg"
							className="h-11 px-6 text-base"
						>
							<Link href="/join-community">Join Community</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="h-11 px-6 text-base"
						>
							<Link href="/events">Explore Events</Link>
						</Button>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
