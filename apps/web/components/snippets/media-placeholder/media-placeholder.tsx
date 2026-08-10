import Image from 'next/image';

import { cn } from '@workspace/ui/lib/utils';

interface MediaPlaceholderProps {
	className?: string;
}

export function MediaPlaceholder({ className }: MediaPlaceholderProps) {
	return (
		<div
			className={cn(
				'relative overflow-hidden rounded-lg bg-gradient-to-br from-secondary via-secondary to-muted',
				className
			)}
		>
			<div className="absolute -right-6 -bottom-8 h-24 w-19 rotate-[8deg] opacity-[0.16]">
				<Image
					src="/logo/mark.svg"
					alt=""
					fill
					className="object-contain"
				/>
			</div>
		</div>
	);
}
