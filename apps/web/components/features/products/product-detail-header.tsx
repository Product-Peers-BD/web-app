import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { ProductStage } from '@/enums/product';
import type { ProductDetail } from '@/types/product';
import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { ProductStageBadge } from './product-stage-badge';
import { ProductStageTrack } from './product-stage-track';

interface ProductDetailHeaderProps {
	product: ProductDetail;
}

export function ProductDetailHeader({ product }: ProductDetailHeaderProps) {
	return (
		<section className="border-b border-border bg-secondary/30">
			<div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
				<Reveal trigger="mount">
					<Link
						href="/products"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<ArrowLeft className="size-3.5" />
						All products
					</Link>

					<div className="relative mt-5">
						<MediaPlaceholder
							className={cn(
								'aspect-21/9 w-full',
								product.stage === ProductStage.SUNSET &&
									'opacity-70 grayscale'
							)}
						/>
						<div className="absolute top-4 left-4">
							<ProductStageBadge stage={product.stage} />
						</div>
						{product.industries.length > 0 ? (
							<div className="absolute top-4 right-4 flex flex-wrap justify-end gap-1.5">
								{product.industries.map((industry) => (
									<Badge
										key={industry}
										variant="outline"
										className="rounded-sm border-border bg-card/90 font-mono text-[10px] tracking-wide text-foreground uppercase backdrop-blur-sm"
									>
										{industry}
									</Badge>
								))}
							</div>
						) : null}
					</div>
				</Reveal>

				<Reveal
					delay={90}
					className="py-8"
				>
					{product.companyName ? (
						<p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
							Built by {product.companyName}
						</p>
					) : null}
					<h1 className="mt-2 font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
						{product.name}
					</h1>

					<ProductStageTrack
						stage={product.stage}
						className="mt-6"
					/>
				</Reveal>
			</div>
		</section>
	);
}
