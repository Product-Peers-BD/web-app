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

export function StatsBarVariantA() {
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

				<dl className="relative grid snap-x snap-mandatory auto-cols-[minmax(116px,1fr)] grid-flow-col divide-x divide-border overflow-x-auto sm:auto-cols-fr sm:overflow-visible">
					{heroStats.map((stat) => {
						const Icon = statIcons[stat.label] ?? Users;
						return (
							<div
								key={stat.label}
								className="group flex snap-start flex-col gap-2 px-4 py-4 transition-colors hover:bg-secondary/40 sm:px-3 sm:py-5"
							>
								<Icon
									aria-hidden
									strokeWidth={1.75}
									className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary"
								/>
								<dt className="font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase sm:tracking-[0.1em]">
									{stat.label}
								</dt>
								<dd className="font-mono text-xl font-medium text-foreground tabular-nums sm:text-2xl">
									<CountUpValue value={stat.value} />
								</dd>
							</div>
						);
					})}
				</dl>
			</Reveal>
		</section>
	);
}
