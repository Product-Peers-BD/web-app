import Link from 'next/link';

import { cn } from '@workspace/ui/lib/utils';

interface AuthLegalNoteProps {
	className?: string;
}

export function AuthLegalNote({ className }: AuthLegalNoteProps) {
	return (
		<p className={cn('text-xs text-muted-foreground', className)}>
			By continuing, you agree to our{' '}
			<Link
				href="/terms-and-conditions"
				className="text-foreground underline underline-offset-2 hover:text-primary"
			>
				Terms &amp; Conditions
			</Link>{' '}
			and{' '}
			<Link
				href="/privacy-policy"
				className="text-foreground underline underline-offset-2 hover:text-primary"
			>
				Privacy Policy
			</Link>
			.
		</p>
	);
}
