import type { ProductStage } from '@/enums/product';

export interface ProductListItem {
	slug: string;
	name: string;
	industries: string[];
	stage: ProductStage;
	tags: string[];
	viewCount: number;
	publishedAt: string;
}

export type ProductSortOption = 'latest' | 'oldest' | 'popular';

export interface ProductTeamMember {
	slug: string;
	name: string;
	role: string;
	isCreator?: boolean;
}

export interface ProductRelatedCaseStudy {
	slug: string;
	title: string;
	clientName: string;
}

export interface ProductCommentReply {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
}

export interface ProductComment {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
	replies: ProductCommentReply[];
}

export interface ProductDetail extends ProductListItem {
	companyName?: string;
	description: string[];
	galleryCount: number;
	productUrl?: string;
	problem?: string;
	team: ProductTeamMember[];
	relatedCaseStudies: ProductRelatedCaseStudy[];
	likeCount: number;
	comments: ProductComment[];
}
