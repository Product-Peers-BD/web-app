import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ContestDescription } from '@/components/features/contests/contest-description';
import { ContestDetailHeader } from '@/components/features/contests/contest-detail-header';
import { ContestDiscussions } from '@/components/features/contests/contest-discussions';
import { ContestFaq } from '@/components/features/contests/contest-faq';
import { ContestGallery } from '@/components/features/contests/contest-gallery';
import { ContestJudges } from '@/components/features/contests/contest-judges';
import { ContestQuickFacts } from '@/components/features/contests/contest-quick-facts';
import { ContestRanking } from '@/components/features/contests/contest-ranking';
import { ContestRegistrationPanel } from '@/components/features/contests/contest-registration-panel';
import { ContestShare } from '@/components/features/contests/contest-share';
import { ContestSponsors } from '@/components/features/contests/contest-sponsors';
import { ContestTeams } from '@/components/features/contests/contest-teams';
import { ContestVideos } from '@/components/features/contests/contest-videos';
import { ContestWinners } from '@/components/features/contests/contest-winners';
import { contests, getContestBySlug } from '@/constants/contests';
import { ContestStatus } from '@/enums/contest';
import { getContestStatus } from '@/utils/get-contest-status';
import { cn } from '@workspace/ui/lib/utils';

interface ContestDetailsPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return contests.map((contest) => ({ slug: contest.slug }));
}

export async function generateMetadata({
	params
}: ContestDetailsPageProps): Promise<Metadata> {
	const { slug } = await params;
	const contest = getContestBySlug(slug);

	if (!contest) return {};

	return {
		title: `${contest.title} — Product Peers BD`,
		description: contest.description[0]
	};
}

export default async function ContestDetailsPage({
	params
}: ContestDetailsPageProps) {
	const { slug } = await params;
	const contest = getContestBySlug(slug);

	if (!contest) notFound();

	const status = getContestStatus(contest.startAt, contest.endAt);
	const showRegistrationPanel = status !== ContestStatus.PAST;

	return (
		<article>
			<ContestDetailHeader
				contest={contest}
				status={status}
			/>

			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div
					className={cn(
						'grid gap-10',
						showRegistrationPanel && 'lg:grid-cols-[1fr_360px]'
					)}
				>
					<div
						className={cn(
							'flex flex-col gap-12',
							!showRegistrationPanel && 'mx-auto w-full max-w-3xl'
						)}
					>
						<ContestJudges judges={contest.judges} />
						<ContestQuickFacts contest={contest} />
						<ContestDescription paragraphs={contest.description} />
						<ContestTeams teams={contest.teams} />
						<ContestWinners
							winners={contest.winners}
							showSubmission={contest.showWinnerSubmission}
						/>
						<ContestRanking
							ranking={contest.ranking}
							showScores={contest.showParticipantScores}
						/>
						<ContestVideos videoUrls={contest.videoUrls} />
						<ContestGallery count={contest.galleryCount} />
						<ContestFaq faqs={contest.faqs} />
						<ContestSponsors sponsorTiers={contest.sponsorTiers} />
						<ContestDiscussions threads={contest.discussions} />
						<ContestShare title={contest.title} />
					</div>

					{showRegistrationPanel ? (
						<aside className="lg:sticky lg:top-20 lg:h-fit">
							<ContestRegistrationPanel contest={contest} />
						</aside>
					) : null}
				</div>
			</div>
		</article>
	);
}
