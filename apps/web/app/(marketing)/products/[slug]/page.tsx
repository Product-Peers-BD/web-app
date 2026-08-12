import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductComments } from '@/components/features/products/product-comments';
import { ProductDescription } from '@/components/features/products/product-description';
import { ProductDetailHeader } from '@/components/features/products/product-detail-header';
import { ProductEngagementBar } from '@/components/features/products/product-engagement-bar';
import { ProductGallery } from '@/components/features/products/product-gallery';
import { ProductProblem } from '@/components/features/products/product-problem';
import { ProductRelatedCaseStudies } from '@/components/features/products/product-related-case-studies';
import { ProductTeam } from '@/components/features/products/product-team';
import { ProductVisitPanel } from '@/components/features/products/product-visit-panel';
import { getProductBySlug, products } from '@/constants/products';

interface ProductDetailsPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
	params
}: ProductDetailsPageProps): Promise<Metadata> {
	const { slug } = await params;
	const product = getProductBySlug(slug);

	if (!product) return {};

	return {
		title: `${product.name} — Product Peers BD`,
		description: product.description[0]
	};
}

export default async function ProductDetailsPage({
	params
}: ProductDetailsPageProps) {
	const { slug } = await params;
	const product = getProductBySlug(slug);

	if (!product) notFound();

	return (
		<article>
			<ProductDetailHeader product={product} />

			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
					<div className="flex flex-col gap-12">
						<ProductDescription paragraphs={product.description} />
						<ProductGallery count={product.galleryCount} />
						<ProductProblem problem={product.problem} />
						<ProductTeam product={product} />
						<ProductEngagementBar
							title={product.name}
							likeCount={product.likeCount}
							commentCount={product.comments.length}
							viewCount={product.viewCount}
						/>
						<ProductComments comments={product.comments} />
					</div>

					<aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:h-fit">
						<ProductVisitPanel product={product} />
						<ProductRelatedCaseStudies
							caseStudies={product.relatedCaseStudies}
						/>
					</aside>
				</div>
			</div>
		</article>
	);
}
