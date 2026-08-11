'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { CountdownTimer } from '@/components/snippets/countdown-timer/countdown-timer';
import { EventStatus } from '@/enums/event';
import type { EventDetail } from '@/types/event';
import { formatEventDateLong } from '@/utils/format-event-date';
import { getEventStatus, getRegistrationState } from '@/utils/get-event-status';
import { Button } from '@workspace/ui/components/button';

interface EventRegistrationPanelProps {
	event: EventDetail;
}

export function EventRegistrationPanel({ event }: EventRegistrationPanelProps) {
	const status = getEventStatus(event.startAt, event.endAt);

	if (!event.hasRegistration || status === EventStatus.PAST) return null;

	const { capacityFull, notYetOpen, closedByAdmin, isOpen } =
		getRegistrationState(event);

	const seatsPercent =
		event.capacity !== undefined
			? Math.min(
					100,
					Math.round(((event.seatsTaken ?? 0) / event.capacity) * 100)
				)
			: null;

	return (
		<div className="rounded-xl border border-border bg-card p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Registration
			</p>

			<div className="mt-2 flex items-baseline justify-between gap-2">
				<p className="font-heading text-2xl font-semibold text-foreground">
					{event.isPremium && event.priceBdt
						? `৳${event.priceBdt.toLocaleString()}`
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
							{event.seatsTaken ?? 0}/{event.capacity} seats
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
				{notYetOpen && event.registrationOpensAt ? (
					<div>
						<p className="text-xs text-muted-foreground">
							Registration opens in
						</p>
						<CountdownTimer
							target={event.registrationOpensAt}
							className="mt-2"
						/>
						<p className="mt-3 text-xs text-muted-foreground">
							{formatEventDateLong(event.registrationOpensAt)}
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

			{isOpen && event.registrationQuestions.length > 0 ? (
				<p className="mt-4 text-xs text-muted-foreground">
					Includes {event.registrationQuestions.length} quick question
					{event.registrationQuestions.length === 1 ? '' : 's'} during
					signup.
				</p>
			) : null}
		</div>
	);
}
