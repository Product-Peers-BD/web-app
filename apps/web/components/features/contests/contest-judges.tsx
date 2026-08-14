import Link from 'next/link';

import type { ContestJudge } from '@/types/contest';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';

import { ContestDetailSection } from './contest-detail-section';

interface ContestJudgesProps {
	judges: ContestJudge[];
}

export function ContestJudges({ judges }: ContestJudgesProps) {
	if (judges.length === 0) return null;

	return (
		<ContestDetailSection title="Judges">
			<div className="grid gap-4 sm:grid-cols-2">
				{judges.map((judge) => (
					<Link
						key={judge.slug}
						href={`/u/${judge.slug}`}
						className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/40"
					>
						<Avatar size="lg">
							<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
								{getInitials(judge.name)}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0">
							<p className="font-heading text-sm font-semibold text-foreground group-hover:underline">
								{judge.name}
							</p>
							<p className="mt-0.5 text-xs text-muted-foreground">
								{judge.title}
							</p>
						</div>
					</Link>
				))}
			</div>
		</ContestDetailSection>
	);
}
