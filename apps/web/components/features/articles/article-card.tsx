import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import type { ArticleListItem } from '@/types/article';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

interface ArticleCardProps {
	article: ArticleListItem;
	className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
	return (
		<article
			className={cn(
				'flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card',
				className
			)}
		>
			<div className="relative">
				<MediaPlaceholder className="aspect-video w-full rounded-none" />
				{article.isCurated ? (
					<span className="absolute top-3 left-3 inline-flex h-5 w-fit items-center gap-1 rounded-4xl bg-accent px-2 font-mono text-[10px] tracking-[0.1em] text-accent-foreground uppercase">
						<Sparkles className="size-2.5" />
						Curated
					</span>
				) : null}
				<Badge
					variant="outline"
					className="absolute top-3 right-3 rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
				>
					{article.category}
				</Badge>
			</div>

			<div className="flex flex-1 flex-col p-4">
				<h3 className="line-clamp-2 min-h-11.5 font-heading text-lg leading-snug font-semibold text-foreground">
					{article.title}
				</h3>

				<div className="mt-3 flex items-center gap-2">
					<Avatar size="sm">
						<AvatarFallback className="bg-primary/10 font-mono text-[10px] text-primary">
							{getInitials(article.author.name)}
						</AvatarFallback>
					</Avatar>
					<p className="min-w-0 truncate text-xs text-muted-foreground">
						{article.author.name} ·{' '}
						<span className="font-mono">
							{article.readTimeMinutes} min read
						</span>
					</p>
				</div>

				<Button
					asChild
					variant="outline"
					size="sm"
					className="mt-4 w-fit"
				>
					<Link href={`/articles/${article.slug}`}>
						Read Article
						<ArrowRight className="size-3.5" />
					</Link>
				</Button>
			</div>
		</article>
	);
}
