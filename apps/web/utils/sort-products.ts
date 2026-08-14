import type { ProductListItem, ProductSortOption } from '@/types/product';

export function sortProducts<T extends ProductListItem>(
	items: T[],
	sortOption: ProductSortOption
): T[] {
	const sorted = [...items];

	if (sortOption === 'oldest') {
		return sorted.sort(
			(a, b) =>
				new Date(a.publishedAt).getTime() -
				new Date(b.publishedAt).getTime()
		);
	}

	if (sortOption === 'popular') {
		return sorted.sort((a, b) => b.viewCount - a.viewCount);
	}

	return sorted.sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() -
			new Date(a.publishedAt).getTime()
	);
}
