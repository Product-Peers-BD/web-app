import { Trophy } from 'lucide-react';
import Link from 'next/link';

import { ContestStatusBadge } from '@/components/features/contests/contest-status-badge';
import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { contestPreview } from '@/constants/home';
import { ContestPreviewMode, ContestStatus } from '@/enums/contest';
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

				{contestPreview.length === 0 ? (
					<EmptyState
						className="mt-10"
						title="No contests yet"
						description="The next contest hasn't been announced — check the Contests page for what's coming up."
						linkLabel="See all Contests"
						linkHref="/contests"
					/>
				) : (
					<div className="mt-10 grid gap-6 sm:grid-cols-2">
						{contestPreview.map((contest, index) => (
							<Reveal
								key={contest.slug}
								delay={index * 100}
								className="h-full"
							>
								<div className="flex h-full flex-col gap-5 rounded-xl border border-border bg-card p-5 sm:flex-row">
									<MediaPlaceholder className="aspect-4/3 w-full shrink-0 sm:w-48" />
									<div className="flex flex-1 flex-col">
										{contest.mode ===
										ContestPreviewMode.WINNERS ? (
											<Badge className="w-fit gap-1 rounded-sm bg-accent font-mono text-[10px] text-accent-foreground uppercase">
												<Trophy className="size-3" />
												{contest.winnerTier}
											</Badge>
										) : contest.mode ===
										  ContestPreviewMode.ONGOING ? (
											<ContestStatusBadge
												status={ContestStatus.RUNNING}
											/>
										) : (
											<Badge
												variant="outline"
												className="w-fit rounded-sm border-border font-mono text-[10px] text-muted-foreground uppercase"
											>
												{contest.format
													? eventFormatLabels[
															contest.format
														]
													: 'Registration open'}
											</Badge>
										)}

										<h3 className="mt-2.5 line-clamp-2 min-h-13 font-heading text-lg leading-snug font-semibold text-foreground">
											{contest.title}
										</h3>

										{contest.mode ===
											ContestPreviewMode.WINNERS &&
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
											className="mt-auto w-fit"
										>
											<Link
												href={`/contests/${contest.slug}`}
											>
												{contest.mode ===
												ContestPreviewMode.WINNERS
													? 'View Results'
													: 'View Details'}
											</Link>
										</Button>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
