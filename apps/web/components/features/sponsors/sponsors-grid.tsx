import { SponsorSeal } from '@/components/features/sponsors/sponsor-seal';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { sponsors } from '@/constants/home';

export function SponsorsGrid() {
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{sponsors.map((sponsor, index) => {
				const tile = (
					<>
						<SponsorSeal name={sponsor.name} />
						<span className="text-sm font-medium text-foreground">
							{sponsor.name}
						</span>
					</>
				);
				const tileClassName =
					'group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/40 hover:bg-secondary/20';

				return (
					<Reveal
						key={sponsor.slug}
						delay={(index % 5) * 40}
					>
						{sponsor.websiteUrl ? (
							<a
								href={sponsor.websiteUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={tileClassName}
							>
								{tile}
							</a>
						) : (
							<div className={tileClassName}>{tile}</div>
						)}
					</Reveal>
				);
			})}
		</div>
	);
}
