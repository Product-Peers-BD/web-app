'use client';

import { Check, Clock, Eye, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Reveal } from '@/components/snippets/reveal/reveal';
import type { CaseStudyDetail } from '@/types/case-study';
import {
	formatCaseStudyDate,
	formatCompactCount
} from '@/utils/format-case-study-date';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

interface CaseStudyAuthorBarProps {
	caseStudy: CaseStudyDetail;
}

export function CaseStudyAuthorBar({ caseStudy }: CaseStudyAuthorBarProps) {
	const [isFollowing, setIsFollowing] = useState(false);

	return (
		<Reveal>
			<div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
				<Link
					href={`/u/${caseStudy.author.slug}`}
					className="group flex min-w-0 items-center gap-3"
				>
					<Avatar size="lg">
						<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
							{getInitials(caseStudy.author.name)}
						</AvatarFallback>
					</Avatar>
					<div className="min-w-0">
						<div className="flex items-center gap-1.5">
							<p className="truncate font-heading text-sm font-semibold text-foreground group-hover:text-primary">
								{caseStudy.author.name}
							</p>
							{caseStudy.author.isMentor ? (
								<Badge className="h-4 rounded-sm px-1.5 text-[9px] tracking-wide uppercase">
									Mentor
								</Badge>
							) : null}
						</div>
						<p className="truncate text-xs text-muted-foreground">
							{caseStudy.author.title}
						</p>
					</div>
				</Link>

				<Button
					variant={isFollowing ? 'outline' : 'default'}
					size="sm"
					onClick={() => setIsFollowing((value) => !value)}
				>
					{isFollowing ? (
						<>
							<Check className="size-3.5" />
							Following
						</>
					) : (
						<>
							<UserPlus className="size-3.5" />
							Follow
						</>
					)}
				</Button>
			</div>

			<div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground uppercase">
				<span className="inline-flex items-center gap-1.5">
					<Clock className="size-3.5" />
					{caseStudy.readTimeMinutes} min read
				</span>
				<span className="inline-flex items-center gap-1.5">
					<Eye className="size-3.5" />
					{formatCompactCount(caseStudy.viewCount)} views
				</span>
				<span>{formatCaseStudyDate(caseStudy.publishedAt)}</span>
			</div>
		</Reveal>
	);
}
