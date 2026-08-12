import { ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { ContestStatus } from '@/enums/contest';
import type { ContestListItem } from '@/types/contest';
import { formatEventDate } from '@/utils/format-event-date';
import { getContestStatus } from '@/utils/get-contest-status';
import { isRegistrationOpen } from '@/utils/get-event-status';
import { getInitials } from '@/utils/get-initials';
import { eventFormatLabels, winnerTierLabels } from '@/utils/labels';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { ContestStatusBadge } from './contest-status-badge';

interface ContestCardProps {
	contest: ContestListItem;
	className?: string;
}

export function ContestCard({ contest, className }: ContestCardProps) {
	const status = getContestStatus(contest.startAt, contest.endAt);
	const isPast = status === ContestStatus.PAST;
	const hasWinner =
		isPast && !!contest.resultPublishedAt && !!contest.winningTeam;
	const registrationOpen =
		!isPast && isRegistrationOpen({ ...contest, hasRegistration: true });

	return (
		<article
			className={cn(
				'flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card',
				className
			)}
		>
			<div className="relative">
				<MediaPlaceholder
					className={cn(
						'aspect-video w-full rounded-none',
						isPast && 'opacity-70 grayscale'
					)}
				/>
				<div className="absolute top-3 left-3">
					<ContestStatusBadge status={status} />
				</div>
				<Badge
					variant="outline"
					className="absolute top-3 right-3 rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
				>
					{eventFormatLabels[contest.format]}
				</Badge>
			</div>

			<div className="flex flex-1 flex-col p-4">
				{hasWinner && contest.winningTeam ? (
					<Badge className="w-fit gap-1 rounded-sm bg-accent font-mono text-[10px] text-accent-foreground uppercase">
						<Trophy className="size-3" />
						{winnerTierLabels[contest.winningTeam.tier]}
					</Badge>
				) : null}

				<h3 className="mt-2.5 line-clamp-2 min-h-11.5 font-heading text-lg leading-snug font-semibold text-foreground">
					{contest.title}
				</h3>

				{hasWinner && contest.winningTeam ? (
					<div className="mt-2 flex items-center gap-2">
						<Avatar size="sm">
							<AvatarFallback className="bg-primary/10 font-mono text-[10px] text-primary">
								{getInitials(contest.winningTeam.name)}
							</AvatarFallback>
						</Avatar>
						<p className="min-w-0 truncate text-xs text-muted-foreground">
							{contest.winningTeam.name}
						</p>
					</div>
				) : (
					<p className="mt-2 font-mono text-xs text-muted-foreground">
						{isPast && !contest.resultPublishedAt
							? 'Results pending'
							: formatEventDate(contest.startAt)}
						{!isPast && contest.isPremium && contest.priceBdt ? (
							<>
								{' '}
								·{' '}
								<span className="text-accent-foreground">
									৳{contest.priceBdt}
								</span>
							</>
						) : null}
					</p>
				)}

				<Button
					asChild
					variant={
						hasWinner || !registrationOpen ? 'outline' : 'default'
					}
					size="sm"
					className="mt-4 w-fit"
				>
					<Link href={`/contests/${contest.slug}`}>
						{hasWinner
							? 'View Results'
							: registrationOpen
								? 'Register'
								: 'View Details'}
						<ArrowRight className="size-3.5" />
					</Link>
				</Button>
			</div>
		</article>
	);
}
