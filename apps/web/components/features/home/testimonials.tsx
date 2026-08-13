import { Star } from 'lucide-react';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { testimonials } from '@/constants/home';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@workspace/ui/components/carousel';

export function Testimonials() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<Reveal>
				<p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
					From the community
				</p>
				<h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					What members are saying
				</h2>
			</Reveal>

			{testimonials.length === 0 ? (
				<EmptyState
					className="mt-10"
					title="No testimonials yet"
					description="Member stories will appear here as they come in."
				/>
			) : (
				<Reveal
					delay={80}
					className="mt-10"
				>
					<Carousel
						opts={{
							align: 'start',
							loop: true,
							slidesToScroll: 1
						}}
					>
						<CarouselContent>
							{testimonials.map((testimonial) => (
								<CarouselItem
									key={testimonial.authorName}
									className="sm:basis-1/2 lg:basis-1/3"
								>
									<figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
										{testimonial.rating ? (
											<div className="flex gap-0.5 text-accent">
												{Array.from({
													length: testimonial.rating
												}).map((_, index) => (
													<Star
														key={`${testimonial.authorName}-star-${index}`}
														className="size-3.5 fill-current"
													/>
												))}
											</div>
										) : null}
										<blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground">
											&ldquo;{testimonial.quote}
											&rdquo;
										</blockquote>
										<figcaption className="mt-5 flex items-center gap-2.5">
											<Avatar className="size-8">
												<AvatarFallback className="bg-primary/10 font-mono text-[11px] text-primary">
													{getInitials(
														testimonial.authorName
													)}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="text-sm font-medium text-foreground">
													{testimonial.authorName}
												</p>
												<p className="text-xs text-muted-foreground">
													{testimonial.authorRole}
												</p>
											</div>
										</figcaption>
									</figure>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="mt-6 flex justify-end gap-2">
							<CarouselPrevious className="static translate-y-0" />
							<CarouselNext className="static translate-y-0" />
						</div>
					</Carousel>
				</Reveal>
			)}
		</section>
	);
}
