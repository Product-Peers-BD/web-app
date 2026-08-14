import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type { ArticleDetail } from '@/types/article';

interface RelatedArticlesSidebarProps {
	articles: ArticleDetail[];
}

export function RelatedArticlesSidebar({
	articles
}: RelatedArticlesSidebarProps) {
	if (articles.length === 0) return null;

	return (
		<Reveal className="rounded-xl border border-border bg-card p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Keep reading
			</p>
			<h2 className="mt-1 font-heading text-lg font-semibold text-foreground">
				Related Articles
			</h2>

			<div className="mt-4 flex flex-col divide-y divide-border">
				{articles.map((article) => (
					<Link
						key={article.slug}
						href={`/articles/${article.slug}`}
						className="group flex gap-3 py-4 first:pt-0 last:pb-0"
					>
						<MediaPlaceholder className="aspect-4/3 w-20 shrink-0" />
						<div className="min-w-0">
							<p className="font-mono text-[10px] tracking-wide text-primary uppercase">
								{article.category}
							</p>
							<h3 className="mt-1 line-clamp-2 font-heading text-sm leading-snug font-semibold text-foreground group-hover:text-primary">
								{article.title}
							</h3>
							<p className="mt-1 truncate text-xs text-muted-foreground">
								{article.author.name} ·{' '}
								<span className="font-mono">
									{article.readTimeMinutes} min read
								</span>
							</p>
						</div>
					</Link>
				))}
			</div>
		</Reveal>
	);
}
