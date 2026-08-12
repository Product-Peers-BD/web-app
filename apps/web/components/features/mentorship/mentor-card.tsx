import Link from 'next/link';

import type { MentorListItem } from '@/types/mentor';
import { formatSlotCompact } from '@/utils/format-slot-time';
import { getInitials } from '@/utils/get-initials';
import { getNextSlotForMentor } from '@/utils/get-upcoming-office-hours';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BookingDrawer } from './booking-drawer';

interface MentorCardProps {
	mentor: MentorListItem;
	className?: string;
}

export function MentorCard({ mentor, className }: MentorCardProps) {
	const visibleSkills = mentor.skills.slice(0, 3);
	const nextSlot = getNextSlotForMentor(mentor);

	return (
		<article
			id={mentor.slug}
			className={cn(
				'flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5',
				className
			)}
		>
			<div className="flex items-start gap-3">
				<Avatar size="lg">
					<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
						{getInitials(mentor.name)}
					</AvatarFallback>
				</Avatar>
				<div className="min-w-0 flex-1">
					<h3 className="truncate font-heading text-base font-semibold text-foreground">
						{mentor.name}
					</h3>
					<p className="truncate text-xs text-muted-foreground">
						{mentor.headline}
					</p>
				</div>
			</div>

			<div className="flex flex-wrap gap-1.5">
				{visibleSkills.map((skill) => (
					<Badge
						key={skill}
						variant="outline"
						className="rounded-sm border-border font-mono text-[10px] text-muted-foreground"
					>
						{skill}
					</Badge>
				))}
			</div>

			<div className="mt-auto flex flex-col gap-3">
				<div className="flex items-center justify-between gap-2 border-t border-border pt-3">
					<span className="text-[11px] text-muted-foreground">
						{mentor.isPaid && mentor.priceBdt
							? `৳${mentor.priceBdt} / session`
							: 'Free session'}
					</span>
					{nextSlot ? (
						<span className="font-mono text-[11px] font-medium text-primary tabular-nums">
							Next: {formatSlotCompact(nextSlot.startAt)}
						</span>
					) : (
						<span className="font-mono text-[11px] text-muted-foreground">
							No open slots
						</span>
					)}
				</div>

				<div className="flex items-center gap-2">
					<Button
						asChild
						variant="outline"
						size="sm"
						className="flex-1"
					>
						<Link href={`/u/${mentor.slug}`}>View Profile</Link>
					</Button>
					<BookingDrawer mentor={mentor} />
				</div>
			</div>
		</article>
	);
}
