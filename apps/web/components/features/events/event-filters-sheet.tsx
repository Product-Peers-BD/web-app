'use client';

import { SlidersHorizontal } from 'lucide-react';

import { EventFormat, EventType } from '@/enums/event';
import { eventFormatLabels, eventTypeLabels } from '@/utils/labels';
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

export interface EventFiltersState {
	types: EventType[];
	formats: EventFormat[];
	categories: string[];
	tags: string[];
	price: 'ALL' | 'FREE' | 'PAID';
	registration: 'ALL' | 'YES' | 'NO';
	dateFrom: string;
	dateTo: string;
}

interface EventFiltersSheetProps {
	filters: EventFiltersState;
	onChange: (filters: EventFiltersState) => void;
	onReset: () => void;
	allCategories: string[];
	allTags: string[];
	activeCount: number;
}

function FilterGroupLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
			{children}
		</p>
	);
}

export function EventFiltersSheet({
	filters,
	onChange,
	onReset,
	allCategories,
	allTags,
	activeCount
}: EventFiltersSheetProps) {
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
						Narrow the list by type, format, audience, and topic.
					</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col gap-6 px-4">
					<div className="flex flex-col gap-2">
						<FilterGroupLabel>Event type</FilterGroupLabel>
						<ToggleGroup
							type="multiple"
							variant="outline"
							size="sm"
							value={filters.types}
							onValueChange={(value) =>
								onChange({
									...filters,
									types: value as EventType[]
								})
							}
							className="flex-wrap justify-start"
						>
							{Object.values(EventType).map((type) => (
								<ToggleGroupItem
									key={type}
									value={type}
									className="rounded-sm! text-xs"
								>
									{eventTypeLabels[type]}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</div>

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

					{allCategories.length > 0 ? (
						<div className="flex flex-col gap-2">
							<FilterGroupLabel>Category</FilterGroupLabel>
							<ToggleGroup
								type="multiple"
								variant="outline"
								size="sm"
								value={filters.categories}
								onValueChange={(value) =>
									onChange({ ...filters, categories: value })
								}
								className="flex-wrap justify-start"
							>
								{allCategories.map((category) => (
									<ToggleGroupItem
										key={category}
										value={category}
										className="rounded-sm! text-xs"
									>
										{category}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</div>
					) : null}

					{allTags.length > 0 ? (
						<div className="flex flex-col gap-2">
							<FilterGroupLabel>Tags</FilterGroupLabel>
							<ToggleGroup
								type="multiple"
								variant="outline"
								size="sm"
								value={filters.tags}
								onValueChange={(value) =>
									onChange({ ...filters, tags: value })
								}
								className="flex-wrap justify-start"
							>
								{allTags.map((tag) => (
									<ToggleGroupItem
										key={tag}
										value={tag}
										className="rounded-sm! text-xs"
									>
										{tag}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</div>
					) : null}

					<div className="flex flex-col gap-2">
						<FilterGroupLabel>Price</FilterGroupLabel>
						<ToggleGroup
							type="single"
							variant="outline"
							size="sm"
							value={filters.price}
							onValueChange={(value) =>
								value &&
								onChange({
									...filters,
									price: value as EventFiltersState['price']
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

					<div className="flex flex-col gap-2">
						<FilterGroupLabel>Registration</FilterGroupLabel>
						<ToggleGroup
							type="single"
							variant="outline"
							size="sm"
							value={filters.registration}
							onValueChange={(value) =>
								value &&
								onChange({
									...filters,
									registration:
										value as EventFiltersState['registration']
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
								value="YES"
								className="rounded-sm! text-xs"
							>
								Has registration
							</ToggleGroupItem>
							<ToggleGroupItem
								value="NO"
								className="rounded-sm! text-xs"
							>
								Informational
							</ToggleGroupItem>
						</ToggleGroup>
					</div>

					<div className="flex flex-col gap-2">
						<FilterGroupLabel>Date range</FilterGroupLabel>
						<div className="flex items-center gap-2">
							<input
								type="date"
								value={filters.dateFrom}
								onChange={(event) =>
									onChange({
										...filters,
										dateFrom: event.target.value
									})
								}
								className="h-8 flex-1 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
							/>
							<span className="text-xs text-muted-foreground">
								to
							</span>
							<input
								type="date"
								value={filters.dateTo}
								onChange={(event) =>
									onChange({
										...filters,
										dateTo: event.target.value
									})
								}
								className="h-8 flex-1 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
							/>
						</div>
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
