import { Pin } from 'lucide-react';
import Link from 'next/link';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import type { EventDiscussionThread } from '@/types/event';
import { formatEventDate } from '@/utils/format-event-date';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

import { ContestDetailSection } from './contest-detail-section';

interface ContestDiscussionsProps {
	threads: EventDiscussionThread[];
}

function AuthorLine({
	name,
	isMentor,
	postedAt,
	size = 'default'
}: {
	name: string;
	isMentor?: boolean;
	postedAt: string;
	size?: 'default' | 'sm';
}) {
	return (
		<div className="flex flex-wrap items-center gap-1.5">
			<p
				className={`font-heading font-semibold text-foreground ${size === 'sm' ? 'text-xs' : 'text-sm'}`}
			>
				{name}
			</p>
			{isMentor ? (
				<Badge className="h-4 rounded-sm px-1.5 text-[9px] tracking-wide uppercase">
					Mentor
				</Badge>
			) : null}
			<span className="font-mono text-[10px] text-muted-foreground">
				{formatEventDate(postedAt)}
			</span>
		</div>
	);
}

export function ContestDiscussions({ threads }: ContestDiscussionsProps) {
	return (
		<ContestDetailSection title="Discussions">
			<div className="rounded-xl border border-dashed border-border px-4 py-5 text-center">
				<p className="text-sm text-muted-foreground">
					Log in to join the discussion
				</p>
				<Button
					asChild
					variant="outline"
					size="sm"
					className="mt-3"
				>
					<Link href="/sign-in">Log In</Link>
				</Button>
			</div>

			{threads.length === 0 ? (
				<EmptyState
					className="mt-4"
					title="No discussions yet"
					description="Be the first to start a conversation once you're logged in."
				/>
			) : (
				<div className="mt-6 flex flex-col gap-4">
					{threads.map((thread, threadIndex) => (
						<div
							key={threadIndex}
							className="rounded-xl border border-border bg-card p-4"
						>
							<div className="flex items-start gap-3">
								<Avatar size="lg">
									<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
										{getInitials(thread.authorName)}
									</AvatarFallback>
								</Avatar>
								<div className="min-w-0 flex-1">
									<div className="flex flex-wrap items-center gap-1.5">
										<AuthorLine
											name={thread.authorName}
											isMentor={thread.authorIsMentor}
											postedAt={thread.postedAt}
										/>
										{thread.isPinned ? (
											<Pin className="size-3 text-primary" />
										) : null}
										{thread.isAnnouncement ? (
											<Badge
												variant="outline"
												className="h-4 rounded-sm border-border px-1.5 text-[9px] tracking-wide text-primary uppercase"
											>
												Announcement
											</Badge>
										) : null}
									</div>
									<p className="mt-1.5 text-sm text-foreground">
										{thread.body}
									</p>

									{thread.comments.length > 0 ? (
										<div className="mt-4 flex flex-col gap-3 border-l border-border pl-4">
											{thread.comments.map(
												(comment, commentIndex) => (
													<div key={commentIndex}>
														<AuthorLine
															name={
																comment.authorName
															}
															isMentor={
																comment.authorIsMentor
															}
															postedAt={
																comment.postedAt
															}
															size="sm"
														/>
														<p className="mt-1 text-xs text-muted-foreground">
															{comment.body}
														</p>

														{comment.replies
															.length > 0 ? (
															<div className="mt-2 flex flex-col gap-2 border-l border-border pl-3">
																{comment.replies.map(
																	(
																		reply,
																		replyIndex
																	) => (
																		<div
																			key={
																				replyIndex
																			}
																		>
																			<AuthorLine
																				name={
																					reply.authorName
																				}
																				isMentor={
																					reply.authorIsMentor
																				}
																				postedAt={
																					reply.postedAt
																				}
																				size="sm"
																			/>
																			<p className="mt-1 text-xs text-muted-foreground">
																				{
																					reply.body
																				}
																			</p>
																		</div>
																	)
																)}
															</div>
														) : null}
													</div>
												)
											)}
										</div>
									) : null}
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</ContestDetailSection>
	);
}
