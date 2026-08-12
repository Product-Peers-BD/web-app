import { ArrowUpRight, Gavel, Mic, Users } from 'lucide-react';
import Link from 'next/link';

import type { MentorCredentials } from '@/types/profile';
import { Button } from '@workspace/ui/components/button';

interface MentorCredentialsCardProps {
	username: string;
	credentials: MentorCredentials;
}

export function MentorCredentialsCard({
	username,
	credentials
}: MentorCredentialsCardProps) {
	const stats = [
		{
			icon: Users,
			label: 'Sessions delivered',
			value: credentials.sessionsDelivered
		},
		{
			icon: Mic,
			label: 'Events spoken at',
			value: credentials.eventsSpoken
		},
		{
			icon: Gavel,
			label: 'Contests judged',
			value: credentials.contestsJudged
		}
	].filter((stat) => stat.value > 0);

	return (
		<div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Mentor credentials
			</p>

			<dl className="mt-3 flex flex-col divide-y divide-accent/20">
				{stats.map((stat) => (
					<div
						key={stat.label}
						className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
					>
						<dt className="inline-flex items-center gap-2 text-xs text-muted-foreground">
							<stat.icon className="size-3.5 text-accent" />
							{stat.label}
						</dt>
						<dd className="font-mono text-sm font-medium text-foreground tabular-nums">
							{stat.value}
						</dd>
					</div>
				))}
			</dl>

			<Button
				asChild
				variant="outline"
				size="sm"
				className="mt-4 w-full border-accent/40 hover:bg-accent/10"
			>
				<Link href={`/mentorship#${username}`}>
					View mentorship availability
					<ArrowUpRight className="size-3.5" />
				</Link>
			</Button>
		</div>
	);
}
