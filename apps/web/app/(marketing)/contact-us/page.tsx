import type { Metadata } from 'next';

import { ContactHero } from '@/components/features/contact-us/contact-hero';
import { ContactSection } from '@/components/features/contact-us/contact-section';
import { ContactType } from '@/enums/contact';

export const metadata: Metadata = {
	title: 'Contact Us — Product Peers BD',
	description:
		"Questions about events, mentorship, or the community — or a company looking to sponsor. Tell Product Peers BD what's on your mind."
};

interface ContactUsPageProps {
	searchParams: Promise<{ type?: string }>;
}

export default async function ContactUsPage({
	searchParams
}: ContactUsPageProps) {
	const { type } = await searchParams;
	const initialType =
		type === 'sponsorship'
			? ContactType.SPONSORSHIP
			: ContactType.GENERAL_INQUIRY;

	return (
		<>
			<ContactHero />
			<ContactSection initialType={initialType} />
		</>
	);
}
