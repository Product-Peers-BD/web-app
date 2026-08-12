import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';

import { ProductDetailSection } from './product-detail-section';

interface ProductGalleryProps {
	count: number;
}

export function ProductGallery({ count }: ProductGalleryProps) {
	if (count === 0) return null;

	return (
		<ProductDetailSection title="Gallery">
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
				{Array.from({ length: count }).map((_, index) => (
					<MediaPlaceholder
						key={index}
						className="aspect-square w-full"
					/>
				))}
			</div>
		</ProductDetailSection>
	);
}
