import Link from 'next/link';

import type { ContestRankingEntry } from '@/types/contest';
import { cn } from '@workspace/ui/lib/utils';

import { ContestDetailSection } from './contest-detail-section';

interface ContestRankingProps {
	ranking: ContestRankingEntry[];
	showScores: boolean;
}

export function ContestRanking({ ranking, showScores }: ContestRankingProps) {
	if (ranking.length === 0) return null;

	const columns = showScores
		? 'grid-cols-[3rem_1fr_5rem]'
		: 'grid-cols-[3rem_1fr]';

	return (
		<ContestDetailSection title="Standings">
			<div className="overflow-hidden rounded-xl border border-border">
				<div
					className={cn(
						'grid items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase',
						columns
					)}
				>
					<span>Rank</span>
					<span>Team</span>
					{showScores ? (
						<span className="text-right">Score</span>
					) : null}
				</div>

				<ul>
					{ranking.map((entry) => (
						<li
							key={entry.teamSlug}
							className={cn(
								'grid items-center gap-2 border-b border-border bg-card px-4 py-2.5 last:border-0',
								columns
							)}
						>
							<span className="font-mono text-sm font-semibold text-foreground tabular-nums">
								{String(entry.rank).padStart(2, '0')}
							</span>
							<Link
								href={`/t/${entry.teamSlug}`}
								className="truncate text-sm text-foreground hover:underline"
							>
								{entry.teamName}
							</Link>
							{showScores && entry.score !== undefined ? (
								<span className="text-right font-mono text-sm text-foreground tabular-nums">
									{entry.score.toFixed(2)}
								</span>
							) : null}
						</li>
					))}
				</ul>
			</div>
		</ContestDetailSection>
	);
}
