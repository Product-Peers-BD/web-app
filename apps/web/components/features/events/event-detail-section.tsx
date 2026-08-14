import { Reveal } from '@/components/snippets/reveal/reveal';
import { cn } from '@workspace/ui/lib/utils';

interface EventDetailSectionProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export function EventDetailSection({
	title,
	children,
	className
}: EventDetailSectionProps) {
	return (
		<Reveal>
			<section className={cn('scroll-mt-24', className)}>
				<h2 className="font-heading text-xl font-semibold text-foreground">
					{title}
				</h2>
				<div className="mt-4">{children}</div>
			</section>
		</Reveal>
	);
}
