import { Globe } from 'lucide-react';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden
			{...props}
		>
			<path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.5 20h-3.37v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.73V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
		</svg>
	);
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden
			{...props}
		>
			<path d="M17.53 3h3.2l-7 8 8.24 10h-6.45l-5.05-6.6L4.6 21H1.4l7.49-8.56L1 3h6.6l4.56 6.03Zm-1.12 16.17h1.77L7.68 4.73H5.78Z" />
		</svg>
	);
}

interface ProfileSocialLinksProps {
	linkedin?: string;
	twitter?: string;
	website?: string;
	name: string;
}

export function ProfileSocialIcons({
	linkedin,
	twitter,
	website,
	name
}: ProfileSocialLinksProps) {
	const links = [
		linkedin && {
			href: linkedin,
			label: `${name} on LinkedIn`,
			Icon: LinkedinIcon
		},
		twitter && { href: twitter, label: `${name} on X`, Icon: XIcon },
		website && { href: website, label: `${name}'s website`, Icon: Globe }
	].filter((link) => !!link);

	if (links.length === 0) return null;

	return (
		<div className="flex items-center gap-1.5">
			{links.map(({ href, label, Icon }) => (
				<a
					key={href}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={label}
					className="inline-flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
				>
					<Icon className="size-3.5" />
				</a>
			))}
		</div>
	);
}
