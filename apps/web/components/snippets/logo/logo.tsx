import Image from 'next/image';

import { cn } from '@workspace/ui/lib/utils';

interface LogoProps {
	variant?: 'mark' | 'lockup';
	className?: string;
}

export function Logo({ variant = 'lockup', className }: LogoProps) {
	if (variant === 'mark') {
		return (
			<div className={cn('relative aspect-188/239 h-8', className)}>
				<Image
					src="/logo/mark.svg"
					alt="Product Peers BD"
					fill
					priority
					className="object-contain object-left"
				/>
			</div>
		);
	}

	return (
		<div className={cn('relative aspect-628/240 h-7', className)}>
			<Image
				src="/logo/lockup-dark.svg"
				alt="Product Peers BD"
				fill
				priority
				className="object-contain object-left dark:hidden"
			/>
			<Image
				src="/logo/lockup-light.svg"
				alt="Product Peers BD"
				fill
				priority
				className="hidden object-contain object-left dark:block"
			/>
		</div>
	);
}
