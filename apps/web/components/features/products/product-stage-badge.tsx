import { ProductStage } from '@/enums/product';
import { productStageLabels } from '@/utils/labels';
import { cn } from '@workspace/ui/lib/utils';

interface ProductStageBadgeProps {
	stage: ProductStage;
	className?: string;
}

const stageStyles: Record<ProductStage, string> = {
	[ProductStage.IDEA]: 'border-border bg-card/90 text-muted-foreground',
	[ProductStage.MVP]: 'border-border bg-card/90 text-foreground',
	[ProductStage.BETA]: 'border-accent/50 bg-accent/10 text-foreground',
	[ProductStage.LIVE]:
		'border-transparent bg-primary text-primary-foreground',
	[ProductStage.PAUSED]: 'border-border bg-muted/70 text-muted-foreground',
	[ProductStage.SUNSET]:
		'border-transparent bg-destructive/10 text-destructive'
};

export function ProductStageBadge({
	stage,
	className
}: ProductStageBadgeProps) {
	return (
		<span
			className={cn(
				'inline-flex h-5 w-fit items-center gap-1.5 rounded-4xl border px-2 font-mono text-[10px] tracking-[0.12em] uppercase backdrop-blur-sm',
				stageStyles[stage],
				className
			)}
		>
			{stage === ProductStage.LIVE ? (
				<span className="relative flex size-1.5">
					<span className="absolute inline-flex size-full rounded-full bg-primary-foreground/70 motion-safe:animate-ping" />
					<span className="relative inline-flex size-1.5 rounded-full bg-primary-foreground" />
				</span>
			) : null}
			{productStageLabels[stage]}
		</span>
	);
}
