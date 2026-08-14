import Image from 'next/image';
import Link from 'next/link';

import { footerLinkGroups, socialLinks } from '@/configs/footer';
import { siteConfig } from '@/configs/site';

export function Footer() {
	return (
		<footer className="border-t border-white/10 bg-[#0f1b19] text-[#eaf6f4]">
			<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
					<div className="col-span-2 sm:col-span-1">
						<div className="relative aspect-628/240 h-7">
							<Image
								src="/logo/lockup-light.svg"
								alt="Product Peers BD"
								fill
								className="object-contain object-left"
							/>
						</div>
						<p className="mt-4 max-w-[22ch] text-sm text-[#8fb0ab]">
							{siteConfig.tagline}
						</p>
					</div>

					{footerLinkGroups.map((group) => (
						<div key={group.title}>
							<p className="font-mono text-xs tracking-[0.2em] text-[#5fa89f] uppercase">
								{group.title}
							</p>
							<ul className="mt-4 space-y-2.5">
								{group.items.map((item) => (
									<li key={item.href}>
										<Link
											href={item.href}
											className="text-sm text-[#c3ddd8] transition-colors hover:text-white"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
					<p className="font-mono text-xs text-[#5fa89f]">
						© {new Date().getFullYear()} Product Peers BD. Built by
						the community.
					</p>
					<div className="flex items-center gap-5">
						{socialLinks.map((social) => (
							<Link
								key={social.href}
								href={social.href}
								className="font-mono text-xs tracking-wide text-[#8fb0ab] transition-colors hover:text-white"
							>
								{social.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
