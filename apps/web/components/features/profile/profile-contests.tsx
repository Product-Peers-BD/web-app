import { Trophy } from 'lucide-react';
import Link from 'next/link';

import { contests } from '@/constants/contests';
import type { WinnerTier } from '@/enums/contest';
import { winnerTierLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';

interface ProfileContestsProps {
	username: string;
}

interface ContestParticipation {
	contestSlug: string;
	contestTitle: string;
	teamName: string;
	isLeader: boolean;
	tier?: WinnerTier;
	rank?: number;
}

export function ProfileContests({ username }: ProfileContestsProps) {
	const participations: ContestParticipation[] = [];

	for (const contest of contests) {
		const team = contest.teams.find((candidate) =>
			candidate.members.some((member) => member.slug === username)
		);
		if (!team) continue;

		const member = team.members.find(
			(candidate) => candidate.slug === username
		);
		const winnerGroup = contest.winners.find((group) =>
			group.teams.some((winner) => winner.slug === team.slug)
		);
		const rankingEntry = contest.ranking.find(
			(entry) => entry.teamSlug === team.slug
		);

		participations.push({
			contestSlug: contest.slug,
			contestTitle: contest.title,
			teamName: team.name,
			isLeader: !!member?.isLeader,
			tier: winnerGroup?.tier,
			rank: rankingEntry?.rank
		});
	}

	if (participations.length === 0) {
		return (
			<p className="rounded-xl border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
				No contest participation yet.
			</p>
		);
	}

	return (
		<div className="flex flex-col gap-3">
			{participations.map((participation) => (
				<Link
					key={participation.contestSlug}
					href={`/contests/${participation.contestSlug}`}
					className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/40"
				>
					<div className="min-w-0">
						<p className="truncate font-heading text-sm font-semibold text-foreground group-hover:text-primary">
							{participation.contestTitle}
						</p>
						<p className="mt-1 text-xs text-muted-foreground">
							{participation.teamName}
							{participation.isLeader ? ' · Team Leader' : ''}
						</p>
					</div>
					{participation.tier ? (
						<Badge className="shrink-0 gap-1 rounded-sm bg-accent text-[10px] tracking-wide text-accent-foreground uppercase">
							<Trophy className="size-3" />
							{winnerTierLabels[participation.tier]}
						</Badge>
					) : participation.rank ? (
						<Badge
							variant="outline"
							className="shrink-0 rounded-sm font-mono text-[10px] text-muted-foreground"
						>
							Rank #{participation.rank}
						</Badge>
					) : null}
				</Link>
			))}
		</div>
	);
}
