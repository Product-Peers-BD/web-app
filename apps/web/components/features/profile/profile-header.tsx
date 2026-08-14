'use client';

import { ArrowLeft, Check, MapPin, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Reveal } from '@/components/snippets/reveal/reveal';
import type { PublicProfile } from '@/types/profile';
import {
	formatArticleDate,
	formatCompactCount
} from '@/utils/format-article-date';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { ProfileSocialIcons } from './profile-social-icons';

interface ProfileHeaderProps {
	profile: PublicProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
	const [isFollowing, setIsFollowing] = useState(false);
	const followerCount = profile.followerCount + (isFollowing ? 1 : 0);

	return (
		<section className="border-b border-border bg-secondary/30">
			<div className="mx-auto max-w-6xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
				<Reveal trigger="mount">
					<Link
						href="/"
						className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<ArrowLeft className="size-3.5" />
						Back to Product Peers BD
					</Link>
				</Reveal>

				<Reveal
					delay={90}
					className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
				>
					<div className="flex items-start gap-4">
						<Avatar
							size="lg"
							className={cn(
								'size-20 shrink-0 sm:size-24',
								profile.isMentor &&
									'ring-2 ring-accent ring-offset-2 ring-offset-background'
							)}
						>
							<AvatarFallback className="bg-primary/10 font-heading text-2xl text-primary">
								{getInitials(profile.name)}
							</AvatarFallback>
						</Avatar>

						<div className="min-w-0 pt-1">
							<div className="flex flex-wrap items-center gap-2">
								<h1 className="font-heading text-2xl leading-tight font-semibold text-foreground sm:text-3xl">
									{profile.name}
								</h1>
								{profile.isMentor ? (
									<Badge className="h-5 rounded-sm px-1.5 text-[10px] tracking-wide uppercase">
										Mentor
									</Badge>
								) : null}
							</div>
							<p className="mt-1 text-sm text-muted-foreground">
								{profile.title}
								{profile.company
									? ` at ${profile.company}`
									: ''}
							</p>
							<p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-muted-foreground uppercase">
								<MapPin className="size-3.5" />
								{profile.city}, {profile.country}
							</p>
						</div>
					</div>

					<div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
						<div className="flex items-center gap-2">
							<Button
								variant={isFollowing ? 'outline' : 'default'}
								size="sm"
								onClick={() =>
									setIsFollowing((value) => !value)
								}
							>
								{isFollowing ? (
									<>
										<Check className="size-3.5" />
										Following
									</>
								) : (
									<>
										<UserPlus className="size-3.5" />
										Follow
									</>
								)}
							</Button>
							<ProfileSocialIcons
								name={profile.name}
								{...profile.socialLinks}
							/>
						</div>
						<p className="font-mono text-xs text-muted-foreground uppercase tabular-nums">
							{formatCompactCount(followerCount)} followers ·
							Joined {formatArticleDate(profile.joinedAt)}
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
