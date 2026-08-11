import type { EventActivity } from '@/types/event';

import { EventDetailSection } from './event-detail-section';

interface EventScheduleProps {
	activities: EventActivity[];
}

export function EventSchedule({ activities }: EventScheduleProps) {
	if (activities.length === 0) return null;

	return (
		<EventDetailSection title="Schedule">
			<ol className="flex flex-col">
				{activities.map((activity, index) => (
					<li
						key={index}
						className="flex gap-4"
					>
						<div className="w-14 shrink-0 pt-0.5 text-right font-mono text-xs text-muted-foreground tabular-nums">
							{activity.startTime ?? '—'}
						</div>
						<div className="relative flex-1 border-l border-border pb-6 pl-4 last:border-transparent last:pb-0">
							<span className="absolute top-1.5 left-[-3.5px] size-[7px] rounded-full bg-primary" />
							<p className="font-heading text-sm font-semibold text-foreground">
								{activity.title}
							</p>
							{activity.description ? (
								<p className="mt-1 text-sm text-muted-foreground">
									{activity.description}
								</p>
							) : null}
						</div>
					</li>
				))}
			</ol>
		</EventDetailSection>
	);
}
