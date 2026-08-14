import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import type { CaseStudyProductRef } from '@/types/case-study';

import { CaseStudyDetailSection } from './case-study-detail-section';

interface CaseStudyAssociatedProductsProps {
	products: CaseStudyProductRef[];
}

export function CaseStudyAssociatedProducts({
	products
}: CaseStudyAssociatedProductsProps) {
	if (products.length === 0) return null;

	return (
		<CaseStudyDetailSection title="Associated Products">
			<div className="grid gap-3 sm:grid-cols-2">
				{products.map((product) => (
					<Link
						key={product.slug}
						href={`/products/${product.slug}`}
						className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-3 hover:border-primary/40"
					>
						<div className="min-w-0">
							<p className="truncate font-heading text-sm font-semibold text-foreground group-hover:text-primary">
								{product.name}
							</p>
							<p className="font-mono text-[11px] text-muted-foreground uppercase">
								{product.industry}
							</p>
						</div>
						<ArrowRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
					</Link>
				))}
			</div>
		</CaseStudyDetailSection>
	);
}
