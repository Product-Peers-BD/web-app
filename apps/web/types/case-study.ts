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
