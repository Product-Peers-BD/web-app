import { ArrowUpRight } from 'lucide-react';

import type { ProductDetail } from '@/types/product';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

function FileRow({
	label,
	children
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="py-4 first:pt-0 last:pb-0">
			<dt className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				{label}
			</dt>
			<dd className="mt-1.5">{children}</dd>
		</div>
	);
}

interface ProductVisitPanelProps {
	product: ProductDetail;
}

export function ProductVisitPanel({ product }: ProductVisitPanelProps) {
	return (
		<div className="rounded-xl border border-border bg-card p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Live link
			</p>

			<div className="mt-3">
				{product.productUrl ? (
					<Button
						asChild
						className="w-full"
						size="lg"
					>
						<a
							href={product.productUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit Product
							<ArrowUpRight className="size-3.5" />
						</a>
					</Button>
				) : (
					<div className="rounded-lg border border-dashed border-border px-4 py-3 text-center">
						<p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
							No public link yet
						</p>
					</div>
				)}
			</div>

			<dl className="mt-2 flex flex-col divide-y divide-border">
				<FileRow label="Industry">
					<div className="flex flex-wrap gap-1.5">
						{product.industries.map((industry) => (
							<Badge
								key={industry}
								variant="outline"
								className="rounded-sm border-border text-[11px] font-normal text-muted-foreground"
							>
								{industry}
							</Badge>
						))}
					</div>
				</FileRow>

				{product.tags.length > 0 ? (
					<FileRow label="Tags">
						<div className="flex flex-wrap gap-1.5">
							{product.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-sm bg-secondary px-1.5 py-0.5 font-mono text-[11px] text-secondary-foreground"
								>
									{tag}
								</span>
							))}
						</div>
					</FileRow>
				) : null}
			</dl>
		</div>
	);
}
