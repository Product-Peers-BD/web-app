import { Trophy } from 'lucide-react';
import Link from 'next/link';

import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { contestPreview } from '@/constants/home';
import { ContestPreviewMode } from '@/enums/contest';
import { getInitials } from '@/utils/get-initials';
import { eventFormatLabels } from '@/utils/labels';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

export function ContestsPreview() {
	return (
		<section className="bg-secondary/40">
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Compete"
					title="Contests"
					seeAllLabel="See all Contests"
					seeAllHref="/contests"
				/>

				<div className="mt-10 grid gap-6 sm:grid-cols-2">
					{contestPreview.map((contest) => (
						<div
							key={contest.slug}
							className="flex flex-col gap-5 rounded-xl border border-border bg-card p-5 sm:flex-row"
						>
							<MediaPlaceholder className="aspect-4/3 w-full shrink-0 sm:w-48" />
							<div className="flex flex-1 flex-col">
								{contest.mode === ContestPreviewMode.WINNERS ? (
									<Badge className="w-fit gap-1 rounded-sm bg-accent font-mono text-[10px] text-accent-foreground uppercase">
										<Trophy className="size-3" />
										{contest.winnerTier}
									</Badge>
								) : (
									<Badge
										variant="outline"
										className="w-fit rounded-sm border-border font-mono text-[10px] text-muted-foreground uppercase"
									>
										{contest.format
											? eventFormatLabels[contest.format]
											: 'Registration open'}
									</Badge>
								)}

								<h3 className="mt-2.5 font-heading text-lg leading-snug font-semibold text-foreground">
									{contest.title}
								</h3>

								{contest.mode === ContestPreviewMode.WINNERS &&
								contest.winningTeamName ? (
									<div className="mt-2 flex items-center gap-2">
										<Avatar className="size-6">
											<AvatarFallback className="bg-primary/10 font-mono text-[10px] text-primary">
												{getInitials(
													contest.winningTeamName
												)}
											</AvatarFallback>
										</Avatar>
										<span className="text-sm text-muted-foreground">
											{contest.winningTeamName}
										</span>
									</div>
								) : (
									<p className="mt-1.5 font-mono text-xs text-muted-foreground">
										{contest.dateLabel}
									</p>
								)}

								<Button
									asChild
									variant="outline"
									size="sm"
									className="mt-auto w-fit pt-4"
								>
									<Link href={`/contests/${contest.slug}`}>
										{contest.mode ===
										ContestPreviewMode.WINNERS
											? 'View Results'
											: 'View Details'}
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
