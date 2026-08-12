import { ArticleCard } from '@/components/features/articles/article-card';
import { CaseStudyCard } from '@/components/features/case-studies/case-study-card';
import { ProductCard } from '@/components/features/products/product-card';
import { articles } from '@/constants/articles';
import { caseStudies } from '@/constants/case-studies';
import { products } from '@/constants/products';

interface ProfileContentGridProps {
	username: string;
}

function ContentSection({
	title,
	children
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section>
			<p className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
				{title}
			</p>
			<div className="mt-3 grid gap-5 sm:grid-cols-2">{children}</div>
		</section>
	);
}

export function ProfileContentGrid({ username }: ProfileContentGridProps) {
	const authoredArticles = articles.filter(
		(article) => article.author.slug === username
	);
	const authoredCaseStudies = caseStudies.filter(
		(caseStudy) => caseStudy.author.slug === username
	);
	const foundedProducts = products.filter((product) =>
		product.team.some((member) => member.slug === username)
	);

	const hasContent =
		authoredArticles.length > 0 ||
		authoredCaseStudies.length > 0 ||
		foundedProducts.length > 0;

	if (!hasContent) {
		return (
			<p className="rounded-xl border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
				Nothing published yet.
			</p>
		);
	}

	return (
		<div className="flex flex-col gap-8">
			{authoredArticles.length > 0 ? (
				<ContentSection title="Articles">
					{authoredArticles.map((article) => (
						<ArticleCard
							key={article.slug}
							article={article}
						/>
					))}
				</ContentSection>
			) : null}

			{authoredCaseStudies.length > 0 ? (
				<ContentSection title="Case Studies">
					{authoredCaseStudies.map((caseStudy) => (
						<CaseStudyCard
							key={caseStudy.slug}
							caseStudy={caseStudy}
						/>
					))}
				</ContentSection>
			) : null}

			{foundedProducts.length > 0 ? (
				<ContentSection title="Products">
					{foundedProducts.map((product) => (
						<ProductCard
							key={product.slug}
							product={product}
						/>
					))}
				</ContentSection>
			) : null}
		</div>
	);
}
