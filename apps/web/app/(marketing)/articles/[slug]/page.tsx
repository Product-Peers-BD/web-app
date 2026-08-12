import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleAuthorBar } from '@/components/features/articles/article-author-bar';
import { ArticleBody } from '@/components/features/articles/article-body';
import { ArticleComments } from '@/components/features/articles/article-comments';
import { ArticleDetailHeader } from '@/components/features/articles/article-detail-header';
import { ArticleEngagementBar } from '@/components/features/articles/article-engagement-bar';
import { RelatedArticlesSidebar } from '@/components/features/articles/related-articles-sidebar';
import { articles, getArticleBySlug } from '@/constants/articles';
import { getRelatedArticles } from '@/utils/get-related-articles';

interface ArticleDetailsPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
	params
}: ArticleDetailsPageProps): Promise<Metadata> {
	const { slug } = await params;
	const article = getArticleBySlug(slug);

	if (!article) return {};

	return {
		title: `${article.title} — Product Peers BD`,
		description: article.excerpt
	};
}

export default async function ArticleDetailsPage({
	params
}: ArticleDetailsPageProps) {
	const { slug } = await params;
	const article = getArticleBySlug(slug);

	if (!article) notFound();

	const relatedArticles = getRelatedArticles(article, articles);

	return (
		<article>
			<ArticleDetailHeader article={article} />

			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
					<div className="flex flex-col gap-10">
						<ArticleAuthorBar article={article} />
						<ArticleBody content={article.content} />
						<ArticleEngagementBar
							title={article.title}
							likeCount={article.likeCount}
							commentCount={article.comments.length}
						/>
						<ArticleComments comments={article.comments} />
					</div>

					<aside className="lg:sticky lg:top-20 lg:h-fit">
						<RelatedArticlesSidebar articles={relatedArticles} />
					</aside>
				</div>
			</div>
		</article>
	);
}
