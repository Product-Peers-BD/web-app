import { ProductDetailSection } from './product-detail-section';

interface ProductProblemProps {
	problem?: string;
}

export function ProductProblem({ problem }: ProductProblemProps) {
	if (!problem) return null;

	return (
		<ProductDetailSection title="The problem it solves">
			<p className="text-[15px] leading-relaxed text-muted-foreground">
				{problem}
			</p>
		</ProductDetailSection>
	);
}
