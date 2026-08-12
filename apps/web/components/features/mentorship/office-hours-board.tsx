import { ArrowRight } from 'lucide-react';

import type { OfficeHoursEntry } from '@/types/mentor';
import { formatSlotCompact } from '@/utils/format-slot-time';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';

import { BookingDrawer } from './booking-drawer';

interface OfficeHoursBoardProps {
	entries: OfficeHoursEntry[];
}

export function OfficeHoursBoard({ entries }: OfficeHoursBoardProps) {
	if (entries.length === 0) return null;

	return (
		<div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_100%_at_100%_0%,black_0%,transparent_70%)] bg-size-[20px_20px]"
			/>

			<div className="relative flex items-center gap-2 border-b border-border px-5 py-3">
				<span className="relative flex size-1.5">
					<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
					<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
				</span>
				<span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
					Office hours, next open slots
				</span>
			</div>

			<ul className="relative divide-y divide-border">
				{entries.map(({ mentor, slot }) => (
					<li key={mentor.slug}>
						<BookingDrawer
							mentor={mentor}
							trigger={
								<button
									type="button"
									className="flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-secondary/40"
								>
									<Avatar size="sm">
										<AvatarFallback className="bg-primary/10 font-heading text-xs text-primary">
											{getInitials(mentor.name)}
										</AvatarFallback>
									</Avatar>
									<div className="min-w-0 flex-1">
										<p className="truncate font-heading text-sm font-semibold text-foreground">
											{mentor.name}
										</p>
										<p className="truncate text-xs text-muted-foreground">
											{mentor.headline}
										</p>
									</div>
									<span className="shrink-0 font-mono text-xs font-medium text-primary tabular-nums">
										{formatSlotCompact(slot.startAt)}
									</span>
									<ArrowRight className="size-3.5 shrink-0 text-muted-foreground" />
								</button>
							}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
