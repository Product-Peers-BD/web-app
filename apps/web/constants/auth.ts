import type { AuthBadgeMember } from '@/types/auth';

// Subset of apps/web/constants/profiles.ts, shaped for the register page's badge wall.
export const authBadgeMembers: AuthBadgeMember[] = [
	{
		name: 'Nusrat Jahan',
		title: 'Head of Product',
		company: 'Chaldal',
		isMentor: true
	},
	{
		name: 'Sadia Afrin',
		title: 'Business Analyst',
		company: 'City Bank',
		isMentor: false
	},
	{
		name: 'Imran Hossain',
		title: 'Product Lead',
		company: 'Sheba Platform',
		isMentor: true
	},
	{
		name: 'Iftekhar Alam',
		title: 'Senior Product Designer',
		company: 'Bkash',
		isMentor: true
	}
];
