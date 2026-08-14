import {
	GraduationCap,
	LayoutGrid,
	MapPin,
	MessageCircle,
	TrendingUp,
	Trophy,
	Unlock,
	Users
} from 'lucide-react';

import type { Milestone, TeamMember, ValuePillar } from '@/types/about';

export const aboutMission = {
	foundedLabel: 'Founded Oct 2025',
	locationLabel: 'Dhaka, Bangladesh',
	headline:
		"Bangladesh's product people needed a room of their own. We built one.",
	paragraphs: [
		"Product Peers BD started as a WhatsApp group of eleven people comparing notes after work — PMs tired of playbooks written for Bangalore or Jakarta that didn't account for bKash, patchy connectivity, or a market where trust gets built door-to-door before it moves online.",
		"Today it's where product managers, designers, growth leads, and founders across Bangladesh go to find a mentor who's actually shipped here, enter a contest judged by peers instead of a panel of strangers, and read case studies with the real numbers left in. No membership fee, no gatekeeping — just people who'd rather build in public than guard what they know."
	]
};

export const timelineMilestones: Milestone[] = [
	{
		id: 'milestone-1',
		icon: MessageCircle,
		period: 'Oct 2025',
		title: 'Eleven people, one WhatsApp group',
		description:
			'Product Peers BD starts as a private thread comparing notes on hiring, pricing, and roadmaps for the Bangladeshi market.'
	},
	{
		id: 'milestone-2',
		icon: MapPin,
		period: 'Dec 2025',
		title: 'First Product Adda, Dhaka',
		description:
			'40 people show up to a rented room in Gulshan for the first in-person session — the group outgrows the group chat.'
	},
	{
		id: 'milestone-3',
		icon: GraduationCap,
		period: 'Feb 2026',
		title: 'Mentor program opens',
		description:
			'The first cohort of Mentor-badge holders goes live, offering 1:1 sessions with no fee to book a first call.'
	},
	{
		id: 'milestone-4',
		icon: Trophy,
		period: 'Apr 2026',
		title: 'Case Study Slam, Vol. 1',
		description:
			'The first community contest ships — teams submit real case studies, judged live by working PMs and designers.'
	},
	{
		id: 'milestone-5',
		icon: Users,
		period: 'Jun 2026',
		title: '1,000 members',
		description:
			'Membership crosses four figures, spanning fintech, e-commerce, logistics, and telco product teams.'
	},
	{
		id: 'milestone-6',
		icon: LayoutGrid,
		period: 'Aug 2026',
		title: 'Products board launches',
		description:
			'Members start listing what they are building and get their first users straight from the community.'
	}
];

export const valuePillars: ValuePillar[] = [
	{
		icon: Users,
		title: 'Built by the room, not for it',
		description:
			'Every session, mentor match, and contest rule gets shaped by the members using it — not decided in a boardroom nobody is in.'
	},
	{
		icon: TrendingUp,
		title: 'Numbers stay in the story',
		description:
			'Case studies and talks keep the metrics, the failed version, and the messy middle — not just the polished outcome.'
	},
	{
		icon: Unlock,
		title: 'Access before pedigree',
		description:
			"A mentor's Tuesday-night 1:1 counts the same whether you're at a unicorn or three months into your first PM job."
	},
	{
		icon: MapPin,
		title: 'Show up in person',
		description:
			'Dhaka meetups and Adda sessions come first — the platform exists to organize what already happens in a room.'
	}
];

export const aboutTeam: TeamMember[] = [
	{ username: 'imran-hossain', designation: 'Founder' },
	{
		username: 'iftekhar-alam',
		designation: 'Co-Founder & Head of Mentorship'
	},
	{ username: 'nusrat-jahan', designation: 'Head of Community' },
	{ username: 'sadia-afrin', designation: 'Head of Partnerships' }
];
