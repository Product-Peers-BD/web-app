import { ProductDetailSection } from './product-detail-section';

interface ProductDescriptionProps {
	paragraphs: string[];
}

export function ProductDescription({ paragraphs }: ProductDescriptionProps) {
	return (
		<ProductDetailSection title="About this product">
			<div className="flex flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground">
				{paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
		</ProductDetailSection>
	);
}
