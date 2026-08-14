import type { EventFaq as EventFaqItem } from '@/types/event';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@workspace/ui/components/accordion';

import { EventDetailSection } from './event-detail-section';

interface EventFaqProps {
	faqs: EventFaqItem[];
}

export function EventFaq({ faqs }: EventFaqProps) {
	if (faqs.length === 0) return null;

	return (
		<EventDetailSection title="FAQ">
			<Accordion
				type="single"
				collapsible
			>
				{faqs.map((faq, index) => (
					<AccordionItem
						key={index}
						value={`faq-${index}`}
					>
						<AccordionTrigger className="font-heading text-sm font-semibold text-foreground">
							{faq.question}
						</AccordionTrigger>
						<AccordionContent className="text-sm text-muted-foreground">
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</EventDetailSection>
	);
}
