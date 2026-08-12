import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import type { CaseStudyListItem } from '@/types/case-study';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

interface CaseStudyCardProps {
	caseStudy: CaseStudyListItem;
	className?: string;
}

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
	const visibleIndustries = caseStudy.industries.slice(0, 2);
	const extraIndustryCount =
		caseStudy.industries.length - visibleIndustries.length;

	return (
		<article
			className={cn(
				'flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card',
				className
			)}
		>
			<div className="relative">
				<MediaPlaceholder className="aspect-video w-full rounded-none" />
				<div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1.5">
					{visibleIndustries.map((industry) => (
						<Badge
							key={industry}
							variant="outline"
							className="rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
						>
							{industry}
						</Badge>
					))}
					{extraIndustryCount > 0 ? (
						<Badge
							variant="outline"
							className="rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
						>
							+{extraIndustryCount}
						</Badge>
					) : null}
				</div>
			</div>

			<div className="flex flex-1 flex-col p-4">
				<p className="font-mono text-[11px] tracking-[0.12em] text-primary uppercase">
					{caseStudy.clientName}
				</p>
				<h3 className="mt-1.5 line-clamp-2 min-h-11.5 font-heading text-lg leading-snug font-semibold text-foreground">
					{caseStudy.title}
				</h3>

				<div className="mt-3 flex items-center gap-2">
					<Avatar size="sm">
						<AvatarFallback className="bg-primary/10 font-mono text-[10px] text-primary">
							{getInitials(caseStudy.author.name)}
						</AvatarFallback>
					</Avatar>
					<p className="min-w-0 truncate text-xs text-muted-foreground">
						{caseStudy.author.name}
					</p>
				</div>

				<Button
					asChild
					variant="outline"
					size="sm"
					className="mt-4 w-fit"
				>
					<Link href={`/case-studies/${caseStudy.slug}`}>
						Read Case Study
						<ArrowRight className="size-3.5" />
					</Link>
				</Button>
			</div>
		</article>
	);
}
