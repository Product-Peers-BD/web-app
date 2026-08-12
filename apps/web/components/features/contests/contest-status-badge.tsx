import { ContestStatus } from '@/enums/contest';
import { contestStatusLabels } from '@/utils/labels';
import { cn } from '@workspace/ui/lib/utils';

interface ContestStatusBadgeProps {
	status: ContestStatus;
	className?: string;
}

export function ContestStatusBadge({
	status,
	className
}: ContestStatusBadgeProps) {
	if (status === ContestStatus.RUNNING) {
		return (
			<span
				className={cn(
					'inline-flex h-5 w-fit items-center gap-1.5 rounded-4xl bg-primary px-2 font-mono text-[10px] tracking-[0.12em] text-primary-foreground uppercase',
					className
				)}
			>
				<span className="relative flex size-1.5">
					<span className="absolute inline-flex size-full rounded-full bg-primary-foreground/70 motion-safe:animate-ping" />
					<span className="relative inline-flex size-1.5 rounded-full bg-primary-foreground" />
				</span>
				{contestStatusLabels[status]}
			</span>
		);
	}

	return (
		<span
			className={cn(
				'inline-flex h-5 w-fit items-center rounded-4xl border px-2 font-mono text-[10px] tracking-[0.12em] uppercase',
				status === ContestStatus.PAST
					? 'border-border text-muted-foreground'
					: 'border-border bg-card text-foreground',
				className
			)}
		>
			{contestStatusLabels[status]}
		</span>
	);
}
