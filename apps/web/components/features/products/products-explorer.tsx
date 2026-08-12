'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { EmptyState } from '@/components/snippets/empty-state/empty-state';
import { Reveal } from '@/components/snippets/reveal/reveal';
import { ProductStage } from '@/enums/product';
import type { ProductListItem, ProductSortOption } from '@/types/product';
import { sortProducts } from '@/utils/sort-products';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@workspace/ui/components/select';

import { ProductCard } from './product-card';
import type { ProductFiltersState } from './product-filters-sheet';
import { ProductFiltersSheet } from './product-filters-sheet';
import { ProductStageRail } from './product-stage-rail';

const PAGE_SIZE = 8;

const emptyFilters: ProductFiltersState = {
	industries: [],
	tags: []
};

const sortOptions: { value: ProductSortOption; label: string }[] = [
	{ value: 'latest', label: 'Latest' },
	{ value: 'oldest', label: 'Oldest' },
	{ value: 'popular', label: 'Most Popular' }
];

interface ProductsExplorerProps {
	products: ProductListItem[];
}

export function ProductsExplorer({ products }: ProductsExplorerProps) {
	const [search, setSearch] = useState('');
	const [stage, setStage] = useState<ProductStage | 'ALL'>('ALL');
	const [sort, setSort] = useState<ProductSortOption>('latest');
	const [filters, setFilters] = useState<ProductFiltersState>(emptyFilters);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const allIndustries = useMemo(
		() =>
			Array.from(
				new Set(products.flatMap((product) => product.industries))
			).sort(),
		[products]
	);
	const allTags = useMemo(
		() =>
			Array.from(
				new Set(products.flatMap((product) => product.tags))
			).sort(),
		[products]
	);

	const activeFilterCount = filters.industries.length + filters.tags.length;

	const filteredProducts = useMemo(() => {
		const query = search.trim().toLowerCase();

		const filtered = products.filter((product) => {
			if (query && !product.name.toLowerCase().includes(query))
				return false;

			if (stage !== 'ALL' && product.stage !== stage) return false;

			if (
				filters.industries.length &&
				!product.industries.some((industry) =>
					filters.industries.includes(industry)
				)
			) {
				return false;
			}

			if (
				filters.tags.length &&
				!product.tags.some((tag) => filters.tags.includes(tag))
			) {
				return false;
			}

			return true;
		});

		return sortProducts(filtered, sort);
	}, [products, search, stage, filters, sort]);

	const visibleProducts = filteredProducts.slice(0, visibleCount);
	const hasMore = visibleCount < filteredProducts.length;
	const hasActiveFilters =
		activeFilterCount > 0 || stage !== 'ALL' || search.trim() !== '';

	function resetAll() {
		setSearch('');
		setStage('ALL');
		setFilters(emptyFilters);
		setVisibleCount(PAGE_SIZE);
	}

	function updateFilters(next: ProductFiltersState) {
		setFilters(next);
		setVisibleCount(PAGE_SIZE);
	}

	function toggleStage(next: ProductStage) {
		setStage((current) => (current === next ? 'ALL' : next));
		setVisibleCount(PAGE_SIZE);
	}

	return (
		<div>
			<Reveal>
				<ProductStageRail
					products={products}
					activeStage={stage}
					onToggle={toggleStage}
				/>
			</Reveal>

			<Reveal className="mt-4 rounded-xl border border-border bg-card p-3 sm:p-4">
				<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
					<div className="relative w-full lg:max-w-xs">
						<Search className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
						<Input
							value={search}
							onChange={(event) => {
								setSearch(event.target.value);
								setVisibleCount(PAGE_SIZE);
							}}
							placeholder="Search by product name"
							className="pl-8"
						/>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						<ProductFiltersSheet
							filters={filters}
							onChange={updateFilters}
							onReset={() => updateFilters(emptyFilters)}
							allIndustries={allIndustries}
							allTags={allTags}
							activeCount={activeFilterCount}
						/>

						<Select
							value={sort}
							onValueChange={(value) =>
								setSort(value as ProductSortOption)
							}
						>
							<SelectTrigger
								size="sm"
								className="w-fit"
							>
								<SelectValue>
									{
										sortOptions.find(
											(option) => option.value === sort
										)?.label
									}
								</SelectValue>
							</SelectTrigger>
							<SelectContent>
								{sortOptions.map((option) => (
									<SelectItem
										key={option.value}
										value={option.value}
									>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
			</Reveal>

			<div className="mt-4 flex items-center justify-between">
				<p className="font-mono text-xs text-muted-foreground uppercase">
					Showing {visibleProducts.length} of{' '}
					{filteredProducts.length} product
					{filteredProducts.length === 1 ? '' : 's'}
				</p>
				{hasActiveFilters ? (
					<button
						type="button"
						onClick={resetAll}
						className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
					>
						<X className="size-3" />
						Clear all
					</button>
				) : null}
			</div>

			{filteredProducts.length === 0 ? (
				<EmptyState
					className="mt-6"
					title="No products match"
					description="Try widening your filters or clearing the search — members add new products regularly."
				/>
			) : (
				<>
					<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{visibleProducts.map((product, index) => (
							<Reveal
								key={product.slug}
								delay={Math.min(index, 4) * 70}
								className="h-full"
							>
								<ProductCard
									product={product}
									className="h-full"
								/>
							</Reveal>
						))}
					</div>

					{hasMore ? (
						<div className="mt-10 flex justify-center">
							<Button
								variant="outline"
								onClick={() =>
									setVisibleCount(
										(count) => count + PAGE_SIZE
									)
								}
							>
								Load more products
							</Button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
