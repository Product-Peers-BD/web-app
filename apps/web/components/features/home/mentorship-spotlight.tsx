import Link from 'next/link';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { spotlightMentors } from '@/constants/home';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

export function MentorshipSpotlight() {
	return (
		<section className="bg-secondary/40">
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center">
					<Reveal>
						<div>
							<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
								Mentorship
							</p>
							<h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								Skip the trial and error.
								<br />
								Book someone who&apos;s done it.
							</h2>
							<p className="mt-4 max-w-md text-base text-muted-foreground">
								1:1 sessions with mentor-badge holders across
								product, growth, design, and analytics — free or
								paid, on their schedule.
							</p>
							<Button
								asChild
								variant="accent"
								size="lg"
								className="mt-6"
							>
								<Link href="/mentorship">Book a Mentor</Link>
							</Button>
						</div>
					</Reveal>

					{spotlightMentors.length === 0 ? (
						<EmptyState
							title="No mentors listed yet"
							description="Mentor-badge holders are being onboarded — check the Mentorship page for who's available."
							linkLabel="View Mentorship"
							linkHref="/mentorship"
						/>
					) : (
						<div className="grid gap-4 sm:grid-cols-3">
							{spotlightMentors.map((mentor, index) => (
								<Reveal
									key={mentor.slug}
									delay={index * 80}
									className="h-full"
								>
									<div className="flex h-full flex-col items-start gap-3 rounded-xl border border-border bg-card p-5">
										<Avatar className="size-11">
											<AvatarFallback className="bg-primary/10 font-heading text-sm text-primary">
												{getInitials(mentor.name)}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-heading text-sm font-semibold text-foreground">
												{mentor.name}
											</p>
											<p className="mt-0.5 text-xs text-muted-foreground">
												{mentor.headline}
											</p>
										</div>
										<div className="flex flex-wrap gap-1.5">
											{mentor.skills
												.slice(0, 2)
												.map((skill) => (
													<Badge
														key={skill}
														variant="outline"
														className="rounded-sm border-border font-mono text-[10px] text-muted-foreground"
													>
														{skill}
													</Badge>
												))}
										</div>
										<Link
											href={`/mentors/${mentor.slug}`}
											className="mt-auto pt-1 font-mono text-xs text-primary underline-offset-4 hover:underline"
										>
											View Profile
										</Link>
									</div>
								</Reveal>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
