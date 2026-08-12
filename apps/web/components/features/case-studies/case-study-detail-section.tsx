import { Reveal } from '@/components/snippets/reveal/reveal';
import { cn } from '@workspace/ui/lib/utils';

interface CaseStudyDetailSectionProps {
	title: string;
	children: React.ReactNode;
	id?: string;
	className?: string;
}

export function CaseStudyDetailSection({
	title,
	children,
	id,
	className
}: CaseStudyDetailSectionProps) {
	return (
		<Reveal>
			<section
				id={id}
				className={cn('scroll-mt-24', className)}
			>
				<h2 className="font-heading text-xl font-semibold text-foreground">
					{title}
				</h2>
				<div className="mt-4">{children}</div>
			</section>
		</Reveal>
	);
}
