import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { GoogleIcon, LinkedinIcon } from './auth-provider-icons';

interface OauthButtonsProps {
	className?: string;
}

// TODO: wire to real OAuth redirect endpoints once packages/api-services auth routes exist.
export function OauthButtons({ className }: OauthButtonsProps) {
	return (
		<div className={cn('flex flex-col gap-3', className)}>
			<Button
				type="button"
				variant="outline"
				size="lg"
				className="h-11 w-full gap-3 text-base font-medium"
			>
				<GoogleIcon className="size-4.5" />
				Continue with Google
			</Button>
			<Button
				type="button"
				variant="outline"
				size="lg"
				className="h-11 w-full gap-3 text-base font-medium"
			>
				<LinkedinIcon className="size-4.5" />
				Continue with LinkedIn
			</Button>
		</div>
	);
}
