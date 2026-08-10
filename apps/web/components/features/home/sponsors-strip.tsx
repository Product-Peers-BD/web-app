import { featuredSponsors } from '@/constants/home';

export function SponsorsStrip() {
	return (
		<section className="border-y border-border bg-secondary/40">
			<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<p className="text-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
					Backed by teams building in Bangladesh
				</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
					{featuredSponsors.map((sponsor) => (
						<span
							key={sponsor.name}
							className="font-heading text-xl font-semibold text-muted-foreground/70 grayscale transition-all hover:text-foreground hover:grayscale-0"
						>
							{sponsor.name}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
