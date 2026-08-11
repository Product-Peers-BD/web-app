import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';

import { EventDetailSection } from './event-detail-section';

interface EventGalleryProps {
	count: number;
}

export function EventGallery({ count }: EventGalleryProps) {
	if (count === 0) return null;

	return (
		<EventDetailSection title="Gallery">
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
				{Array.from({ length: count }).map((_, index) => (
					<MediaPlaceholder
						key={index}
						className="aspect-square w-full"
					/>
				))}
			</div>
		</EventDetailSection>
	);
}
