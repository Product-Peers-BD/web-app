import type { Metadata } from 'next';

import { AuthBackground } from '@/components/features/auth/auth-background';
import { AuthCard } from '@/components/features/auth/auth-card';
import { MemberBadgeWall } from '@/components/features/auth/member-badge-wall';

export const metadata: Metadata = {
	title: 'Create Account — Product Peers BD',
	description:
		'Join Product Peers BD with Google or LinkedIn — one free account for events, mentorship, contests, and case studies.'
};

// TODO: redirect logged-in Members to Member Dashboard Overview once session/auth state exists.
export default function RegisterPage() {
	return (
		<section className="relative isolate flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
			<div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8">
				<AuthBackground />
				<div className="relative">
					<AuthCard
						eyebrow="Create account"
						title="Join Product Peers BD"
						description="One free account gets you into every room — events, mentors, contests, and the case studies people usually keep to themselves."
						footerPrompt="Already have an account?"
						footerLinkLabel="Sign in"
						footerLinkHref="/sign-in"
					/>
				</div>
			</div>

			<div className="lg:w-[46%] lg:shrink-0">
				<MemberBadgeWall />
			</div>
		</section>
	);
}
