import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { ContestStatus } from '@/enums/contest';
import type { ContestDetail } from '@/types/contest';
import { eventFormatLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { ContestStatusBadge } from './contest-status-badge';

interface ContestDetailHeaderProps {
	contest: ContestDetail;
	status: ContestStatus;
}

export function ContestDetailHeader({
	contest,
	status
}: ContestDetailHeaderProps) {
	return (
		<section className="border-b border-border bg-secondary/30">
			<div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
				<Reveal trigger="mount">
					<Link
						href="/contests"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<ArrowLeft className="size-3.5" />
						All contests
					</Link>

					<div className="relative mt-5">
						<MediaPlaceholder
							className={cn(
								'aspect-21/9 w-full',
								status === ContestStatus.PAST &&
									'opacity-70 grayscale'
							)}
						/>
						<div className="absolute top-4 left-4">
							<ContestStatusBadge status={status} />
						</div>
						<Badge
							variant="outline"
							className="absolute top-4 right-4 rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
						>
							{eventFormatLabels[contest.format]}
						</Badge>
					</div>
				</Reveal>

				<Reveal
					delay={90}
					className="py-8"
				>
					<p className="font-mono text-[11px] tracking-[0.15em] text-primary uppercase">
						{contest.isPremium && contest.priceBdt
							? `৳${contest.priceBdt.toLocaleString()} entry · Team contest`
							: 'Free entry · Team contest'}
					</p>

					<h1 className="mt-3 font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
						{contest.title}
					</h1>
				</Reveal>
			</div>
		</section>
	);
}
