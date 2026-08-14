import { Sparkles } from 'lucide-react';

import { Reveal } from '@/components/snippets/reveal/reveal';
import type { ArticleDetail } from '@/types/article';

import { ArticleCard } from './article-card';

interface CuratedPicksCarouselProps {
	articles: ArticleDetail[];
}

const CURATED_LIMIT = 6;

export function CuratedPicksCarousel({ articles }: CuratedPicksCarouselProps) {
	const curated = [...articles]
		.filter((article) => article.isCurated)
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() -
				new Date(a.publishedAt).getTime()
		)
		.slice(0, CURATED_LIMIT);

	if (curated.length === 0) return null;

	return (
		<Reveal trigger="mount">
			<div className="flex items-center gap-2">
				<Sparkles className="size-3.5 text-accent-foreground" />
				<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
					Curated Picks
				</p>
			</div>
			<p className="mt-2 max-w-xl text-sm text-muted-foreground">
				Spotlighted by our Mentors and editorial team — the pieces worth
				your six minutes first.
			</p>

			<div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden">
				{curated.map((article) => (
					<ArticleCard
						key={article.slug}
						article={article}
						className="w-[280px] shrink-0 snap-start sm:w-[320px]"
					/>
				))}
			</div>
		</Reveal>
	);
}
