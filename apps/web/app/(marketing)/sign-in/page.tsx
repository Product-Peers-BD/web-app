import type { Metadata } from 'next';

import { AuthBackground } from '@/components/features/auth/auth-background';
import { AuthCard } from '@/components/features/auth/auth-card';

export const metadata: Metadata = {
	title: 'Sign In — Product Peers BD',
	description: 'Sign in to Product Peers BD with Google or LinkedIn.'
};

// TODO: redirect back to the originating page post-login, or Member Dashboard Overview if arrived directly, once session/auth state exists.
export default function SignInPage() {
	return (
		<section className="relative isolate flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8">
			<AuthBackground />
			<div className="relative">
				<AuthCard
					eyebrow="Welcome back"
					title="Sign in to Product Peers BD"
					description="Pick up where you left off."
					footerPrompt="New here?"
					footerLinkLabel="Create an account"
					footerLinkHref="/register"
					showLegalNote={false}
				/>
			</div>
		</section>
	);
}
