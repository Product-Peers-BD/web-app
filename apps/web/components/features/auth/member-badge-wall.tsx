import { Reveal } from '@/components/snippets/reveal/reveal';
import { authBadgeMembers } from '@/constants/auth';
import { getInitials } from '@/utils/get-initials';
import { cn } from '@workspace/ui/lib/utils';

export function MemberBadgeWall() {
	return (
		<div className="relative flex h-full min-h-[26rem] flex-col justify-center overflow-hidden bg-[#0f1b19] px-8 py-16 text-[#eaf6f4] sm:px-12 lg:px-14">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[22px_22px]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-[#14b8a6]/15 blur-3xl"
			/>

			<Reveal
				trigger="mount"
				className="relative"
			>
				<p className="font-mono text-xs tracking-[0.2em] text-[#5fa89f] uppercase">
					Who you&apos;ll meet
				</p>
				<p className="mt-2 max-w-xs text-sm text-[#8fb0ab]">
					1,204 product people are already in. 46 of them wear the
					Mentor badge.
				</p>
			</Reveal>

			<ol className="relative mt-8 space-y-3">
				{authBadgeMembers.map((member, index) => (
					<Reveal
						key={member.name}
						trigger="mount"
						delay={140 + index * 90}
					>
						<li className="flex items-center gap-4 rounded-xl bg-white/[0.03] px-4 py-3">
							<span
								aria-hidden
								className={cn(
									'flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 font-mono text-xs text-[#eaf6f4] ring-1',
									member.isMentor
										? 'ring-[#f2a93b]/50'
										: 'ring-[#14b8a6]/50'
								)}
							>
								{getInitials(member.name)}
							</span>
							<span className="min-w-0 flex-1">
								<span className="block truncate font-heading text-sm font-semibold text-white">
									{member.name}
								</span>
								<span className="block text-xs text-[#8fb0ab]">
									{member.title} · {member.company}
								</span>
							</span>
							<span
								className={cn(
									'shrink-0 font-mono text-[10px] tracking-[0.15em] uppercase',
									member.isMentor
										? 'text-[#f2a93b]'
										: 'text-[#5fa89f]'
								)}
							>
								{member.isMentor ? 'Mentor' : 'Member'}
							</span>
						</li>
					</Reveal>
				))}
			</ol>

			<Reveal
				trigger="mount"
				delay={520}
				className="relative mt-10 flex items-center gap-2.5 border-t border-white/10 pt-6"
			>
				<span className="relative flex size-1.5">
					<span className="absolute inline-flex size-full rounded-full bg-[#14b8a6]/70 motion-safe:animate-ping" />
					<span className="relative inline-flex size-1.5 rounded-full bg-[#14b8a6]" />
				</span>
				<p className="font-mono text-xs tracking-wide text-[#8fb0ab]">
					82 product people joined this month.
				</p>
			</Reveal>
		</div>
	);
}
