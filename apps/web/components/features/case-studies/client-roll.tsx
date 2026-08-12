interface ClientRollProps {
	clientNames: string[];
}

export function ClientRoll({ clientNames }: ClientRollProps) {
	return (
		<div className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-border pt-6">
			<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
				Documented for
			</p>
			<ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
				{clientNames.map((name) => (
					<li
						key={name}
						className="font-mono text-xs tracking-wide text-foreground/70 uppercase"
					>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
}
