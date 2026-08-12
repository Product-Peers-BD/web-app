'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { CountdownTimer } from '@/components/snippets/countdown-timer/countdown-timer';
import { ContestStatus } from '@/enums/contest';
import type { ContestDetail } from '@/types/contest';
import { formatEventDateLong } from '@/utils/format-event-date';
import { getContestStatus } from '@/utils/get-contest-status';
import { getRegistrationState } from '@/utils/get-event-status';
import { Button } from '@workspace/ui/components/button';

interface ContestRegistrationPanelProps {
	contest: ContestDetail;
}

export function ContestRegistrationPanel({
	contest
}: ContestRegistrationPanelProps) {
	const status = getContestStatus(contest.startAt, contest.endAt);

	if (status === ContestStatus.PAST) return null;

	const { capacityFull, notYetOpen, closedByAdmin, isOpen } =
		getRegistrationState({ ...contest, hasRegistration: true });

	const seatsPercent =
		contest.capacity !== undefined
			? Math.min(
					100,
					Math.round(
						((contest.seatsTaken ?? 0) / contest.capacity) * 100
					)
				)
			: null;

	return (
		<div className="rounded-xl border border-border bg-card p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Registration
			</p>

			<div className="mt-2 flex items-baseline justify-between gap-2">
				<p className="font-heading text-2xl font-semibold text-foreground">
					{contest.isPremium && contest.priceBdt
						? `৳${contest.priceBdt.toLocaleString()}`
						: 'Free'}
				</p>
				<span
					className={`font-mono text-[10px] tracking-[0.1em] uppercase ${
						isOpen ? 'text-primary' : 'text-muted-foreground'
					}`}
				>
					{closedByAdmin
						? 'Closed'
						: capacityFull
							? 'Sold out'
							: notYetOpen
								? 'Opens soon'
								: 'Open'}
				</span>
			</div>

			{seatsPercent !== null ? (
				<div className="mt-4">
					<div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase">
						<span>
							{contest.seatsTaken ?? 0}/{contest.capacity}{' '}
							participants
						</span>
						<span>{seatsPercent}% full</span>
					</div>
					<div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
						<div
							className="h-full rounded-full bg-primary"
							style={{ width: `${seatsPercent}%` }}
						/>
					</div>
				</div>
			) : null}

			<div className="mt-5">
				{notYetOpen && contest.registrationOpensAt ? (
					<div>
						<p className="text-xs text-muted-foreground">
							Registration opens in
						</p>
						<CountdownTimer
							target={contest.registrationOpensAt}
							className="mt-2"
						/>
						<p className="mt-3 text-xs text-muted-foreground">
							{formatEventDateLong(contest.registrationOpensAt)}
						</p>
					</div>
				) : closedByAdmin || capacityFull ? (
					<div className="rounded-lg border border-dashed border-border px-4 py-3 text-center">
						<p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
							Registration{' '}
							{capacityFull ? 'closed / sold out' : 'closed'}
						</p>
					</div>
				) : (
					<>
						<Button
							asChild
							className="w-full"
							size="lg"
						>
							<Link href="/sign-in">
								Register
								<ArrowRight className="size-3.5" />
							</Link>
						</Button>
						<p className="mt-2.5 text-center text-xs text-muted-foreground">
							Log in to register — takes 30 seconds
						</p>
					</>
				)}
			</div>

			{isOpen && contest.registrationQuestions.length > 0 ? (
				<p className="mt-4 text-xs text-muted-foreground">
					Includes {contest.registrationQuestions.length} quick
					question
					{contest.registrationQuestions.length === 1 ? '' : 's'}{' '}
					during signup.
				</p>
			) : null}
		</div>
	);
}
