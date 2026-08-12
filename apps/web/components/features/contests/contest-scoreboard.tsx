import { CountUpValue } from '@/components/snippets/count-up-value/count-up-value';
import { ContestStatus } from '@/enums/contest';
import type { ContestListItem } from '@/types/contest';
import { getContestStatus } from '@/utils/get-contest-status';

interface ContestScoreboardProps {
	contests: ContestListItem[];
}

const segments: { status: ContestStatus; label: string }[] = [
	{ status: ContestStatus.RUNNING, label: 'Running' },
	{ status: ContestStatus.UPCOMING, label: 'Upcoming' },
	{ status: ContestStatus.PAST, label: 'Decided' }
];

export function ContestScoreboard({ contests }: ContestScoreboardProps) {
	const counts = contests.reduce<Record<ContestStatus, number>>(
		(acc, contest) => {
			const status = getContestStatus(contest.startAt, contest.endAt);
			acc[status] += 1;
			return acc;
		},
		{
			[ContestStatus.RUNNING]: 0,
			[ContestStatus.UPCOMING]: 0,
			[ContestStatus.PAST]: 0
		}
	);

	return (
		<div className="relative w-fit max-w-full overflow-hidden rounded-2xl border border-border bg-card">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_100%_at_100%_0%,black_0%,transparent_70%)] bg-size-[20px_20px]"
			/>

			<div className="relative flex items-center gap-2 border-b border-border px-5 py-3">
				<span className="relative flex size-1.5">
					<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
					<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
				</span>
				<span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
					The board, right now
				</span>
			</div>

			<dl className="relative grid grid-cols-3 gap-px bg-border">
				{segments.map((segment) => (
					<div
						key={segment.status}
						className="flex flex-col gap-1 bg-card/95 px-5 py-4 sm:px-8"
					>
						<dt className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground uppercase sm:text-[11px] sm:tracking-[0.12em]">
							{segment.label}
						</dt>
						<dd className="font-mono text-2xl font-medium text-foreground tabular-nums sm:text-4xl">
							<CountUpValue
								value={String(counts[segment.status])}
							/>
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
