'use client';

import { contactChannels } from '@/constants/contact';
import type { ContactType } from '@/enums/contact';
import { cn } from '@workspace/ui/lib/utils';

interface ChannelSelectorProps {
	value: ContactType;
	onChange: (type: ContactType) => void;
}

export function ChannelSelector({ value, onChange }: ChannelSelectorProps) {
	return (
		<div
			role="radiogroup"
			aria-label="What is this about?"
			className="flex flex-col gap-3"
		>
			{contactChannels.map((channel) => {
				const selected = value === channel.type;
				const Icon = channel.icon;

				return (
					<button
						key={channel.type}
						type="button"
						role="radio"
						aria-checked={selected}
						onClick={() => onChange(channel.type)}
						className={cn(
							'flex items-start gap-4 rounded-xl border px-4 py-4 text-left transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
							selected
								? 'border-primary bg-secondary/50'
								: 'border-border bg-card hover:border-primary/30 hover:bg-secondary/20'
						)}
					>
						<span
							className={cn(
								'flex size-9 shrink-0 items-center justify-center rounded-lg border',
								selected
									? 'border-primary/30 bg-primary/10 text-primary'
									: 'border-border bg-muted text-muted-foreground'
							)}
						>
							<Icon className="size-4" />
						</span>

						<span className="flex-1 pt-0.5">
							<span className="flex items-center justify-between gap-2">
								<span className="font-heading text-base font-semibold text-foreground">
									{channel.label}
								</span>
								<span
									aria-hidden
									className={cn(
										'flex size-4 shrink-0 items-center justify-center rounded-full border',
										selected
											? 'border-primary bg-primary'
											: 'border-border'
									)}
								>
									{selected ? (
										<span className="size-1.5 rounded-full bg-primary-foreground" />
									) : null}
								</span>
							</span>
							<span className="mt-1 block text-sm text-muted-foreground">
								{channel.blurb}
							</span>
						</span>
					</button>
				);
			})}
		</div>
	);
}
