import {
	ExternalLink,
	FileText,
	Play,
	Presentation,
	Trophy
} from 'lucide-react';
import Link from 'next/link';

import type { ContestSubmission, ContestWinnerGroup } from '@/types/contest';
import { getInitials } from '@/utils/get-initials';
import { winnerTierLabels } from '@/utils/labels';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';

import { ContestDetailSection } from './contest-detail-section';

interface ContestWinnersProps {
	winners: ContestWinnerGroup[];
	showSubmission: boolean;
}

function SubmissionLinks({ submission }: { submission: ContestSubmission }) {
	const links = [
		submission.documentUrl && {
			label: 'Supporting doc',
			href: submission.documentUrl,
			icon: FileText
		},
		submission.prototypeUrl && {
			label: 'Prototype',
			href: submission.prototypeUrl,
			icon: ExternalLink
		},
		submission.presentationUrl && {
			label: 'Presentation',
			href: submission.presentationUrl,
			icon: Presentation
		},
		submission.videoUrl && {
			label: 'Video',
			href: submission.videoUrl,
			icon: Play
		}
	].filter((link) => !!link);

	return (
		<div className="mt-3 rounded-lg border border-border bg-secondary/30 p-3">
			<p className="font-heading text-sm font-semibold text-foreground">
				{submission.title}
			</p>
			<p className="mt-1 text-xs text-muted-foreground">
				{submission.summary}
			</p>
			{links.length > 0 ? (
				<div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
						>
							<link.icon className="size-3" />
							{link.label}
						</a>
					))}
				</div>
			) : null}
		</div>
	);
}

export function ContestWinners({
	winners,
	showSubmission
}: ContestWinnersProps) {
	if (winners.length === 0) return null;

	return (
		<ContestDetailSection title="Winners">
			<div className="flex flex-col gap-4">
				{winners.map((group) => (
					<div
						key={group.tier}
						className="rounded-xl border border-border bg-card p-5"
					>
						<Badge className="w-fit gap-1 rounded-sm bg-accent font-mono text-[10px] text-accent-foreground uppercase">
							<Trophy className="size-3" />
							{winnerTierLabels[group.tier]}
						</Badge>

						<div className="mt-4 flex flex-col gap-4">
							{group.teams.map((team) => (
								<div key={team.slug}>
									<Link
										href={`/t/${team.slug}`}
										className="flex items-center gap-2.5"
									>
										<Avatar size="lg">
											<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
												{getInitials(team.name)}
											</AvatarFallback>
										</Avatar>
										<p className="font-heading text-base font-semibold text-foreground hover:underline">
											{team.name}
										</p>
									</Link>

									{showSubmission && team.submission ? (
										<SubmissionLinks
											submission={team.submission}
										/>
									) : null}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</ContestDetailSection>
	);
}
