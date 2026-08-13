import Link from 'next/link';

import { Reveal } from '@/components/snippets/reveal/reveal';
import { getInitials } from '@/utils/get-initials';
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount
} from '@workspace/ui/components/avatar';
import { Button } from '@workspace/ui/components/button';

const recentJoiners = [
	'Mahin Islam',
	'Sadia Afrin',
	'Imran Kabir',
	'Nusrat Jahan'
];

export function JoinCommunityHero() {
	return (
		<section className="relative overflow-hidden bg-background">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)] bg-size-[24px_24px]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -top-48 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
			/>

			<div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
				<Reveal trigger="mount">
					<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
						Join the community
					</p>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={90}
					className="mt-4"
				>
					<h1 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl">
						You don&apos;t have to figure
						<br />
						product out alone.
					</h1>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={180}
					className="mt-6"
				>
					<p className="max-w-xl text-lg text-muted-foreground">
						One free account gets you into every room: events,
						mentors, contests, and the case studies people usually
						keep to themselves.
					</p>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={270}
					className="mt-9"
				>
					<div className="flex flex-col gap-3 sm:flex-row">
						<Button
							asChild
							variant="accent"
							size="lg"
							className="h-11 px-6 text-base"
						>
							<Link href="/register">Join Now</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="h-11 px-6 text-base"
						>
							<Link href="/events">See What&apos;s On</Link>
						</Button>
					</div>
				</Reveal>

				<Reveal
					trigger="mount"
					delay={340}
					className="mt-8"
				>
					<div className="flex items-center gap-3">
						<AvatarGroup>
							{recentJoiners.map((name) => (
								<Avatar key={name}>
									<AvatarFallback className="bg-primary/10 font-mono text-[11px] text-primary">
										{getInitials(name)}
									</AvatarFallback>
								</Avatar>
							))}
							<AvatarGroupCount className="font-mono text-[11px]">
								+82
							</AvatarGroupCount>
						</AvatarGroup>
						<p className="text-left text-sm text-muted-foreground">
							82 product people joined
							<br className="sm:hidden" /> this month.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
