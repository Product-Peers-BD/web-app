import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { spotlightProducts } from '@/constants/home';
import { productStageLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';

export function ProductsSpotlight() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<SectionHeader
				eyebrow="Built by members"
				title="Products Spotlight"
				seeAllLabel="Explore Products"
				seeAllHref="/products"
			/>

			<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{spotlightProducts.map((product) => (
					<Link
						key={product.slug}
						href={`/products/${product.slug}`}
						className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
					>
						<MediaPlaceholder className="aspect-square w-full rounded-none" />
						<div className="flex flex-1 flex-col p-4">
							<div className="flex items-center justify-between gap-2">
								<h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary">
									{product.name}
								</h3>
								<Badge
									variant="outline"
									className="shrink-0 rounded-sm border-border font-mono text-[10px] text-muted-foreground uppercase"
								>
									{productStageLabels[product.stage]}
								</Badge>
							</div>
							<p className="mt-1 text-sm text-muted-foreground">
								{product.industry}
							</p>
							<span className="mt-auto inline-flex items-center gap-1 pt-4 font-mono text-xs text-primary">
								View Product
								<ArrowRight className="size-3" />
							</span>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
