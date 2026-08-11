import { Play } from 'lucide-react';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';

import { EventDetailSection } from './event-detail-section';

interface EventVideosProps {
	videoUrls: string[];
}

export function EventVideos({ videoUrls }: EventVideosProps) {
	if (videoUrls.length === 0) return null;

	return (
		<EventDetailSection title="Videos">
			<div className="grid gap-4 sm:grid-cols-2">
				{videoUrls.map((url) => (
					<a
						key={url}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative block"
					>
						<MediaPlaceholder className="aspect-video w-full" />
						<span className="absolute inset-0 flex items-center justify-center">
							<span className="flex size-12 items-center justify-center rounded-full bg-foreground/90 transition-transform group-hover:scale-105">
								<Play className="ml-0.5 size-5 fill-background text-background" />
							</span>
						</span>
					</a>
				))}
			</div>
		</EventDetailSection>
	);
}
