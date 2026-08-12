import type { EventFaq } from '@/types/event';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@workspace/ui/components/accordion';

import { ContestDetailSection } from './contest-detail-section';

interface ContestFaqProps {
	faqs: EventFaq[];
}

export function ContestFaq({ faqs }: ContestFaqProps) {
	if (faqs.length === 0) return null;

	return (
		<ContestDetailSection title="FAQ">
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
		</ContestDetailSection>
	);
}
