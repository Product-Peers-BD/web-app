import { Fragment } from 'react';

import { ProductStage } from '@/enums/product';
import { productStageLabels } from '@/utils/labels';
import { cn } from '@workspace/ui/lib/utils';

interface ProductStageTrackProps {
	stage: ProductStage;
	className?: string;
}

const trackStages = [
	ProductStage.IDEA,
	ProductStage.MVP,
	ProductStage.BETA,
	ProductStage.LIVE
];

export function ProductStageTrack({
	stage,
	className
}: ProductStageTrackProps) {
	if (stage === ProductStage.PAUSED || stage === ProductStage.SUNSET) {
		return null;
	}

	const currentIndex = trackStages.indexOf(stage);

	return (
		<div
			role="img"
			aria-label={`Build progress: ${productStageLabels[stage]}`}
			className={cn('flex max-w-sm items-center', className)}
		>
			{trackStages.map((trackStage, index) => (
				<Fragment key={trackStage}>
					<div className="flex flex-col items-center gap-1.5">
						<span
							className={cn(
								'size-2 rounded-full',
								index <= currentIndex
									? 'bg-primary'
									: 'bg-border'
							)}
						/>
						<span
							className={cn(
								'font-mono text-[9px] tracking-[0.1em] uppercase',
								index === currentIndex
									? 'text-primary'
									: 'text-muted-foreground'
							)}
						>
							{productStageLabels[trackStage]}
						</span>
					</div>
					{index < trackStages.length - 1 ? (
						<span
							className={cn(
								'-mt-4 h-px flex-1',
								index < currentIndex
									? 'bg-primary'
									: 'bg-border'
							)}
						/>
					) : null}
				</Fragment>
			))}
		</div>
	);
}
