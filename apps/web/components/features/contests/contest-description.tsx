import { ContestDetailSection } from './contest-detail-section';

interface ContestDescriptionProps {
	paragraphs: string[];
}

export function ContestDescription({ paragraphs }: ContestDescriptionProps) {
	return (
		<ContestDetailSection title="About this contest">
			<div className="flex flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground">
				{paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
		</ContestDetailSection>
	);
}
