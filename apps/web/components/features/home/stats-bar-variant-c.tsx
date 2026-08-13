import {
	BookOpen,
	Calendar,
	FileText,
	GraduationCap,
	Handshake,
	MessageCircle,
	Package,
	Trophy,
	Users
} from 'lucide-react';

import { CountUpValue } from '@/components/snippets/count-up-value/count-up-value';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { SectionHeader } from '@/components/snippets/section-header/section-header';
import { heroStats } from '@/constants/home';

const statIcons: Record<string, typeof Users> = {
	Members: Users,
	'Events hosted': Calendar,
	'Contests held': Trophy,
	'Mentors available': GraduationCap,
	'Articles published': FileText,
	'Case studies': BookOpen,
	'1:1 sessions': MessageCircle,
	'Products listed': Package,
	'Sponsors onboarded': Handshake
};

export function StatsBarVariantC() {
	const [featured, ...rest] = heroStats;

	return (
		<section>
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<SectionHeader
					eyebrow="Community"
					title="Growing Every Week"
					description="Product professionals building, learning, and hiring together across Bangladesh."
				/>

				<Reveal className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
					{featured &&
						(() => {
							const FeaturedIcon =
								statIcons[featured.label] ?? Users;
							return (
								<div className="shrink-0">
									<div className="font-mono text-6xl font-semibold tracking-tight text-foreground tabular-nums sm:text-7xl lg:text-8xl">
										<CountUpValue value={featured.value} />
									</div>
									<div className="mt-4 h-0.5 w-10 bg-accent" />
									<div className="mt-3 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
										<FeaturedIcon
											aria-hidden
											strokeWidth={1.75}
											className="size-3.5"
										/>
										<span className="relative flex size-1.5">
											<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
											<span className="relative inline-flex size-1.5 rounded-full bg-primary" />
										</span>
										{featured.label}
									</div>
								</div>
							);
						})()}

					<div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4 lg:border-l lg:border-border lg:pl-16">
						{rest.map((stat) => {
							const Icon = statIcons[stat.label] ?? Users;
							return (
								<div
									key={stat.label}
									className="flex flex-col gap-1.5"
								>
									<span className="flex items-center gap-2 font-mono text-3xl font-medium tabular-nums sm:text-4xl">
										<Icon
											aria-hidden
											strokeWidth={1.75}
											className="shrink-0 text-muted-foreground"
											// className="size-3 shrink-0"
										/>
										<CountUpValue
											value={stat.value}
											className="text-foreground"
										/>
									</span>
									<span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
										{/* <Icon
											aria-hidden
											strokeWidth={1.75}
											className="size-3 shrink-0"
										/> */}
										{stat.label}
									</span>
								</div>
							);
						})}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
