import { getArticleBySlug } from '@/constants/articles';
import { getCaseStudyBySlug } from '@/constants/case-studies';
import { getContestBySlug } from '@/constants/contests';
import { getEventBySlug } from '@/constants/events';
import { getProductBySlug } from '@/constants/products';
import { ActivityEntityType } from '@/enums/profile';
import type { ArticleDetail } from '@/types/article';
import type { CaseStudyDetail } from '@/types/case-study';
import type { ContestDetail } from '@/types/contest';
import type { EventDetail } from '@/types/event';
import type { ProductDetail } from '@/types/product';
import type { ProfileActivity } from '@/types/profile';

export type ResolvedActivityEntity =
	| { type: ActivityEntityType.CONTEST; contest: ContestDetail }
	| { type: ActivityEntityType.ARTICLE; article: ArticleDetail }
	| { type: ActivityEntityType.CASE_STUDY; caseStudy: CaseStudyDetail }
	| { type: ActivityEntityType.PRODUCT; product: ProductDetail }
	| { type: ActivityEntityType.EVENT; event: EventDetail };

export function resolveActivityEntity(
	activity: ProfileActivity
): ResolvedActivityEntity | undefined {
	if (!activity.entityType || !activity.entitySlug) return undefined;

	switch (activity.entityType) {
		case ActivityEntityType.CONTEST: {
			const contest = getContestBySlug(activity.entitySlug);
			return contest
				? { type: ActivityEntityType.CONTEST, contest }
				: undefined;
		}
		case ActivityEntityType.ARTICLE: {
			const article = getArticleBySlug(activity.entitySlug);
			return article
				? { type: ActivityEntityType.ARTICLE, article }
				: undefined;
		}
		case ActivityEntityType.CASE_STUDY: {
			const caseStudy = getCaseStudyBySlug(activity.entitySlug);
			return caseStudy
				? { type: ActivityEntityType.CASE_STUDY, caseStudy }
				: undefined;
		}
		case ActivityEntityType.PRODUCT: {
			const product = getProductBySlug(activity.entitySlug);
			return product
				? { type: ActivityEntityType.PRODUCT, product }
				: undefined;
		}
		case ActivityEntityType.EVENT: {
			const event = getEventBySlug(activity.entitySlug);
			return event
				? { type: ActivityEntityType.EVENT, event }
				: undefined;
		}
	}
}
