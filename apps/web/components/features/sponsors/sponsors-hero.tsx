import Link from 'next/link';

import { Reveal } from '@/components/snippets/reveal/reveal';
import { sponsors } from '@/constants/home';
import { Button } from '@workspace/ui/components/button';

export function SponsorsHero() {
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
						{sponsors.length} companies backing the community
					</div>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={90}
					className="mt-6"
				>
					<h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl">
						The companies backing Bangladesh&apos;s product
						community.
					</h1>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={180}
					className="mt-8"
				>
					<p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
						From founding backers to teams that showed up for a
						single event — every company here chose to put their
						name behind the people building product in Bangladesh.
					</p>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={270}
					className="mt-8"
				>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="h-11 px-6 text-base"
					>
						<Link href="/contact-us?type=sponsorship">
							Become a Sponsor
						</Link>
					</Button>
				</Reveal>
			</div>
		</section>
	);
}
