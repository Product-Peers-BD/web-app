import { Mail } from 'lucide-react';

import { StatusConsole } from '@/components/features/coming-soon/status-console';
import { Logo } from '@/components/snippets/logo/logo';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { siteConfig } from '@/configs/site';
import { socialLinks } from '@/configs/social';
import { getLaunchDate } from '@/utils/get-launch-date';
import { Button } from '@workspace/ui/components/button';

export default function ComingSoonPage() {
	const launchDate = getLaunchDate();

	return (
		<div className="flex min-h-svh flex-col bg-background">
			<section className="relative flex flex-1 items-center overflow-hidden">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)] bg-size-[24px_24px]"
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute -top-48 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
				/>

				<div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
					<Reveal trigger="mount">
						<Logo
							variant="mark"
							className="h-9"
						/>
					</Reveal>

					<Reveal
						trigger="mount"
						delay={90}
						className="mt-8"
					>
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] tracking-[0.1em] whitespace-nowrap text-foreground uppercase sm:text-xs sm:tracking-[0.15em]">
							<span className="relative flex size-2 shrink-0">
								<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
								<span className="relative inline-flex size-2 rounded-full bg-primary" />
							</span>
							Live — Bangladesh&apos;s product community
						</div>
					</Reveal>

					<Reveal
						trigger="mount"
						delay={180}
						className="mt-6"
					>
						<h1 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl">
							The community&apos;s live.
							<br />
							<span className="text-primary">
								The platform&apos;s next.
							</span>
						</h1>
					</Reveal>

					<Reveal
						trigger="mount"
						delay={270}
						className="mt-6"
					>
						<p className="max-w-lg text-lg text-muted-foreground">
							{siteConfig.name} already runs events, mentorship,
							and contests for product, business, design, and
							analytics people across Bangladesh — on LinkedIn,
							WhatsApp, and spreadsheets. productpeersbd.org is
							where that gets a permanent home.
						</p>
					</Reveal>

					<Reveal
						trigger="mount"
						delay={360}
						className="mt-10 w-full"
					>
						<div className="flex justify-center">
							<StatusConsole
								launchDate={
									launchDate ? launchDate.toISOString() : null
								}
							/>
						</div>
					</Reveal>

					<Reveal
						trigger="mount"
						delay={450}
						className="mt-10 flex flex-col items-center gap-5"
					>
						<div className="flex flex-col items-center gap-3">
							<span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
								Follow the build
							</span>
							<div className="flex items-center gap-4">
								{socialLinks.map((social, index) => (
									<span
										key={social.href}
										className="flex items-center gap-4"
									>
										{index > 0 && (
											<span
												aria-hidden
												className="text-border"
											>
												·
											</span>
										)}
										<a
											href={social.href}
											target="_blank"
											rel="noreferrer"
											className="font-mono text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
										>
											{social.label}
										</a>
									</span>
								))}
							</div>
						</div>

						<Button
							asChild
							variant="outline"
							size="sm"
							className="gap-2"
						>
							<a href={`mailto:${siteConfig.contactEmail}`}>
								<Mail className="size-3.5" />
								{siteConfig.contactEmail}
							</a>
						</Button>
					</Reveal>
				</div>
			</section>

			<footer className="border-t border-white/10 bg-[#0f1b19] px-4 py-6 text-center sm:px-6 lg:px-8">
				<p className="font-mono text-xs text-[#5fa89f]">
					© {new Date().getFullYear()} {siteConfig.name} — built by
					the community.
				</p>
			</footer>
		</div>
	);
}
