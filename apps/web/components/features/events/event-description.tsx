import { EventDetailSection } from './event-detail-section';

interface EventDescriptionProps {
	paragraphs: string[];
}

export function EventDescription({ paragraphs }: EventDescriptionProps) {
	return (
		<EventDetailSection title="About this event">
			<div className="flex flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground">
				{paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
		</EventDetailSection>
	);
}
