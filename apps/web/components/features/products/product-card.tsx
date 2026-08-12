import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { ProductStage } from '@/enums/product';
import type { ProductListItem } from '@/types/product';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { ProductStageBadge } from './product-stage-badge';

interface ProductCardProps {
	product: ProductListItem;
	className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
	const visibleIndustries = product.industries.slice(0, 2);
	const extraIndustryCount =
		product.industries.length - visibleIndustries.length;

	return (
		<article
			className={cn(
				'flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card',
				className
			)}
		>
			<div className="relative">
				<MediaPlaceholder
					className={cn(
						'aspect-square w-full rounded-none',
						product.stage === ProductStage.SUNSET &&
							'opacity-70 grayscale'
					)}
				/>
				<div className="absolute top-3 left-3">
					<ProductStageBadge stage={product.stage} />
				</div>
				{visibleIndustries.length > 0 ? (
					<div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1.5">
						{visibleIndustries.map((industry) => (
							<Badge
								key={industry}
								variant="outline"
								className="rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
							>
								{industry}
							</Badge>
						))}
						{extraIndustryCount > 0 ? (
							<Badge
								variant="outline"
								className="rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
							>
								+{extraIndustryCount}
							</Badge>
						) : null}
					</div>
				) : null}
			</div>

			<div className="flex flex-1 flex-col p-4">
				<h3 className="line-clamp-2 min-h-11.5 font-heading text-lg leading-snug font-semibold text-foreground">
					{product.name}
				</h3>

				<Button
					asChild
					variant="outline"
					size="sm"
					className="mt-4 w-fit"
				>
					<Link href={`/products/${product.slug}`}>
						View Product
						<ArrowRight className="size-3.5" />
					</Link>
				</Button>
			</div>
		</article>
	);
}
