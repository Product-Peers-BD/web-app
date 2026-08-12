import type { CaseStudyDetail } from '@/types/case-study';

const RELATED_COUNT = 4;

function byRecency(a: CaseStudyDetail, b: CaseStudyDetail): number {
	return (
		new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);
}

function sharesAssociation(a: CaseStudyDetail, b: CaseStudyDetail): boolean {
	const aProductSlugs = a.associatedProducts.map((product) => product.slug);
	const aContestSlugs = a.associatedContests.map((contest) => contest.slug);

	return (
		b.associatedProducts.some((product) =>
			aProductSlugs.includes(product.slug)
		) ||
		b.associatedContests.some((contest) =>
			aContestSlugs.includes(contest.slug)
		)
	);
}

function sharesIndustry(a: CaseStudyDetail, b: CaseStudyDetail): boolean {
	return b.industries.some((industry) => a.industries.includes(industry));
}

export function getRelatedCaseStudies(
	current: CaseStudyDetail,
	allCaseStudies: CaseStudyDetail[]
): CaseStudyDetail[] {
	const pool = allCaseStudies.filter(
		(caseStudy) => caseStudy.slug !== current.slug
	);
	const picked = new Map<string, CaseStudyDetail>();

	function addFrom(candidates: CaseStudyDetail[]) {
		for (const candidate of [...candidates].sort(byRecency)) {
			if (picked.size >= RELATED_COUNT) return;
			if (!picked.has(candidate.slug))
				picked.set(candidate.slug, candidate);
		}
	}

	addFrom(pool.filter((caseStudy) => sharesAssociation(current, caseStudy)));
	addFrom(
		pool.filter((caseStudy) => caseStudy.category === current.category)
	);
	addFrom(pool.filter((caseStudy) => sharesIndustry(current, caseStudy)));
	addFrom(pool);

	return Array.from(picked.values());
}
