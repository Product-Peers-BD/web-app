import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CaseStudyAssociatedContests } from '@/components/features/case-studies/case-study-associated-contests';
import { CaseStudyAssociatedProducts } from '@/components/features/case-studies/case-study-associated-products';
import { CaseStudyAuthorBar } from '@/components/features/case-studies/case-study-author-bar';
import { CaseStudyBody } from '@/components/features/case-studies/case-study-body';
import { CaseStudyComments } from '@/components/features/case-studies/case-study-comments';
import { CaseStudyDetailHeader } from '@/components/features/case-studies/case-study-detail-header';
import { CaseStudyEngagementBar } from '@/components/features/case-studies/case-study-engagement-bar';
import { CaseStudyFileSidebar } from '@/components/features/case-studies/case-study-file-sidebar';
import { RelatedCaseStudiesSidebar } from '@/components/features/case-studies/related-case-studies-sidebar';
import { caseStudies, getCaseStudyBySlug } from '@/constants/case-studies';
import { getRelatedCaseStudies } from '@/utils/get-related-case-studies';

interface CaseStudyDetailsPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
	params
}: CaseStudyDetailsPageProps): Promise<Metadata> {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) return {};

	return {
		title: `${caseStudy.title} — Product Peers BD`,
		description: `How ${caseStudy.clientName} worked with Product Peers BD: ${caseStudy.title}.`
	};
}

export default async function CaseStudyDetailsPage({
	params
}: CaseStudyDetailsPageProps) {
	const { slug } = await params;
	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) notFound();

	const relatedCaseStudies = getRelatedCaseStudies(caseStudy, caseStudies);

	return (
		<article>
			<CaseStudyDetailHeader caseStudy={caseStudy} />

			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
					<div className="flex flex-col gap-10">
						<CaseStudyAuthorBar caseStudy={caseStudy} />
						<CaseStudyBody content={caseStudy.content} />
						<CaseStudyAssociatedProducts
							products={caseStudy.associatedProducts}
						/>
						<CaseStudyAssociatedContests
							contests={caseStudy.associatedContests}
						/>
						<CaseStudyEngagementBar
							title={caseStudy.title}
							likeCount={caseStudy.likeCount}
							commentCount={caseStudy.comments.length}
						/>
						<CaseStudyComments comments={caseStudy.comments} />
					</div>

					<aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:h-fit">
						<CaseStudyFileSidebar caseStudy={caseStudy} />
						<RelatedCaseStudiesSidebar
							caseStudies={relatedCaseStudies}
						/>
					</aside>
				</div>
			</div>
		</article>
	);
}
