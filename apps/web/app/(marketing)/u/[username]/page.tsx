import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ActivityLedger } from '@/components/features/profile/activity-ledger';
import { MentorCredentialsCard } from '@/components/features/profile/mentor-credentials-card';
import { ProfileAbout } from '@/components/features/profile/profile-about';
import { ProfileContentGrid } from '@/components/features/profile/profile-content-grid';
import { ProfileContests } from '@/components/features/profile/profile-contests';
import { ProfileHeader } from '@/components/features/profile/profile-header';
import { ProfileSkillsCard } from '@/components/features/profile/profile-skills-card';
import { getProfileByUsername, profiles } from '@/constants/profiles';
import { ProfileTab } from '@/enums/profile';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@workspace/ui/components/tabs';

interface PublicProfilePageProps {
	params: Promise<{ username: string }>;
}

export function generateStaticParams() {
	return profiles.map((profile) => ({ username: profile.username }));
}

export async function generateMetadata({
	params
}: PublicProfilePageProps): Promise<Metadata> {
	const { username } = await params;
	const profile = getProfileByUsername(username);

	if (!profile) return {};

	return {
		title: `${profile.name} — Product Peers BD`,
		description: profile.bio
	};
}

const tabTriggerClassName =
	'font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase data-active:text-foreground';

export default async function PublicProfilePage({
	params
}: PublicProfilePageProps) {
	const { username } = await params;
	const profile = getProfileByUsername(username);

	if (!profile) notFound();

	return (
		<article>
			<ProfileHeader profile={profile} />

			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1fr_320px]">
					<Tabs defaultValue={ProfileTab.TIMELINE}>
						<TabsList
							variant="line"
							className="h-9 gap-4 border-b border-border"
						>
							<TabsTrigger
								value={ProfileTab.TIMELINE}
								className={tabTriggerClassName}
							>
								Timeline
							</TabsTrigger>
							<TabsTrigger
								value={ProfileTab.ABOUT}
								className={tabTriggerClassName}
							>
								About
							</TabsTrigger>
							<TabsTrigger
								value={ProfileTab.CONTENT}
								className={tabTriggerClassName}
							>
								Content
							</TabsTrigger>
							<TabsTrigger
								value={ProfileTab.CONTESTS}
								className={tabTriggerClassName}
							>
								Contests
							</TabsTrigger>
						</TabsList>

						<TabsContent
							value={ProfileTab.TIMELINE}
							className="pt-8"
						>
							<ActivityLedger activities={profile.activities} />
						</TabsContent>

						<TabsContent
							value={ProfileTab.ABOUT}
							className="pt-8"
						>
							<ProfileAbout profile={profile} />
						</TabsContent>

						<TabsContent
							value={ProfileTab.CONTENT}
							className="pt-8"
						>
							<ProfileContentGrid username={profile.username} />
						</TabsContent>

						<TabsContent
							value={ProfileTab.CONTESTS}
							className="pt-8"
						>
							<ProfileContests username={profile.username} />
						</TabsContent>
					</Tabs>

					<aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:h-fit">
						<ProfileSkillsCard skills={profile.skills} />
						{profile.isMentor && profile.mentorCredentials ? (
							<MentorCredentialsCard
								username={profile.username}
								credentials={profile.mentorCredentials}
							/>
						) : null}
					</aside>
				</div>
			</div>
		</article>
	);
}
