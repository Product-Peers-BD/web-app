import { getInitials } from '@/utils/get-initials';
import { cn } from '@workspace/ui/lib/utils';

interface SponsorSealProps {
	name: string;
	featured?: boolean;
}

export function SponsorSeal({ name, featured = false }: SponsorSealProps) {
	const initials = getInitials(name);

	if (featured) {
		return (
			<span
				aria-hidden
				className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground ring-4 ring-primary/15"
			>
				{initials}
			</span>
		);
	}

	return (
		<span
			aria-hidden
			className={cn(
				'inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card font-heading text-sm font-semibold text-foreground/70',
				'transition-colors group-hover:border-primary/40 group-hover:text-primary'
			)}
		>
			{initials}
		</span>
	);
}
