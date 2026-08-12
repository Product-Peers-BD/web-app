import type { ArticleDetail } from '@/types/article';

const RELATED_COUNT = 4;

function byRecency(a: ArticleDetail, b: ArticleDetail): number {
	return (
		new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);
}

export function getRelatedArticles(
	current: ArticleDetail,
	allArticles: ArticleDetail[]
): ArticleDetail[] {
	const pool = allArticles.filter((article) => article.slug !== current.slug);
	const picked = new Map<string, ArticleDetail>();

	function addFrom(candidates: ArticleDetail[]) {
		for (const candidate of [...candidates].sort(byRecency)) {
			if (picked.size >= RELATED_COUNT) return;
			if (!picked.has(candidate.slug))
				picked.set(candidate.slug, candidate);
		}
	}

	addFrom(
		pool.filter(
			(article) =>
				article.category === current.category &&
				article.author.slug === current.author.slug
		)
	);
	addFrom(
		pool.filter(
			(article) =>
				article.category === current.category &&
				article.author.slug !== current.author.slug
		)
	);
	addFrom(
		pool.filter(
			(article) =>
				article.author.slug === current.author.slug &&
				article.category !== current.category
		)
	);
	addFrom(pool);

	return Array.from(picked.values());
}
