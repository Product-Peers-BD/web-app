import {
	Award,
	BookOpen,
	Calendar,
	FileText,
	LogIn,
	Rocket,
	Sparkles,
	Trophy,
	type LucideIcon
} from 'lucide-react';

import { Reveal } from '@/components/snippets/reveal/reveal';
import { communityPulse } from '@/constants/join-community';
import { ActivityType } from '@/enums/profile';
import { formatTimeAgo } from '@/utils/format-time-ago';
import { getInitials } from '@/utils/get-initials';

const pulseIcons: Partial<Record<ActivityType, LucideIcon>> = {
	[ActivityType.JOINED_PLATFORM]: LogIn,
	[ActivityType.ATTENDED_EVENT]: Calendar,
	[ActivityType.WON_CONTEST]: Trophy,
	[ActivityType.PUBLISHED_CASE_STUDY]: BookOpen,
	[ActivityType.BECAME_MENTOR]: Award,
	[ActivityType.LAUNCHED_PRODUCT]: Rocket,
	[ActivityType.PUBLISHED_ARTICLE]: FileText
};

export function CommunityPulse() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
			<Reveal className="overflow-hidden rounded-2xl border border-border bg-card">
				<div className="flex items-center gap-2 border-b border-border px-6 py-3.5">
					<span className="relative flex size-1.5">
						<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
						<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
					</span>
					<span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
						Community pulse — happening right now
					</span>
				</div>

				<ol>
					{communityPulse.map((event) => {
						const Icon = pulseIcons[event.type] ?? Sparkles;

						return (
							<li
								key={event.id}
								className="flex items-center gap-3 border-b border-border px-6 py-3 last:border-0 sm:gap-4"
							>
								<span
									aria-hidden
									className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"
								>
									<Icon
										strokeWidth={1.75}
										className="size-4"
									/>
								</span>
								<span
									aria-hidden
									className="hidden shrink-0 font-mono text-[11px] text-muted-foreground sm:inline"
								>
									{getInitials(event.actorName)}
								</span>
								<p className="min-w-0 flex-1 truncate text-sm text-foreground">
									<span className="font-medium">
										{event.actorName}
									</span>{' '}
									<span className="text-muted-foreground">
										{event.description}
									</span>
								</p>
								<span className="shrink-0 font-mono text-[11px] tracking-wide text-muted-foreground tabular-nums">
									{formatTimeAgo(event.occurredAt)}
								</span>
							</li>
						);
					})}
				</ol>
			</Reveal>
		</section>
	);
}
