import { siteConfig } from '@/configs/site';

import { CountdownValue } from './countdown-value';

interface StatusConsoleProps {
	launchDate: string | null;
}

export function StatusConsole({ launchDate }: StatusConsoleProps) {
	return (
		<div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-card">
			<div className="flex items-center border-b border-border bg-muted/40 px-5 py-3">
				<span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
					System status
				</span>
			</div>

			<div className="divide-y divide-border">
				<StatusRow label="Community">
					<LiveDot />
					Online
					<span className="text-muted-foreground">
						· {siteConfig.foundedLabel}
					</span>
				</StatusRow>

				<StatusRow label="Members">
					{siteConfig.memberCountLabel}
				</StatusRow>

				<StatusRow label="Platform">
					<span
						aria-hidden
						className="size-1.5 rounded-[2px] bg-accent"
					/>
					<span className="text-accent">Building</span>
				</StatusRow>

				<StatusRow label="Launch">
					{launchDate ? (
						<CountdownValue target={launchDate} />
					) : (
						<span className="text-muted-foreground">
							Locking soon
						</span>
					)}
				</StatusRow>
			</div>
		</div>
	);
}

function StatusRow({
	label,
	children
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex items-center justify-between px-5 py-3.5">
			<span className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
				{label}
			</span>
			<span className="flex items-center gap-2 font-mono text-sm font-medium text-foreground tabular-nums">
				{children}
			</span>
		</div>
	);
}

function LiveDot() {
	return (
		<span className="relative flex size-2">
			<span className="absolute inline-flex size-full rounded-full bg-primary/70 motion-safe:animate-ping" />
			<span className="relative inline-flex size-2 rounded-full bg-primary" />
		</span>
	);
}
