import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';

import { ContestDetailSection } from './contest-detail-section';

interface ContestGalleryProps {
	count: number;
}

export function ContestGallery({ count }: ContestGalleryProps) {
	if (count === 0) return null;

	return (
		<ContestDetailSection title="Gallery">
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
				{Array.from({ length: count }).map((_, index) => (
					<MediaPlaceholder
						key={index}
						className="aspect-square w-full"
					/>
				))}
			</div>
		</ContestDetailSection>
	);
}
