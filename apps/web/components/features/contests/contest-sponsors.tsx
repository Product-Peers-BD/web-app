import type { EventSponsorTier } from '@/types/event';
import { sponsorTierLabels } from '@/utils/labels';

import { ContestDetailSection } from './contest-detail-section';

interface ContestSponsorsProps {
	sponsorTiers: EventSponsorTier[];
}

export function ContestSponsors({ sponsorTiers }: ContestSponsorsProps) {
	if (sponsorTiers.length === 0) return null;

	return (
		<ContestDetailSection title="Sponsors">
			<div className="flex flex-col gap-5">
				{sponsorTiers.map((group) => (
					<div key={group.tier}>
						<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
							{sponsorTierLabels[group.tier]}
						</p>
						<div className="mt-2 flex flex-wrap gap-3">
							{group.sponsors.map((sponsor) => (
								<span
									key={sponsor.name}
									className="rounded-lg border border-border bg-card px-4 py-2.5 font-heading text-sm font-semibold text-foreground"
								>
									{sponsor.name}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</ContestDetailSection>
	);
}
