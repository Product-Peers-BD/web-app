import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import type { CaseStudyContestRef } from '@/types/case-study';

import { CaseStudyDetailSection } from './case-study-detail-section';

interface CaseStudyAssociatedContestsProps {
	contests: CaseStudyContestRef[];
}

export function CaseStudyAssociatedContests({
	contests
}: CaseStudyAssociatedContestsProps) {
	if (contests.length === 0) return null;

	return (
		<CaseStudyDetailSection title="Associated Contests">
			<div className="grid gap-3 sm:grid-cols-2">
				{contests.map((contest) => (
					<Link
						key={contest.slug}
						href={`/contests/${contest.slug}`}
						className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-3 hover:border-primary/40"
					>
						<div className="min-w-0">
							<p className="truncate font-heading text-sm font-semibold text-foreground group-hover:text-primary">
								{contest.title}
							</p>
							<p className="font-mono text-[11px] text-muted-foreground uppercase">
								{contest.dateLabel}
							</p>
						</div>
						<ArrowRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
					</Link>
				))}
			</div>
		</CaseStudyDetailSection>
	);
}
