import Link from 'next/link';

import { Logo } from '@/components/snippets/logo/logo';
import { Reveal } from '@/components/snippets/reveal/reveal';

import { AuthLegalNote } from './auth-legal-note';
import { OauthButtons } from './oauth-buttons';

interface AuthCardProps {
	eyebrow: string;
	title: string;
	description: string;
	footerPrompt: string;
	footerLinkLabel: string;
	footerLinkHref: string;
	showLegalNote?: boolean;
}

export function AuthCard({
	eyebrow,
	title,
	description,
	footerPrompt,
	footerLinkLabel,
	footerLinkHref,
	showLegalNote = true
}: AuthCardProps) {
	return (
		<div className="w-full max-w-sm">
			<Reveal trigger="mount">
				<Logo
					variant="mark"
					className="h-9"
				/>
			</Reveal>

			<Reveal
				trigger="mount"
				delay={80}
				className="mt-8"
			>
				<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
					{eyebrow}
				</p>
				<h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
					{title}
				</h1>
				<p className="mt-3 text-sm text-muted-foreground">
					{description}
				</p>
			</Reveal>

			<Reveal
				trigger="mount"
				delay={160}
				className="mt-8"
			>
				<OauthButtons />
			</Reveal>

			{showLegalNote ? (
				<Reveal
					trigger="mount"
					delay={220}
					className="mt-5"
				>
					<AuthLegalNote />
				</Reveal>
			) : null}

			<Reveal
				trigger="mount"
				delay={280}
				className="mt-8 border-t border-border pt-6"
			>
				<p className="text-sm text-muted-foreground">
					{footerPrompt}{' '}
					<Link
						href={footerLinkHref}
						className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
					>
						{footerLinkLabel}
					</Link>
				</p>
			</Reveal>
		</div>
	);
}
