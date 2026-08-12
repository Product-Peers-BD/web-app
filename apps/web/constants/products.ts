import { ProductStage } from '@/enums/product';
import type { ProductListItem } from '@/types/product';

export const products: ProductListItem[] = [
	{
		slug: 'shelfie',
		name: 'Shelfie',
		industries: ['Retail Tech'],
		stage: ProductStage.BETA,
		tags: ['Marketplace', 'Mobile'],
		viewCount: 812,
		publishedAt: '2026-07-20T10:00:00+06:00'
	},
	{
		slug: 'khoros',
		name: 'Khoros',
		industries: ['HealthTech'],
		stage: ProductStage.MVP,
		tags: ['AI', 'B2B'],
		viewCount: 540,
		publishedAt: '2026-07-02T10:00:00+06:00'
	},
	{
		slug: 'routely',
		name: 'Routely',
		industries: ['Logistics'],
		stage: ProductStage.LIVE,
		tags: ['API', 'B2B'],
		viewCount: 1204,
		publishedAt: '2026-05-14T10:00:00+06:00'
	},
	{
		slug: 'paathshala',
		name: 'Paathshala',
		industries: ['EdTech'],
		stage: ProductStage.LIVE,
		tags: ['Mobile', 'Subscription'],
		viewCount: 980,
		publishedAt: '2026-04-28T10:00:00+06:00'
	},
	{
		slug: 'khamarbondhu',
		name: 'Khamarbondhu',
		industries: ['AgriTech'],
		stage: ProductStage.MVP,
		tags: ['IoT', 'B2B'],
		viewCount: 205,
		publishedAt: '2026-06-18T10:00:00+06:00'
	},
	{
		slug: 'thikana',
		name: 'Thikana',
		industries: ['Real Estate'],
		stage: ProductStage.IDEA,
		tags: ['Marketplace'],
		viewCount: 64,
		publishedAt: '2026-08-05T10:00:00+06:00'
	},
	{
		slug: 'bhromon',
		name: 'Bhromon',
		industries: ['Travel'],
		stage: ProductStage.BETA,
		tags: ['Mobile', 'AI'],
		viewCount: 431,
		publishedAt: '2026-06-30T10:00:00+06:00'
	},
	{
		slug: 'taskbondhu',
		name: 'Taskbondhu',
		industries: ['Productivity'],
		stage: ProductStage.LIVE,
		tags: ['SaaS', 'Subscription'],
		viewCount: 1502,
		publishedAt: '2026-03-11T10:00:00+06:00'
	},
	{
		slug: 'adalat-ai',
		name: 'Adalat AI',
		industries: ['LegalTech'],
		stage: ProductStage.IDEA,
		tags: ['AI', 'B2B'],
		viewCount: 39,
		publishedAt: '2026-08-09T10:00:00+06:00'
	},
	{
		slug: 'paatabondhu',
		name: 'Paatabondhu',
		industries: ['FinTech'],
		stage: ProductStage.LIVE,
		tags: ['API', 'Security'],
		viewCount: 1120,
		publishedAt: '2026-02-22T10:00:00+06:00'
	},
	{
		slug: 'rangmoshaal',
		name: 'Rangmoshaal',
		industries: ['Creative Tools'],
		stage: ProductStage.PAUSED,
		tags: ['Design', 'SaaS'],
		viewCount: 178,
		publishedAt: '2026-01-16T10:00:00+06:00'
	},
	{
		slug: 'quickkhabar',
		name: 'QuickKhabar',
		industries: ['Food Delivery'],
		stage: ProductStage.SUNSET,
		tags: ['Marketplace', 'Mobile'],
		viewCount: 690,
		publishedAt: '2025-11-08T10:00:00+06:00'
	},
	{
		slug: 'green-circuit',
		name: 'Green Circuit',
		industries: ['Climate Tech'],
		stage: ProductStage.MVP,
		tags: ['Hardware', 'IoT'],
		viewCount: 96,
		publishedAt: '2026-07-27T10:00:00+06:00'
	}
];
