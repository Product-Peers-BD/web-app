import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import type { ArticleDetail } from '@/types/article';
import { Badge } from '@workspace/ui/components/badge';

interface ArticleDetailHeaderProps {
	article: ArticleDetail;
}

export function ArticleDetailHeader({ article }: ArticleDetailHeaderProps) {
	return (
		<section className="border-b border-border bg-secondary/30">
			<div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
				<Reveal trigger="mount">
					<Link
						href="/articles"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<ArrowLeft className="size-3.5" />
						All articles
					</Link>

					<div className="relative mt-5">
						<MediaPlaceholder className="aspect-21/9 w-full" />
						{article.isCurated ? (
							<span className="absolute top-4 left-4 inline-flex h-5 w-fit items-center gap-1 rounded-4xl bg-accent px-2 font-mono text-[10px] tracking-[0.1em] text-accent-foreground uppercase">
								<Sparkles className="size-2.5" />
								Curated
							</span>
						) : null}
						<Badge
							variant="outline"
							className="absolute top-4 right-4 rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
						>
							{article.category}
						</Badge>
					</div>
				</Reveal>

				<Reveal
					delay={90}
					className="py-8"
				>
					<h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
						{article.title}
					</h1>
				</Reveal>
			</div>
		</section>
	);
}
