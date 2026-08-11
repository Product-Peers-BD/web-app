import {
	BookOpen,
	Calendar,
	FileText,
	GraduationCap,
	MessageCircle,
	Package,
	Trophy,
	Users
} from 'lucide-react';

import { CountUpValue } from '@/components/snippets/count-up-value/count-up-value';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { heroStats } from '@/constants/home';

const statIcons: Record<string, typeof Users> = {
	Members: Users,
	'Events hosted': Calendar,
	'Contests held': Trophy,
	'Mentors available': GraduationCap,
	'Articles published': FileText,
	'Case studies': BookOpen,
	'1:1 sessions': MessageCircle,
	'Products listed': Package
};

export function StatsBarVariantB() {
	const [featured, ...rest] = heroStats;

	return (
		<section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
			<Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_100%_at_100%_0%,black_0%,transparent_70%)] bg-size-[20px_20px]"
				/>

				<div className="relative flex items-center gap-2 border-b border-border px-6 py-3.5">
					<span className="relative flex size-1.5">
						<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
						<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
					</span>
					<span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
						Live numbers
					</span>
				</div>

				<div className="relative grid gap-px bg-border sm:grid-cols-[1.3fr_1fr]">
					{featured && (
						<div className="flex flex-col justify-between gap-8 bg-card px-6 py-6 sm:px-8 sm:py-7">
							<div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:text-[11px]">
								{(() => {
									const Icon =
										statIcons[featured.label] ?? Users;
									return (
										<Icon
											aria-hidden
											strokeWidth={1.75}
											className="size-3.5"
										/>
									);
								})()}
								{featured.label}
							</div>
							<div>
								<div className="font-mono text-5xl font-semibold text-foreground tabular-nums sm:text-6xl">
									<CountUpValue value={featured.value} />
								</div>
								<div className="mt-3 h-0.5 w-10 bg-accent" />
								<p className="mt-3 max-w-xs text-sm text-muted-foreground">
									Product professionals building, learning,
									and hiring together across Bangladesh.
								</p>
							</div>
						</div>
					)}

					<div className="grid grid-cols-2 gap-px bg-border">
						{rest.map((stat) => {
							const Icon = statIcons[stat.label] ?? Users;
							return (
								<div
									key={stat.label}
									className="flex items-center gap-3 bg-card px-4 py-3.5 last:col-span-2 sm:px-5"
								>
									<Icon
										aria-hidden
										strokeWidth={1.75}
										className="size-4 shrink-0 text-muted-foreground"
									/>
									<div className="flex min-w-0 flex-col gap-0.5">
										<span className="truncate font-mono text-[9px] tracking-[0.08em] text-muted-foreground uppercase">
											{stat.label}
										</span>
										<span className="font-mono text-base font-medium text-foreground tabular-nums">
											<CountUpValue value={stat.value} />
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Reveal>
		</section>
	);
}
