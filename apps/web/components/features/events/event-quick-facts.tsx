import { Calendar, Clock, ExternalLink, Globe, MapPin } from 'lucide-react';

import type { EventDetail } from '@/types/event';
import {
	formatEventDateLong,
	formatEventTime
} from '@/utils/format-event-date';
import { eventFormatLabels } from '@/utils/labels';

interface EventQuickFactsProps {
	event: EventDetail;
}

function FactCell({
	icon: Icon,
	label,
	value,
	action
}: {
	icon: React.ComponentType<{ className?: string }>;
	label: string;
	value: string;
	action?: React.ReactNode;
}) {
	return (
		<div className="flex items-start gap-3 bg-card p-4">
			<Icon className="mt-0.5 size-4 shrink-0 text-primary" />
			<div className="min-w-0">
				<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
					{label}
				</p>
				<p className="mt-1 text-sm text-foreground">{value}</p>
				{action}
			</div>
		</div>
	);
}

export function EventQuickFacts({ event }: EventQuickFactsProps) {
	return (
		<div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
			<FactCell
				icon={Calendar}
				label="Date"
				value={formatEventDateLong(event.startAt)}
			/>
			<FactCell
				icon={Clock}
				label="Time"
				value={`${formatEventTime(event.startAt)} – ${formatEventTime(event.endAt)}`}
			/>
			<FactCell
				icon={Globe}
				label="Format"
				value={eventFormatLabels[event.format]}
			/>
			{event.venueAddress ? (
				<FactCell
					icon={MapPin}
					label="Venue"
					value={event.venueAddress}
					action={
						event.venueMapUrl ? (
							<a
								href={event.venueMapUrl}
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
