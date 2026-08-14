import Link from 'next/link';

import type { ProductDetail } from '@/types/product';
import { getInitials } from '@/utils/get-initials';
import { Avatar, AvatarFallback } from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';

import { ProductDetailSection } from './product-detail-section';

interface ProductTeamProps {
	product: ProductDetail;
}

export function ProductTeam({ product }: ProductTeamProps) {
	if (product.team.length === 0) return null;

	return (
		<ProductDetailSection title={product.companyName ?? 'Team'}>
			<div className="grid gap-3 sm:grid-cols-2">
				{product.team.map((member) => (
					<Link
						key={member.slug}
						href={`/u/${member.slug}`}
						className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-primary/40"
					>
						<Avatar>
							<AvatarFallback className="bg-primary/10 font-heading text-xs text-primary">
								{getInitials(member.name)}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0">
							<div className="flex items-center gap-1.5">
								<p className="truncate font-heading text-sm font-semibold text-foreground group-hover:text-primary">
									{member.name}
								</p>
								{member.isCreator ? (
									<Badge className="h-4 shrink-0 rounded-sm px-1.5 text-[9px] tracking-wide uppercase">
										Creator
									</Badge>
								) : null}
							</div>
							<p className="truncate text-xs text-muted-foreground">
								{member.role}
							</p>
						</div>
					</Link>
				))}
			</div>
		</ProductDetailSection>
	);
}
