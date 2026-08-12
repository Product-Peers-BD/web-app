import { ArrowUpRight } from 'lucide-react';

import { Reveal } from '@/components/snippets/reveal/reveal';
import type { CaseStudyDetail } from '@/types/case-study';
import { Badge } from '@workspace/ui/components/badge';

interface CaseStudyFileSidebarProps {
	caseStudy: CaseStudyDetail;
}

function FileRow({
	label,
	children
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="py-4 first:pt-0 last:pb-0">
			<dt className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				{label}
			</dt>
			<dd className="mt-1.5">{children}</dd>
		</div>
	);
}

export function CaseStudyFileSidebar({ caseStudy }: CaseStudyFileSidebarProps) {
	return (
		<Reveal className="rounded-xl border border-border bg-card p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Case File
			</p>
			<h2 className="mt-1 font-heading text-lg font-semibold text-foreground">
				{caseStudy.clientName}
			</h2>

			<dl className="mt-4 flex flex-col divide-y divide-border">
				<FileRow label="Industry">
					<div className="flex flex-wrap gap-1.5">
						{caseStudy.industries.map((industry) => (
							<Badge
								key={industry}
								variant="outline"
								className="rounded-sm border-border text-[11px] font-normal text-muted-foreground"
							>
								{industry}
							</Badge>
						))}
					</div>
				</FileRow>

				{caseStudy.problem ? (
					<FileRow label="The problem">
						<p className="text-sm text-foreground/90">
							{caseStudy.problem}
						</p>
					</FileRow>
				) : null}

				{caseStudy.tools.length > 0 ? (
					<FileRow label="Tools & stack">
						<div className="flex flex-wrap gap-1.5">
							{caseStudy.tools.map((tool) => (
								<span
									key={tool}
									className="rounded-sm bg-secondary px-1.5 py-0.5 font-mono text-[11px] text-secondary-foreground"
								>
									{tool}
								</span>
							))}
						</div>
					</FileRow>
				) : null}

				{caseStudy.externalLink ? (
					<FileRow label="External link">
						<a
							href={caseStudy.externalLink}
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
						>
							{caseStudy.externalLink.replace(/^https?:\/\//, '')}
							<ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</a>
					</FileRow>
				) : null}
			</dl>
		</Reveal>
	);
}
