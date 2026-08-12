import type { PublicProfile } from '@/types/profile';
import { Badge } from '@workspace/ui/components/badge';

interface ProfileAboutProps {
	profile: PublicProfile;
}

export function ProfileAbout({ profile }: ProfileAboutProps) {
	return (
		<div className="flex flex-col gap-8">
			<section>
				<p className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
					Bio
				</p>
				<p className="mt-3 text-sm leading-relaxed text-foreground">
					{profile.bio}
				</p>
			</section>

			<section>
				<p className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
					Skills
				</p>
				<div className="mt-3 flex flex-wrap gap-1.5">
					{profile.skills.map((skill) => (
						<Badge
							key={skill}
							variant="outline"
							className="rounded-sm border-border font-mono text-[10px] text-muted-foreground"
						>
							{skill}
						</Badge>
					))}
				</div>
			</section>

			<section>
				<p className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
					Experience
				</p>
				<div className="mt-3 flex flex-col gap-4">
					{profile.experience.map((entry) => (
						<div
							key={`${entry.company}-${entry.title}`}
							className="rounded-xl border border-border bg-card p-4"
						>
							<div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
								<p className="font-heading text-sm font-semibold text-foreground">
									{entry.title} · {entry.company}
								</p>
								<p className="font-mono text-[11px] text-muted-foreground uppercase tabular-nums">
									{entry.duration}
								</p>
							</div>
							{entry.description ? (
								<p className="mt-2 text-xs text-muted-foreground">
									{entry.description}
								</p>
							) : null}
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
