import { BookingStatus } from '@/enums/mentor';
import type { MentorListItem } from '@/types/mentor';

export const mentors: MentorListItem[] = [
	{
		slug: 'nusrat-jahan',
		name: 'Nusrat Jahan',
		headline: 'Senior PM, fintech',
		skills: ['Roadmapping', 'Discovery', 'Fintech'],
		sessionDurationMinutes: 30,
		isPaid: false,
		slots: [
			{ id: 'nusrat-1', startAt: '2026-08-14T19:00:00+06:00' },
			{ id: 'nusrat-2', startAt: '2026-08-14T19:30:00+06:00' },
			{ id: 'nusrat-3', startAt: '2026-08-18T19:00:00+06:00' },
			{ id: 'nusrat-4', startAt: '2026-08-18T19:30:00+06:00' }
		]
	},
	{
		slug: 'tanvir-ahmed',
		name: 'Tanvir Ahmed',
		headline: 'Head of Growth, D2C',
		skills: ['Growth', 'Lifecycle', 'Analytics'],
		sessionDurationMinutes: 30,
		isPaid: true,
		priceBdt: 800,
		slots: [
			{ id: 'tanvir-1', startAt: '2026-08-14T20:30:00+06:00' },
			{ id: 'tanvir-2', startAt: '2026-08-16T18:00:00+06:00' },
			{ id: 'tanvir-3', startAt: '2026-08-16T18:30:00+06:00' }
		]
	},
	{
		slug: 'farzana-rahman',
		name: 'Farzana Rahman',
		headline: 'Lead Product Designer',
		skills: ['Research', 'Design Systems', 'Prototyping'],
		sessionDurationMinutes: 45,
		isPaid: false,
		slots: [
			{ id: 'farzana-1', startAt: '2026-08-15T18:00:00+06:00' },
			{ id: 'farzana-2', startAt: '2026-08-15T18:45:00+06:00' },
			{ id: 'farzana-3', startAt: '2026-08-22T18:00:00+06:00' }
		]
	},
	{
		slug: 'imran-kabir',
		name: 'Imran Kabir',
		headline: 'Founder, ShipFast Labs',
		skills: ['Fundraising', 'GTM Strategy', '0-to-1'],
		sessionDurationMinutes: 30,
		isPaid: true,
		priceBdt: 1500,
		slots: [
			{ id: 'imran-1', startAt: '2026-08-19T20:00:00+06:00' },
			{ id: 'imran-2', startAt: '2026-08-19T20:30:00+06:00' }
		]
	},
	{
		slug: 'rifat-hasan',
		name: 'Rifat Hasan',
		headline: 'Senior Business Analyst, Telco',
		skills: ['Requirements', 'Stakeholder Mgmt', 'SQL'],
		sessionDurationMinutes: 30,
		isPaid: false,
		slots: [
			{ id: 'rifat-1', startAt: '2026-08-17T19:00:00+06:00' },
			{ id: 'rifat-2', startAt: '2026-08-17T19:30:00+06:00' },
			{ id: 'rifat-3', startAt: '2026-08-24T19:00:00+06:00' }
		]
	},
	{
		slug: 'lamia-sultana',
		name: 'Lamia Sultana',
		headline: 'Product Analytics Lead',
		skills: ['Analytics', 'A/B Testing', 'Dashboards'],
		sessionDurationMinutes: 30,
		isPaid: false,
		slots: [{ id: 'lamia-1', startAt: '2026-08-21T18:30:00+06:00' }],
		existingBooking: {
			status: BookingStatus.REQUESTED,
			slotLabel: 'Thu, Aug 20 · 7:00 PM'
		}
	},
	{
		slug: 'arif-hossain',
		name: 'Arif Hossain',
		headline: 'Senior UX Researcher',
		skills: ['User Research', 'Usability Testing'],
		sessionDurationMinutes: 30,
		isPaid: false,
		slots: [
			{ id: 'arif-1', startAt: '2026-08-20T18:00:00+06:00' },
			{ id: 'arif-2', startAt: '2026-08-20T18:30:00+06:00' }
		]
	},
	{
		slug: 'nabila-karim',
		name: 'Nabila Karim',
		headline: 'Growth PM, Ride-hailing',
		skills: ['Onboarding', 'Retention', 'Experimentation'],
		sessionDurationMinutes: 30,
		isPaid: true,
		priceBdt: 600,
		slots: [
			{ id: 'nabila-1', startAt: '2026-08-16T19:00:00+06:00' },
			{ id: 'nabila-2', startAt: '2026-08-23T19:00:00+06:00' }
		]
	},
	{
		slug: 'shakil-rahman',
		name: 'Shakil Rahman',
		headline: 'Head of Design, Banking App',
		skills: ['Design Systems', 'Accessibility'],
		sessionDurationMinutes: 45,
		isPaid: false,
		slots: [{ id: 'shakil-1', startAt: '2026-08-15T20:00:00+06:00' }]
	}
];
