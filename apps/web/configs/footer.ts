import type { FooterLinkGroup, SocialLink } from '@/types/nav';

export const footerLinkGroups: FooterLinkGroup[] = [
	{
		title: 'About',
		items: [
			{ label: 'About Us', href: '/about-us' },
			{ label: 'Contact Us', href: '/contact-us' },
			{ label: 'Sponsors', href: '/sponsors' }
		]
	},
	{
		title: 'Explore',
		items: [
			{ label: 'Events', href: '/events' },
			{ label: 'Contests', href: '/contests' },
			{ label: 'Case Studies', href: '/case-studies' },
			{ label: 'Articles', href: '/articles' },
			{ label: 'Products', href: '/products' },
			{ label: 'Mentorship', href: '/mentorship' }
		]
	},
	{
		title: 'Legal',
		items: [
			{ label: 'Terms & Conditions', href: '/terms-and-conditions' },
			{ label: 'Privacy Policy', href: '/privacy-policy' }
		]
	}
];

export const socialLinks: SocialLink[] = [
	{ label: 'LinkedIn', href: 'https://linkedin.com' },
	{ label: 'Facebook', href: 'https://facebook.com' },
	{ label: 'YouTube', href: 'https://youtube.com' }
];
