import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { MediaPlaceholder } from '@/components/snippets/media-placeholder/media-placeholder';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { featuredArticles } from '@/constants/home';
import { Badge } from '@workspace/ui/components/badge';

export function FeaturedArticles() {
	return (
		<section className="bg-secondary/40">
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Curated"
					title="Featured Articles"
					seeAllLabel="See all Articles"
					seeAllHref="/articles"
				/>

				{featuredArticles.length === 0 ? (
					<EmptyState
						className="mt-10"
						title="No articles published yet"
						description="Member and mentor write-ups are on the way — check back soon."
						linkLabel="See all Articles"
						linkHref="/articles"
					/>
				) : (
					<div className="mt-10 flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
						{featuredArticles.map((article, index) => (
							<Reveal
								key={article.slug}
								delay={index * 60}
							>
								<Link
									href={`/articles/${article.slug}`}
									className="group flex items-center gap-4 p-5 transition-colors hover:bg-card/60 sm:p-6"
								>
									<MediaPlaceholder className="size-16 shrink-0 sm:size-20" />

									<div className="min-w-0 flex-1">
										<div className="flex items-center gap-2">
											<p className="font-mono text-[11px] tracking-wide text-primary uppercase">
												{article.category}
											</p>
											{article.isCurated ? (
												<Badge className="gap-1 rounded-sm bg-accent font-mono text-[9px] text-accent-foreground uppercase">
													<Sparkles className="size-2.5" />
													Curated
												</Badge>
											) : null}
										</div>
										<h3 className="mt-1.5 truncate font-heading text-lg leading-snug font-semibold text-foreground group-hover:text-primary">
											{article.title}
										</h3>
										<p className="mt-1 text-sm text-muted-foreground">
											{article.authorName} ·{' '}
											<span className="font-mono">
												{article.readTimeMinutes} min
												read
											</span>
										</p>
									</div>
									<ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
								</Link>
							</Reveal>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
