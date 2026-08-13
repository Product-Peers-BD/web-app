'use client';

import Link from 'next/link';
import { useState } from 'react';

import { ChannelSelector } from '@/components/features/contact-us/channel-selector';
import { ContactForm } from '@/components/features/contact-us/contact-form';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { socialLinks } from '@/configs/footer';
import { siteConfig } from '@/configs/site';
import { contactChannels } from '@/constants/contact';
import { ContactType } from '@/enums/contact';

interface ContactSectionProps {
	initialType: ContactType;
}

export function ContactSection({ initialType }: ContactSectionProps) {
	const [contactType, setContactType] = useState<ContactType>(initialType);
	const activeChannel = contactChannels.find(
		(channel) => channel.type === contactType
	);

	return (
		<section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
				<div className="flex flex-col gap-8 lg:col-span-5">
					<Reveal>
						<ChannelSelector
							value={contactType}
							onChange={setContactType}
						/>
					</Reveal>

					<Reveal delay={80}>
						<p
							key={contactType}
							className="rounded-xl border border-dashed border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground motion-safe:animate-in motion-safe:duration-300 motion-safe:fade-in"
						>
							{activeChannel?.responseNote}
						</p>
					</Reveal>

					<Reveal
						delay={140}
						className="flex flex-col gap-3 border-t border-border pt-8"
					>
						<p className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
							Prefer to write directly?
						</p>
						<Link
							href={`mailto:${siteConfig.contactEmail}`}
							className="font-mono text-base text-foreground underline-offset-4 hover:text-primary hover:underline"
						>
							{siteConfig.contactEmail}
						</Link>
						<div className="mt-1 flex flex-wrap items-center gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.href}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-primary"
								>
									{social.label}
								</a>
							))}
						</div>
					</Reveal>
				</div>

				<Reveal
					delay={120}
					className="lg:col-span-7"
				>
					<ContactForm contactType={contactType} />
				</Reveal>
			</div>
		</section>
	);
}
