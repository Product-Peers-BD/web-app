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
