import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { joinCommunityFaqs } from '@/constants/join-community';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@workspace/ui/components/accordion';

export function JoinCommunityFaq() {
	return (
		<section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
			<SectionHeader
				eyebrow="Before you join"
				title="Questions people actually ask"
			/>

			<Accordion
				type="single"
				collapsible
				className="mt-10"
			>
				{joinCommunityFaqs.map((faq, index) => (
					<AccordionItem
						key={faq.question}
						value={`faq-${index}`}
					>
						<AccordionTrigger className="font-heading text-base font-semibold text-foreground">
							{faq.question}
						</AccordionTrigger>
						<AccordionContent className="text-sm text-muted-foreground">
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
