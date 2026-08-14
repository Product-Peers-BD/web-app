import {
	BookOpen,
	Calendar,
	GraduationCap,
	Rocket,
	Trophy
} from 'lucide-react';

import { ActivityType } from '@/enums/profile';
import type { EventFaq } from '@/types/event';
import type { CommunityPulseEvent, WhyJoinItem } from '@/types/join-community';

function minutesAgo(minutes: number): string {
	return new Date(Date.now() - minutes * 60 * 1000).toISOString();
}

export const whyJoinValues: WhyJoinItem[] = [
	{
		icon: Calendar,
		title: 'Show up to rooms that matter',
		description:
			'Meetups, panels, and Adda sessions run by working PMs, designers, and growth leads — not a course catalog reading from slides.'
	},
	{
		icon: GraduationCap,
		title: 'Get matched with a mentor',
		description:
			'Book a 1:1 with a Mentor-badge holder who has actually shipped what you are stuck on, on their schedule, for a straight answer.'
	},
	{
		icon: Trophy,
		title: 'Compete and get noticed',
		description:
			'Enter product sprints and case study contests judged by the community — winners get visibility, not just a certificate.'
	},
	{
		icon: BookOpen,
		title: 'Learn from real work, not theory',
		description:
			'Case studies and articles written by members about problems they solved this quarter, with the numbers left in.'
	},
	{
		icon: Rocket,
		title: 'Put your product in front of peers',
		description:
			'List what you are building, get early users and feedback from people who understand the market you are building in.'
	}
];

export const communityPulse: CommunityPulseEvent[] = [
	{
		id: 'pulse-1',
		type: ActivityType.JOINED_PLATFORM,
		actorName: 'Farhan Kabir',
		occurredAt: minutesAgo(6),
		description: 'just joined the community.'
	},
	{
		id: 'pulse-2',
		type: ActivityType.ATTENDED_EVENT,
		actorName: 'Mumtahina Chowdhury',
		occurredAt: minutesAgo(40),
		description: 'registered for Friday Product Adda: Dhaka Chapter.'
	},
	{
		id: 'pulse-3',
		type: ActivityType.WON_CONTEST,
		actorName: 'Rifat Hasan',
		occurredAt: minutesAgo(118),
		description:
			'took Champion at Case Study Slam, Vol. 3 with Team Shonar Bangla.'
	},
	{
		id: 'pulse-4',
		type: ActivityType.PUBLISHED_CASE_STUDY,
		actorName: 'Nusrat Jahan',
		occurredAt: minutesAgo(297),
		description:
			"published a case study: 'Redesigning Onboarding for a Neobank.'"
	},
	{
		id: 'pulse-5',
		type: ActivityType.BECAME_MENTOR,
		actorName: 'Iftekhar Alam',
		occurredAt: minutesAgo(542),
		description: 'was approved as a Mentor after review.'
	},
	{
		id: 'pulse-6',
		type: ActivityType.LAUNCHED_PRODUCT,
		actorName: 'Imran Kabir',
		occurredAt: minutesAgo(870),
		description: 'listed Routely on the Products board.'
	},
	{
		id: 'pulse-7',
		type: ActivityType.PUBLISHED_ARTICLE,
		actorName: 'Imran Hossain',
		occurredAt: minutesAgo(1350),
		description: "published 'Writing PRDs People Actually Read.'"
	}
];

export const joinCommunityFaqs: EventFaq[] = [
	{
		question: 'Is it free to join Product Peers BD?',
		answer: 'Yes — creating a profile, attending community events, and reading articles and case studies is free. Some mentors set their own price for 1:1 sessions; you will always see it before booking.'
	},
	{
		question: 'How do I sign up?',
		answer: "Continue with your Google or LinkedIn account — there's no password to set or email to verify. You're taken straight to your dashboard, and you can fill in your bio and skills whenever you like."
	},
	{
		question: 'Who is this community for?',
		answer: 'Product managers, designers, growth and data folks, analysts, and founders working in or around Bangladesh — anyone building product, at any stage of their career.'
	},
	{
		question: 'How do I get the Mentor badge?',
		answer: "The Mentor badge isn't self-service — an Admin attaches it to accounts with real, verifiable product experience. If you'd like to be considered, mention it after joining."
	},
	{
		question: 'Can I just browse without an account?',
		answer: 'Events, articles, case studies, and public profiles are open to visitors. You need an account to register for an event, book a mentor, or comment.'
	}
];
