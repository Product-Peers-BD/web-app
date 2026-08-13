'use client';

import { CircleCheck } from 'lucide-react';
import { useState } from 'react';

import { contactChannels, contactMessageLimits } from '@/constants/contact';
import type { ContactType } from '@/enums/contact';
import type { ContactFormValues } from '@/types/contact';
import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { Textarea } from '@workspace/ui/components/textarea';
import { cn } from '@workspace/ui/lib/utils';

interface ContactFormProps {
	contactType: ContactType;
}

const initialValues: ContactFormValues = {
	name: '',
	email: '',
	phone: '',
	message: ''
};

export function ContactForm({ contactType }: ContactFormProps) {
	const [values, setValues] = useState<ContactFormValues>(initialValues);
	const [honeypot, setHoneypot] = useState('');
	const [messageError, setMessageError] = useState<string | null>(null);
	const [submitted, setSubmitted] = useState(false);

	function updateField<Field extends keyof ContactFormValues>(
		field: Field,
		value: ContactFormValues[Field]
	) {
		setValues((current) => ({ ...current, [field]: value }));
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// TODO: honeypot is a spam trap — a filled value means a bot filled the form.
		if (honeypot) {
			return;
		}

		const messageLength = values.message.trim().length;
		if (
			messageLength < contactMessageLimits.min ||
			messageLength > contactMessageLimits.max
		) {
			setMessageError(
				`Message should be between ${contactMessageLimits.min} and ${contactMessageLimits.max} characters.`
			);
			return;
		}

		setMessageError(null);
		setSubmitted(true);
	}

	function handleReset() {
		setValues(initialValues);
		setMessageError(null);
		setSubmitted(false);
	}

	if (submitted) {
		const channel = contactChannels.find(
			(candidate) => candidate.type === contactType
		);

		return (
			<div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
				<CircleCheck className="size-8 text-primary" />
				<h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
					Message sent.
				</h2>
				<p className="mt-2 max-w-xs text-sm text-muted-foreground">
					Thanks, {values.name.split(' ')[0] || 'there'} — we&apos;ll
					get back to you soon. {channel?.responseNote}
				</p>
				<Button
					type="button"
					variant="outline"
					size="sm"
					className="mt-6"
					onClick={handleReset}
				>
					Send another message
				</Button>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="rounded-2xl border border-border bg-card p-6 sm:p-8"
		>
			<div className="flex flex-col gap-5">
				<input
					type="text"
					name="company"
					value={honeypot}
					onChange={(event) => setHoneypot(event.target.value)}
					tabIndex={-1}
					autoComplete="off"
					aria-hidden="true"
					className="sr-only"
				/>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="contact-name"
						className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase"
					>
						Name
					</label>
					<Input
						id="contact-name"
						required
						value={values.name}
						onChange={(event) =>
							updateField('name', event.target.value)
						}
						placeholder="Your full name"
						className="h-10"
					/>
				</div>

				<div className="grid gap-5 sm:grid-cols-2">
					<div className="flex flex-col gap-2">
						<label
							htmlFor="contact-email"
							className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase"
						>
							Email
						</label>
						<Input
							id="contact-email"
							type="email"
							required
							value={values.email}
							onChange={(event) =>
								updateField('email', event.target.value)
							}
							placeholder="you@company.com"
							className="h-10"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label
							htmlFor="contact-phone"
							className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase"
						>
							Phone{' '}
							<span className="normal-case">(optional)</span>
						</label>
						<Input
							id="contact-phone"
							type="tel"
							value={values.phone}
							onChange={(event) =>
								updateField('phone', event.target.value)
							}
							placeholder="+880"
							className="h-10"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex items-end justify-between gap-2">
						<label
							htmlFor="contact-message"
							className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase"
						>
							Message
						</label>
						<span
							className={cn(
								'font-mono text-[10px] tabular-nums',
								values.message.length > contactMessageLimits.max
									? 'text-destructive'
									: 'text-muted-foreground'
							)}
						>
							{values.message.length} / {contactMessageLimits.max}
						</span>
					</div>
					<Textarea
						id="contact-message"
						required
						value={values.message}
						onChange={(event) => {
							updateField('message', event.target.value);
							if (messageError) setMessageError(null);
						}}
						placeholder="What's going on? The more detail, the faster we can help."
						className="min-h-32"
						aria-invalid={Boolean(messageError)}
					/>
					{messageError ? (
						<p className="text-xs text-destructive">
							{messageError}
						</p>
					) : null}
				</div>

				<Button
					type="submit"
					variant="accent"
					size="lg"
					className="h-11 text-base"
				>
					Send message
				</Button>
			</div>
		</form>
	);
}
