import Link from 'next/link';

import { Button } from '@workspace/ui/components/button';

export function JoinCommunityCta() {
	return (
		<section className="relative overflow-hidden bg-[#0f1b19]">
			<div
				aria-hidden
				className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
			/>
			<div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
				<h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					1,200+ product people already showed up.
				</h2>
				<span
					aria-hidden
					className="mt-4 h-1 w-14 rounded-full bg-accent"
				/>
				<p className="mt-5 max-w-md text-base text-[#8fb0ab]">
					Create your profile, register for the next event, and see
					what the community is shipping.
				</p>
				<Button
					asChild
					variant="accent"
					size="lg"
					className="mt-8 h-11 px-7 text-base"
				>
					<Link href="/register">Join Now</Link>
				</Button>
			</div>
		</section>
	);
}
