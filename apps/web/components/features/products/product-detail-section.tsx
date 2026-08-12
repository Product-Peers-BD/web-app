import { Reveal } from '@/components/snippets/reveal/reveal';
import { cn } from '@workspace/ui/lib/utils';

interface ProductDetailSectionProps {
	title: string;
	children: React.ReactNode;
	id?: string;
	className?: string;
}

export function ProductDetailSection({
	title,
	children,
	id,
	className
}: ProductDetailSectionProps) {
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
