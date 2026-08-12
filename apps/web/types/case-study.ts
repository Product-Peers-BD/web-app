export interface CaseStudyAuthor {
	slug: string;
	name: string;
	title: string;
	isMentor: boolean;
}

export interface CaseStudyListItem {
	slug: string;
	title: string;
	clientName: string;
	category: string;
	industries: string[];
	author: CaseStudyAuthor;
	viewCount: number;
	publishedAt: string;
}

export type CaseStudySortOption = 'latest' | 'popular';

export type CaseStudyContentBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'heading'; text: string }
	| { type: 'quote'; text: string; attribution?: string }
	| { type: 'image'; caption: string };

export interface CaseStudyCommentReply {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
}

export interface CaseStudyComment {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
	replies: CaseStudyCommentReply[];
}

export interface CaseStudyProductRef {
	slug: string;
	name: string;
	industry: string;
}

export interface CaseStudyContestRef {
	slug: string;
	title: string;
	dateLabel: string;
}

export interface CaseStudyDetail extends CaseStudyListItem {
	readTimeMinutes: number;
	likeCount: number;
	content: CaseStudyContentBlock[];
	problem?: string;
	tools: string[];
	externalLink?: string;
	associatedProducts: CaseStudyProductRef[];
	associatedContests: CaseStudyContestRef[];
	comments: CaseStudyComment[];
}
