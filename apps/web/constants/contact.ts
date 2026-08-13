import { Handshake, MessageCircle } from 'lucide-react';

import { ContactType } from '@/enums/contact';
import type { ContactChannel } from '@/types/contact';

export const contactChannels: ContactChannel[] = [
	{
		type: ContactType.GENERAL_INQUIRY,
		icon: MessageCircle,
		label: 'General Inquiry',
		blurb: 'Questions about events, mentorship, or the community at large.',
		responseNote:
			'The community team usually replies within 2 business days.'
	},
	{
		type: ContactType.SPONSORSHIP,
		icon: Handshake,
		label: 'Become a Sponsor',
		blurb: 'Back an event, a contest, or the community year-round.',
		responseNote:
			'Our partnerships lead usually replies within 1 business day.'
	}
];

export const contactMessageLimits = {
	min: 20,
	max: 1000
} as const;
