'use client';

import { ProductStage } from '@/enums/product';
import type { ProductListItem } from '@/types/product';
import { productStageLabels } from '@/utils/labels';
import { cn } from '@workspace/ui/lib/utils';

interface ProductStageRailProps {
	products: ProductListItem[];
	activeStage: ProductStage | 'ALL';
	onToggle: (stage: ProductStage) => void;
}

const pipelineStages = [
	ProductStage.IDEA,
	ProductStage.MVP,
	ProductStage.BETA,
	ProductStage.LIVE
];

const branchStages = [ProductStage.PAUSED, ProductStage.SUNSET];

export function ProductStageRail({
	products,
	activeStage,
	onToggle
}: ProductStageRailProps) {
	const counts = products.reduce(
		(acc, product) => {
			acc[product.stage] += 1;
			return acc;
		},
		{
			[ProductStage.IDEA]: 0,
			[ProductStage.MVP]: 0,
			[ProductStage.BETA]: 0,
			[ProductStage.LIVE]: 0,
			[ProductStage.PAUSED]: 0,
			[ProductStage.SUNSET]: 0
		} as Record<ProductStage, number>
	);

	function renderStage(stage: ProductStage, isBranch: boolean) {
		const isActive = activeStage === stage;
		const count = counts[stage];

		return (
			<button
				key={stage}
				type="button"
				onClick={() => onToggle(stage)}
				aria-pressed={isActive}
				className={cn(
					'flex flex-col items-center gap-1.5 border-b-2 px-3 py-4 text-center transition-colors sm:px-5',
					isBranch
						? 'bg-muted/30 hover:bg-muted/50'
						: 'bg-card hover:bg-secondary/60',
					isActive ? 'border-primary' : 'border-transparent'
				)}
			>
				<span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
					{stage === ProductStage.LIVE && count > 0 ? (
						<span className="relative flex size-1.5">
							<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
							<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
						</span>
					) : null}
					{productStageLabels[stage]}
				</span>
				<span
					className={cn(
						'font-mono text-xl font-medium tabular-nums sm:text-2xl',
						isActive ? 'text-primary' : 'text-foreground'
					)}
				>
					{count}
				</span>
			</button>
		);
	}

	return (
		<div
			role="group"
			aria-label="Filter products by stage"
			className="relative w-full overflow-hidden rounded-2xl border border-border bg-card"
		>
			<div className="flex items-center justify-between border-b border-border px-5 py-3">
				<span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
					Where products stand
				</span>
				<span className="font-mono text-[11px] text-muted-foreground">
					{products.length} total
				</span>
			</div>

			<div className="grid grid-cols-3 gap-px bg-border sm:grid-cols-6">
				{pipelineStages.map((stage) => renderStage(stage, false))}
				{branchStages.map((stage) => renderStage(stage, true))}
			</div>
		</div>
	);
}
