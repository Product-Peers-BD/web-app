import { featuredSponsors } from '@/constants/home';

export function SponsorsStrip() {
	return (
		<section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
			<p className="text-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
				Backed by teams building in Bangladesh
			</p>

			<div className="group relative mt-6 overflow-hidden border-y border-border mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-5">
				<div className="flex w-max motion-safe:animate-marquee motion-safe:group-hover:paused">
					{[...featuredSponsors, ...featuredSponsors].map(
						(sponsor, index) => (
							<span
								key={`${sponsor.name}-${index}`}
								className="px-8 font-heading text-lg font-semibold whitespace-nowrap text-muted-foreground"
							>
								{sponsor.name}
							</span>
						)
					)}
				</div>
			</div>
		</section>
	);
}
