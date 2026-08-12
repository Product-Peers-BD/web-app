import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type { CaseStudyDetail } from '@/types/case-study';
import { Badge } from '@workspace/ui/components/badge';

interface CaseStudyDetailHeaderProps {
	caseStudy: CaseStudyDetail;
}

export function CaseStudyDetailHeader({
	caseStudy
}: CaseStudyDetailHeaderProps) {
	return (
		<section className="border-b border-border bg-secondary/30">
			<div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
				<Reveal trigger="mount">
					<Link
						href="/case-studies"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<ArrowLeft className="size-3.5" />
						All case studies
					</Link>

					<div className="relative mt-5">
						<MediaPlaceholder className="aspect-21/9 w-full" />
						<Badge
							variant="outline"
							className="absolute top-4 right-4 rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
						>
							{caseStudy.category}
						</Badge>
					</div>
				</Reveal>

				<Reveal
					delay={90}
					className="py-8"
				>
					<p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
						{caseStudy.clientName}
					</p>
					<h1 className="mt-2 font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
						{caseStudy.title}
					</h1>
				</Reveal>
			</div>
		</section>
	);
}
