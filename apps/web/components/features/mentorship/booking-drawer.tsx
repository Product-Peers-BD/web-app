'use client';

import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { BookingStatus } from '@/enums/mentor';
import type { MentorListItem, MentorSlot } from '@/types/mentor';
import { formatSlotDayLabel, formatSlotTime } from '@/utils/format-slot-time';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Button } from '@workspace/ui/components/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@workspace/ui/components/sheet';
import { Textarea } from '@workspace/ui/components/textarea';
import { cn } from '@workspace/ui/lib/utils';

interface BookingDrawerProps {
	mentor: MentorListItem;
	trigger?: React.ReactNode;
}

const bookingStatusLabel: Record<BookingStatus, string> = {
	[BookingStatus.REQUESTED]: 'Requested',
	[BookingStatus.ACCEPTED]: 'Accepted',
	[BookingStatus.DENIED]: 'Denied',
	[BookingStatus.UPCOMING]: 'Upcoming',
	[BookingStatus.COMPLETED]: 'Completed',
	[BookingStatus.NO_SHOW]: 'No-show',
	[BookingStatus.CANCELLED]: 'Cancelled'
};

function groupSlotsByDay(
	slots: MentorSlot[]
): { dayLabel: string; slots: MentorSlot[] }[] {
	const sorted = [...slots].sort(
		(a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime()
	);

	const groups: { dayLabel: string; slots: MentorSlot[] }[] = [];
	for (const slot of sorted) {
		const dayLabel = formatSlotDayLabel(slot.startAt);
		const lastGroup = groups[groups.length - 1];
		if (lastGroup && lastGroup.dayLabel === dayLabel) {
			lastGroup.slots.push(slot);
		} else {
			groups.push({ dayLabel, slots: [slot] });
		}
	}
	return groups;
}

export function BookingDrawer({ mentor, trigger }: BookingDrawerProps) {
	const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const dayGroups = groupSlotsByDay(mentor.slots);
	const selectedSlot = mentor.slots.find(
		(slot) => slot.id === selectedSlotId
	);
	const showPicker = !mentor.existingBooking && !submitted;

	function handleOpenChange(open: boolean) {
		if (!open) {
			setSelectedSlotId(null);
			setMessage('');
			setSubmitted(false);
		}
	}

	return (
		<Sheet onOpenChange={handleOpenChange}>
			<SheetTrigger asChild>
				{trigger ?? (
					<Button
						variant="accent"
						size="sm"
						className="flex-1"
					>
						Book Session
					</Button>
				)}
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader>
					<Link
						href={`/u/${mentor.slug}`}
						className="group flex w-fit items-center gap-3"
					>
						<Avatar size="lg">
							<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
								{getInitials(mentor.name)}
							</AvatarFallback>
						</Avatar>
						<div>
							<SheetTitle className="group-hover:underline">
								{mentor.name}
							</SheetTitle>
							<SheetDescription>
								{mentor.headline}
							</SheetDescription>
						</div>
					</Link>
				</SheetHeader>

				<div className="flex flex-col gap-6 px-4">
					{mentor.existingBooking ? (
						<div className="rounded-xl border border-dashed border-border px-4 py-5 text-center">
							<p className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
								{
									bookingStatusLabel[
										mentor.existingBooking.status
									]
								}
							</p>
							<p className="mt-2 text-sm text-foreground">
								You already have a session with {mentor.name}{' '}
								for {mentor.existingBooking.slotLabel}.
							</p>
							<p className="mt-2 text-xs text-muted-foreground">
								Resolve that booking before requesting a new
								slot with this mentor.
							</p>
							<Button
								asChild
								variant="outline"
								size="sm"
								className="mt-4"
							>
								<Link href="/dashboard/mentorship">
									View booking status
								</Link>
							</Button>
						</div>
					) : submitted && selectedSlot ? (
						<div className="rounded-xl border border-dashed border-border px-4 py-5 text-center">
							<CircleCheck className="mx-auto size-6 text-primary" />
							<p className="mt-3 text-sm text-foreground">
								Request sent — you&apos;ll be notified when{' '}
								{mentor.name} responds.
							</p>
							<Button
								asChild
								variant="outline"
								size="sm"
								className="mt-4"
							>
								<Link href="/dashboard/mentorship">
									Track this request
								</Link>
							</Button>
						</div>
					) : (
						<>
							<div className="flex flex-col gap-3">
								<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
									Pick a time ·{' '}
									{mentor.sessionDurationMinutes} min
								</p>
								{dayGroups.map((group) => (
									<div
										key={group.dayLabel}
										className="flex flex-col gap-2"
									>
										<p className="text-xs font-medium text-foreground">
											{group.dayLabel}
										</p>
										<div className="flex flex-wrap gap-2">
											{group.slots.map((slot) => (
												<button
													key={slot.id}
													type="button"
													onClick={() =>
														setSelectedSlotId(
															slot.id
														)
													}
													aria-pressed={
														selectedSlotId ===
														slot.id
													}
													className={cn(
														'rounded-lg border px-3 py-1.5 font-mono text-xs tabular-nums transition-colors',
														selectedSlotId ===
															slot.id
															? 'border-primary bg-primary text-primary-foreground'
															: 'border-border bg-background text-foreground hover:bg-muted'
													)}
												>
													{formatSlotTime(
														slot.startAt
													)}
												</button>
											))}
										</div>
									</div>
								))}
							</div>

							<div className="flex flex-col gap-2">
								<label
									htmlFor="mentorship-message"
									className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase"
								>
									Message (optional)
								</label>
								<Textarea
									id="mentorship-message"
									value={message}
									onChange={(event) =>
										setMessage(event.target.value)
									}
									placeholder={`What do you want feedback on from ${mentor.name}?`}
									className="min-h-24"
								/>
							</div>

							{mentor.isPaid && mentor.priceBdt ? (
								<p className="text-xs text-muted-foreground">
									This is a paid session — ৳{mentor.priceBdt}{' '}
									is collected after {mentor.name} accepts
									your request.
								</p>
							) : null}
						</>
					)}
				</div>

				{showPicker ? (
					<SheetFooter>
						<Button
							onClick={() => setSubmitted(true)}
							disabled={!selectedSlot}
							variant="accent"
						>
							Request Session
						</Button>
						<SheetClose asChild>
							<Button variant="outline">Cancel</Button>
						</SheetClose>
					</SheetFooter>
				) : null}
			</SheetContent>
		</Sheet>
	);
}
