import { Sparkles } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { featuredArticles } from '@/constants/home';
import { Badge } from '@workspace/ui/components/badge';

export function FeaturedArticles() {
	return (
		<section className="bg-secondary/40">
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Curated"
					title="Featured Articles"
					seeAllLabel="See all Articles"
					seeAllHref="/articles"
				/>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{featuredArticles.map((article) => (
						<Link
							key={article.slug}
							href={`/articles/${article.slug}`}
							className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
						>
							<div className="relative">
								<MediaPlaceholder className="aspect-16/10 w-full rounded-none" />
								<Badge className="absolute top-3 left-3 gap-1 rounded-sm bg-accent font-mono text-[10px] text-accent-foreground uppercase">
									<Sparkles className="size-3" />
									Curated
								</Badge>
							</div>
							<div className="flex flex-1 flex-col p-5">
								<p className="font-mono text-[11px] tracking-wide text-primary uppercase">
									{article.category}
								</p>
								<h3 className="mt-2 font-heading text-lg leading-snug font-semibold text-foreground group-hover:text-primary">
									{article.title}
								</h3>
								<div className="mt-auto flex items-center justify-between pt-5 text-xs text-muted-foreground">
									<span>{article.authorName}</span>
									<span className="font-mono">
										{article.readTimeMinutes} min read
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
