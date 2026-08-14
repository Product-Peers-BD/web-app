import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type { CaseStudyDetail } from '@/types/case-study';

interface RelatedCaseStudiesSidebarProps {
	caseStudies: CaseStudyDetail[];
}

export function RelatedCaseStudiesSidebar({
	caseStudies
}: RelatedCaseStudiesSidebarProps) {
	if (caseStudies.length === 0) return null;

	return (
		<Reveal className="rounded-xl border border-border bg-card p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				More proof of work
			</p>
			<h2 className="mt-1 font-heading text-lg font-semibold text-foreground">
				Related Case Studies
			</h2>

			<div className="mt-4 flex flex-col divide-y divide-border">
				{caseStudies.map((caseStudy) => (
					<Link
						key={caseStudy.slug}
						href={`/case-studies/${caseStudy.slug}`}
						className="group flex gap-3 py-4 first:pt-0 last:pb-0"
					>
						<MediaPlaceholder className="aspect-4/3 w-20 shrink-0" />
						<div className="min-w-0">
							<p className="font-mono text-[10px] tracking-wide text-primary uppercase">
								{caseStudy.clientName}
							</p>
							<h3 className="mt-1 line-clamp-2 font-heading text-sm leading-snug font-semibold text-foreground group-hover:text-primary">
								{caseStudy.title}
							</h3>
							<p className="mt-1 truncate text-xs text-muted-foreground">
								{caseStudy.author.name}
							</p>
						</div>
					</Link>
				))}
			</div>
		</Reveal>
	);
}
