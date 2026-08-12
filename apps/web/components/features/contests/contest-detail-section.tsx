import { Reveal } from '@/components/snippets/reveal/reveal';
import { cn } from '@workspace/ui/lib/utils';

interface ContestDetailSectionProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export function ContestDetailSection({
	title,
	children,
	className
}: ContestDetailSectionProps) {
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
