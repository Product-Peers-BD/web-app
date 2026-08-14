import { Reveal } from '@/components/snippets/reveal/reveal';
import { whyJoinValues } from '@/constants/join-community';

export function WhyJoinGrid() {
	return (
		<div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
			{whyJoinValues.map((value, index) => {
				const Icon = value.icon;

				return (
					<Reveal
						key={value.title}
						delay={index * 60}
						className="flex flex-col gap-4 bg-card p-6 last:sm:col-span-2 last:lg:col-span-1"
					>
						<span className="flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
							<Icon
								aria-hidden
								strokeWidth={1.75}
								className="size-5"
							/>
						</span>
						<div>
							<h3 className="font-heading text-base font-semibold text-foreground">
								{value.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{value.description}
							</p>
						</div>
					</Reveal>
				);
			})}
		</div>
	);
}
