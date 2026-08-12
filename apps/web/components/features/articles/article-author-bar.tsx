'use client';

import { Check, Clock, Eye, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Reveal } from '@/components/snippets/reveal/reveal';
import type { ArticleDetail } from '@/types/article';
import {
	formatArticleDate,
	formatCompactCount
} from '@/utils/format-article-date';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

interface ArticleAuthorBarProps {
	article: ArticleDetail;
}

export function ArticleAuthorBar({ article }: ArticleAuthorBarProps) {
	const [isFollowing, setIsFollowing] = useState(false);

	return (
		<Reveal>
			<div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
				<Link
					href={`/u/${article.author.slug}`}
					className="group flex min-w-0 items-center gap-3"
				>
					<Avatar size="lg">
						<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
							{getInitials(article.author.name)}
						</AvatarFallback>
					</Avatar>
					<div className="min-w-0">
						<div className="flex items-center gap-1.5">
							<p className="truncate font-heading text-sm font-semibold text-foreground group-hover:text-primary">
								{article.author.name}
							</p>
							{article.author.isMentor ? (
								<Badge className="h-4 rounded-sm px-1.5 text-[9px] tracking-wide uppercase">
									Mentor
								</Badge>
							) : null}
						</div>
						<p className="truncate text-xs text-muted-foreground">
							{article.author.title}
						</p>
					</div>
				</Link>

				<Button
					variant={isFollowing ? 'outline' : 'default'}
					size="sm"
					onClick={() => setIsFollowing((value) => !value)}
				>
					{isFollowing ? (
						<>
							<Check className="size-3.5" />
							Following
						</>
					) : (
						<>
							<UserPlus className="size-3.5" />
							Follow
						</>
					)}
				</Button>
			</div>

			<div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground uppercase">
				<span className="inline-flex items-center gap-1.5">
					<Clock className="size-3.5" />
					{article.readTimeMinutes} min read
				</span>
				<span className="inline-flex items-center gap-1.5">
					<Eye className="size-3.5" />
					{formatCompactCount(article.viewCount)} views
				</span>
				<span>{formatArticleDate(article.publishedAt)}</span>
			</div>
		</Reveal>
	);
}
