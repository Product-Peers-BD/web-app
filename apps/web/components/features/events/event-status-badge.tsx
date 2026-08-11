import { EventStatus } from '@/enums/event';
import { eventStatusLabels } from '@/utils/labels';
import { cn } from '@workspace/ui/lib/utils';

interface EventStatusBadgeProps {
	status: EventStatus;
	className?: string;
}

export function EventStatusBadge({ status, className }: EventStatusBadgeProps) {
	if (status === EventStatus.ONGOING) {
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
				{eventStatusLabels[status]}
			</span>
		);
	}

	return (
		<span
			className={cn(
				'inline-flex h-5 w-fit items-center rounded-4xl border px-2 font-mono text-[10px] tracking-[0.12em] uppercase',
				status === EventStatus.PAST
					? 'border-border text-muted-foreground'
					: 'border-border bg-card text-foreground',
				className
			)}
		>
			{eventStatusLabels[status]}
		</span>
	);
}
