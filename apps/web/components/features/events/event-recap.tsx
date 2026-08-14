import { EventDetailSection } from './event-detail-section';

interface EventRecapProps {
	recap?: string;
}

export function EventRecap({ recap }: EventRecapProps) {
	if (!recap) return null;

	return (
		<EventDetailSection title="Recap">
			<div className="rounded-xl border border-border bg-secondary/30 p-5">
				<p className="text-[15px] leading-relaxed text-muted-foreground">
					{recap}
				</p>
			</div>
		</EventDetailSection>
	);
}
