import { ArrowUpRight } from 'lucide-react';

import { SponsorSeal } from '@/components/features/sponsors/sponsor-seal';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { featuredSponsors } from '@/constants/home';

export function FeaturedSponsors() {
	return (
		<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{featuredSponsors.map((sponsor, index) => (
				<Reveal
					key={sponsor.slug}
					delay={index * 60}
					className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-card p-6"
				>
					<div className="flex items-start justify-between gap-3">
						<SponsorSeal
							name={sponsor.name}
							featured
						/>
						<span className="mt-1 font-mono text-[11px] tracking-[0.15em] text-primary/70 uppercase">
							Founding Partner
						</span>
					</div>
					<div>
						<h3 className="font-heading text-lg font-semibold text-foreground">
							{sponsor.name}
						</h3>
						{sponsor.description ? (
							<p className="mt-1.5 text-sm text-muted-foreground">
								{sponsor.description}
							</p>
						) : null}
					</div>
					{sponsor.websiteUrl ? (
						<a
							href={sponsor.websiteUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="group mt-auto inline-flex items-center gap-1.5 font-mono text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
						>
							Visit website
							<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</a>
					) : null}
				</Reveal>
			))}
		</div>
	);
}
