import { Badge } from '@workspace/ui/components/badge';

interface ProfileSkillsCardProps {
	skills: string[];
}

const MAX_VISIBLE_SKILLS = 8;

export function ProfileSkillsCard({ skills }: ProfileSkillsCardProps) {
	const visibleSkills = skills.slice(0, MAX_VISIBLE_SKILLS);
	const extraCount = skills.length - visibleSkills.length;

	return (
		<div className="rounded-xl border border-border bg-card p-5">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Skills
			</p>
			<div className="mt-3 flex flex-wrap gap-1.5">
				{visibleSkills.map((skill) => (
					<Badge
						key={skill}
						variant="outline"
						className="rounded-sm border-border text-[11px] font-normal text-muted-foreground"
					>
						{skill}
					</Badge>
				))}
				{extraCount > 0 ? (
					<Badge
						variant="outline"
						className="rounded-sm border-border text-[11px] font-normal text-muted-foreground"
					>
						+{extraCount}
					</Badge>
				) : null}
			</div>
		</div>
	);
}
