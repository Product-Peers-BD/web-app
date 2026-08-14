import {
	Calendar,
	Clock,
	ExternalLink,
	Globe,
	MapPin,
	Trophy
} from 'lucide-react';

import type { ContestDetail } from '@/types/contest';
import {
	formatEventDateLong,
	formatEventTime
} from '@/utils/format-event-date';
import { eventFormatLabels } from '@/utils/labels';
import { cn } from '@workspace/ui/lib/utils';

interface ContestQuickFactsProps {
	contest: ContestDetail;
}

function FactCell({
	icon: Icon,
	label,
	value,
	caption,
	action,
	className
}: {
	icon: React.ComponentType<{ className?: string }>;
	label: string;
	value: string;
	caption?: string;
	action?: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn('flex items-start gap-3 bg-card p-4', className)}>
			<Icon className="mt-0.5 size-4 shrink-0 text-primary" />
			<div className="min-w-0">
				<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
					{label}
				</p>
				<p className="mt-1 text-sm text-foreground">{value}</p>
				{caption ? (
					<p className="mt-0.5 text-xs text-muted-foreground">
						{caption}
					</p>
				) : null}
				{action}
			</div>
		</div>
	);
}

export function ContestQuickFacts({ contest }: ContestQuickFactsProps) {
	return (
		<div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
			<FactCell
				icon={Calendar}
				label="Dates"
				value={`${formatEventDateLong(contest.startAt)} – ${formatEventDateLong(contest.endAt)}`}
			/>
			<FactCell
				icon={Clock}
				label="Time"
				value={`${formatEventTime(contest.startAt)} – ${formatEventTime(contest.endAt)}`}
			/>
			<FactCell
				icon={Globe}
				label="Format"
				value={eventFormatLabels[contest.format]}
			/>
			<FactCell
				icon={Trophy}
				label="Result Publish Date"
				value={formatEventDateLong(
					contest.resultPublishedAt ?? contest.resultTargetAt
				)}
				caption={
					contest.resultPublishedAt
						? 'Results are live'
						: 'Target — publishing is a manual step and may shift'
				}
			/>
			{contest.venueAddress ? (
				<FactCell
					icon={MapPin}
					label="Venue"
					value={contest.venueAddress}
					className="sm:col-span-2"
					action={
						contest.venueMapUrl ? (
							<a
								href={contest.venueMapUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
							>
								View map
								<ExternalLink className="size-3" />
							</a>
						) : undefined
					}
				/>
			) : null}
		</div>
	);
}
