import Link from 'next/link';

import { ProfileSocialIcons } from '@/components/features/profile/profile-social-icons';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { aboutTeam } from '@/constants/about';
import { getProfileByUsername } from '@/constants/profiles';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

export function TeamGrid() {
	const members = aboutTeam
		.map((entry) => {
			const profile = getProfileByUsername(entry.username);
			return profile ? { ...entry, profile } : null;
		})
		.filter((member) => member !== null);

	return (
		<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{members.map(({ profile, designation }, index) => (
				<Reveal
					key={profile.username}
					delay={index * 60}
				>
					<div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center">
						<Link
							href={`/u/${profile.username}`}
							className="group flex flex-col items-center gap-4"
						>
							<Avatar
								size="lg"
								className={cn(
									'size-16',
									profile.isMentor &&
										'ring-2 ring-accent ring-offset-2 ring-offset-background'
								)}
							>
								<AvatarFallback className="bg-primary/10 font-heading text-lg text-primary">
									{getInitials(profile.name)}
								</AvatarFallback>
							</Avatar>

							<div>
								<div className="flex items-center justify-center gap-1.5">
									<h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary">
										{profile.name}
									</h3>
									{profile.isMentor ? (
										<Badge className="h-4.5 rounded-sm px-1 text-[9px] tracking-wide uppercase">
											Mentor
										</Badge>
									) : null}
								</div>
								<p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
									{designation}
								</p>
							</div>
						</Link>

						<ProfileSocialIcons
							name={profile.name}
							{...profile.socialLinks}
						/>
					</div>
				</Reveal>
			))}
		</div>
	);
}
