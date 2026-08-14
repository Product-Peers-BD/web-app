export interface ArticleAuthor {
	slug: string;
	name: string;
	title: string;
	isMentor: boolean;
}

export type ArticleContentBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'heading'; text: string }
	| { type: 'quote'; text: string; attribution?: string }
	| { type: 'image'; caption: string };

export interface ArticleCommentReply {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
}

export interface ArticleComment {
	authorName: string;
	authorIsMentor?: boolean;
	body: string;
	postedAt: string;
	replies: ArticleCommentReply[];
}

export interface ArticleListItem {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	author: ArticleAuthor;
	isCurated: boolean;
	readTimeMinutes: number;
	viewCount: number;
	likeCount: number;
	publishedAt: string;
}

export type ArticleSortOption = 'latest' | 'popular';

export interface ArticleDetail extends ArticleListItem {
	content: ArticleContentBlock[];
	comments: ArticleComment[];
}
