'use client';

import { Check, Link2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@workspace/ui/components/button';

interface ContestShareProps {
	title: string;
}

function FacebookIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			className="size-3.5"
			aria-hidden
		>
			<path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.95 2 14.66 2 11.98 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
		</svg>
	);
}

function LinkedinIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			className="size-3.5"
			aria-hidden
		>
			<path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.5 20h-3.37v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.73V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
		</svg>
	);
}

export function ContestShare({ title }: ContestShareProps) {
	const [copied, setCopied] = useState(false);

	function getShareUrl() {
		return typeof window !== 'undefined' ? window.location.href : '';
	}

	async function handleCopy() {
		await navigator.clipboard.writeText(getShareUrl());
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<div className="flex items-center gap-4 border-t border-border pt-8">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Share
			</p>
			<div className="flex items-center gap-2">
				<Button
					asChild
					variant="outline"
					size="icon-sm"
				>
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Share ${title} on Facebook`}
					>
						<FacebookIcon />
					</a>
				</Button>
				<Button
					asChild
					variant="outline"
					size="icon-sm"
				>
					<a
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Share ${title} on LinkedIn`}
					>
						<LinkedinIcon />
					</a>
				</Button>
				<Button
					variant="outline"
					size="icon-sm"
					onClick={handleCopy}
					aria-label="Copy link"
				>
					{copied ? (
						<Check className="size-3.5 text-primary" />
					) : (
						<Link2 className="size-3.5" />
					)}
				</Button>
			</div>
		</div>
	);
}
