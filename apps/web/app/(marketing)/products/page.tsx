import type { Metadata } from 'next';

import { ProductsExplorer } from '@/components/features/products/products-explorer';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { products } from '@/constants/products';

export const metadata: Metadata = {
	title: 'Products — Product Peers BD',
	description:
		'A directory of products built by Product Peers BD members — tracked stage by stage, from a raw idea to something live in the world.'
};

export default function ProductsPage() {
	return (
		<>
			<section className="border-b border-border bg-secondary/30">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
					<Reveal trigger="mount">
						<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
							Built by members
						</p>
						<h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
							What the community is actually building.
						</h1>
						<p className="mt-4 max-w-xl text-base text-muted-foreground">
							Every product here was built and submitted by a PPBD
							member — tracked from idea through launch. Browse by
							stage, industry, or tag to see what&apos;s shipping
							right now.
						</p>
					</Reveal>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<ProductsExplorer products={products} />
			</section>
		</>
	);
}
