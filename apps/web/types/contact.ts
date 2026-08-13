import type { LucideIcon } from 'lucide-react';

import type { ContactType } from '@/enums/contact';

export interface ContactChannel {
	type: ContactType;
	icon: LucideIcon;
	label: string;
	blurb: string;
	responseNote: string;
}

export interface ContactFormValues {
	name: string;
	email: string;
	phone: string;
	message: string;
}
