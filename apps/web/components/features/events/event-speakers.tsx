import Link from 'next/link';

import type { EventSpeaker } from '@/types/event';
import { getInitials } from '@/utils/get-initials';
import { speakerRoleLabels } from '@/utils/labels';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';

import { EventDetailSection } from './event-detail-section';

interface EventSpeakersProps {
	speakers: EventSpeaker[];
}

export function EventSpeakers({ speakers }: EventSpeakersProps) {
	if (speakers.length === 0) return null;

	return (
		<EventDetailSection title="Speakers">
			<div className="grid gap-4 sm:grid-cols-2">
				{speakers.map((speaker) => (
					<Link
						key={speaker.slug}
						href={`/u/${speaker.slug}`}
						className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/40"
					>
						<Avatar size="lg">
							<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
								{getInitials(speaker.name)}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0">
							<div className="flex flex-wrap items-center gap-1.5">
								<p className="font-heading text-sm font-semibold text-foreground group-hover:underline">
									{speaker.name}
								</p>
								<Badge
									variant="outline"
									className="rounded-sm border-border font-mono text-[9px] tracking-wide text-muted-foreground uppercase"
								>
									{speakerRoleLabels[speaker.role]}
								</Badge>
							</div>
							<p className="mt-0.5 text-xs text-muted-foreground">
								{speaker.title}
							</p>
							{speaker.sessionTopic ? (
								<p className="mt-1.5 text-xs text-foreground">
									{speaker.sessionTopic}
								</p>
							) : null}
						</div>
					</Link>
				))}
			</div>
		</EventDetailSection>
	);
}
