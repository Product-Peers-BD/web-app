'use client';

import { SlidersHorizontal } from 'lucide-react';

import { EventFormat } from '@/enums/event';
import { eventFormatLabels } from '@/utils/labels';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@workspace/ui/components/sheet';
import {
	ToggleGroup,
	ToggleGroupItem
} from '@workspace/ui/components/toggle-group';

export interface ContestFiltersState {
	formats: EventFormat[];
	price: 'ALL' | 'FREE' | 'PAID';
}

interface ContestFiltersSheetProps {
	filters: ContestFiltersState;
	onChange: (filters: ContestFiltersState) => void;
	onReset: () => void;
	activeCount: number;
}

function FilterGroupLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
			{children}
		</p>
	);
}

export function ContestFiltersSheet({
	filters,
	onChange,
	onReset,
	activeCount
}: ContestFiltersSheetProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="sm"
				>
					<SlidersHorizontal className="size-3.5" />
					Filters
					{activeCount > 0 ? (
						<Badge className="ml-1 h-4 min-w-4 justify-center rounded-4xl px-1 text-[10px]">
							{activeCount}
						</Badge>
					) : null}
				</Button>
			</SheetTrigger>
			<SheetContent className="overflow-y-auto">
				<SheetHeader>
					<SheetTitle>Filters</SheetTitle>
					<SheetDescription>
						Narrow the list by format and entry cost.
					</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col gap-6 px-4">
					<div className="flex flex-col gap-2">
						<FilterGroupLabel>Format</FilterGroupLabel>
						<ToggleGroup
							type="multiple"
							variant="outline"
							size="sm"
							value={filters.formats}
							onValueChange={(value) =>
								onChange({
									...filters,
									formats: value as EventFormat[]
								})
							}
							className="flex-wrap justify-start"
						>
							{Object.values(EventFormat).map((format) => (
								<ToggleGroupItem
									key={format}
									value={format}
									className="rounded-sm! text-xs"
								>
									{eventFormatLabels[format]}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</div>

					<div className="flex flex-col gap-2">
						<FilterGroupLabel>Entry cost</FilterGroupLabel>
						<ToggleGroup
							type="single"
							variant="outline"
							size="sm"
							value={filters.price}
							onValueChange={(value) =>
								value &&
								onChange({
									...filters,
									price: value as ContestFiltersState['price']
								})
							}
							className="justify-start"
						>
							<ToggleGroupItem
								value="ALL"
								className="rounded-sm! text-xs"
							>
								All
							</ToggleGroupItem>
							<ToggleGroupItem
								value="FREE"
								className="rounded-sm! text-xs"
							>
								Free
							</ToggleGroupItem>
							<ToggleGroupItem
								value="PAID"
								className="rounded-sm! text-xs"
							>
								Paid
							</ToggleGroupItem>
						</ToggleGroup>
					</div>
				</div>

				<SheetFooter className="flex-row">
					<Button
						variant="outline"
						onClick={onReset}
						className="flex-1"
					>
						Reset
					</Button>
					<SheetClose asChild>
						<Button className="flex-1">Show results</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
