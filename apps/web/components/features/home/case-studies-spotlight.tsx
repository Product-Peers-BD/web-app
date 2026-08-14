import Link from 'next/link';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { spotlightCaseStudies } from '@/constants/home';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';

export function CaseStudiesSpotlight() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<SectionHeader
				eyebrow="Proof of work"
				title="Case Studies"
				seeAllLabel="See all Case Studies"
				seeAllHref="/case-studies"
			/>

			{spotlightCaseStudies.length === 0 ? (
				<EmptyState
					className="mt-10"
					title="No case studies published yet"
					description="The first write-ups are on the way — check back soon."
					linkLabel="See all Case Studies"
					linkHref="/case-studies"
				/>
			) : (
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{spotlightCaseStudies.map((caseStudy, index) => (
						<Reveal
							key={caseStudy.slug}
							delay={index * 80}
							className="h-full"
						>
							<Link
								href={`/case-studies/${caseStudy.slug}`}
								className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card"
							>
								<MediaPlaceholder className="aspect-16/10 w-full rounded-none" />
								<div className="flex flex-1 flex-col p-5">
									<div className="flex flex-wrap gap-1.5">
										{caseStudy.industries.map(
											(industry) => (
												<Badge
													key={industry}
													variant="outline"
													className="rounded-sm border-border font-mono text-[10px] text-muted-foreground uppercase"
												>
													{industry}
												</Badge>
											)
										)}
									</div>
									<h3 className="mt-3 line-clamp-2 min-h-13 font-heading text-lg leading-snug font-semibold text-foreground group-hover:text-primary">
										{caseStudy.title}
									</h3>
									<p className="mt-1.5 text-sm text-muted-foreground">
										{caseStudy.clientName}
									</p>
									<div className="mt-auto flex items-center gap-2 pt-5">
										<Avatar className="size-6">
											<AvatarFallback className="bg-primary/10 font-mono text-[10px] text-primary">
												{getInitials(
													caseStudy.authorName
												)}
											</AvatarFallback>
										</Avatar>
										<span className="text-xs text-muted-foreground">
											{caseStudy.authorName}
										</span>
									</div>
								</div>
							</Link>
						</Reveal>
					))}
				</div>
			)}
		</section>
	);
}
