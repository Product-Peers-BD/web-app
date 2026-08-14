import { Crown } from 'lucide-react';
import Link from 'next/link';

import type { ContestTeam } from '@/types/contest';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';

import { ContestDetailSection } from './contest-detail-section';

interface ContestTeamsProps {
	teams: ContestTeam[];
}

export function ContestTeams({ teams }: ContestTeamsProps) {
	if (teams.length === 0) return null;

	return (
		<ContestDetailSection title={`Teams · ${teams.length} competing`}>
			<div className="grid gap-4 sm:grid-cols-2">
				{teams.map((team) => (
					<div
						key={team.slug}
						className="rounded-xl border border-border bg-card p-4"
					>
						<div className="flex items-center justify-between gap-2">
							<Link
								href={`/t/${team.slug}`}
								className="flex min-w-0 items-center gap-2.5"
							>
								<Avatar>
									<AvatarFallback className="bg-primary/10 font-heading text-xs text-primary">
										{getInitials(team.name)}
									</AvatarFallback>
								</Avatar>
								<p className="truncate font-heading text-sm font-semibold text-foreground hover:underline">
									{team.name}
								</p>
							</Link>
							<Badge
								variant="outline"
								className="shrink-0 rounded-sm border-border font-mono text-[10px] text-muted-foreground uppercase"
							>
								{team.members.length} member
								{team.members.length === 1 ? '' : 's'}
							</Badge>
						</div>

						<ul className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3">
							{team.members.map((member) => (
								<li
									key={member.slug}
									className="flex items-center gap-1.5"
								>
									<Avatar size="sm">
										<AvatarFallback className="bg-secondary font-mono text-[9px] text-secondary-foreground">
											{getInitials(member.name)}
										</AvatarFallback>
									</Avatar>
									<Link
										href={`/u/${member.slug}`}
										className="truncate text-xs text-foreground hover:underline"
									>
										{member.name}
									</Link>
									{member.isLeader ? (
										<Crown className="size-3 shrink-0 text-accent" />
									) : null}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</ContestDetailSection>
	);
}
