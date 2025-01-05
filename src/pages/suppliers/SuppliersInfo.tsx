import {
	Edit2,
	Filter,
	CloudDownload,
	CircleOff,
	ChevronsUpDown,
	Check,
} from "lucide-react";
import { useParams } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus } from "lucide-react";

import { useState } from "react";

import { Button } from "../../components/ui/button";
import {
	Form,
	FormControl,
	//FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

import { cn } from "../../lib/utils";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "../../components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../../components/ui/popover";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../../components/ui/hover-card";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../components/ui/dialog";

// Define the form schema
const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	description: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
	price: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
	stock: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
	supplier: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
	size: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
});

const SuppliersInfo = () => {
	const { company } = useParams();

	const soldGoods = [
		{
			ProductName: "Wireless Mouse",
			Quantity: 2,
			Status: "Delivered",
			PaymentMethod: "Credit Card",
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Confirm: "Received",
			Amount: 29965.99,
			comment: "Mama Jide said there is goods for you",
			UpdatedBy: "Femi",
			Date: "2024-Oct-15",
		},
		{
			ProductName: " Messager Mobile",
			Quantity: 2,
			Status: "Delivered",
			PaymentMethod: "Credit Card",
			Deposit: 0,
			Balance: 0,
			Receipt: false,
			Confirm: "failed",
			Amount: 29965.99,
			comment: "Mama Jide said no goods for you",
			UpdatedBy: "Wally",
			Date: "2024-Oct-15",
		},
	];
	const frameworks = [
		{
			value: "next.js",
			label: "Next.js",
		},
		{
			value: "sveltekit",
			label: "SvelteKit",
		},
		{
			value: "nuxt.js",
			label: "Nuxt.js",
		},
		{
			value: "remix",
			label: "Remix",
		},
		{
			value: "astro",
			label: "Astro",
		},
	];

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			category: "",
			description: "",
			price: "",
			stock: "",
			supplier: "",
			size: "",
		},
	});

	// Handle form submission
	const onSubmit = (data: { username: string }) => {
		console.log("Form Data:", data);
	};

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<div className="w-[90%] m-auto mt-3">
			<div>
				<div className="flex items-center gap-4">
					<span className="text-[1.4rem] font-semibold">
						{company?.toUpperCase()}
					</span>
					<Dialog>
						<DialogTrigger>
							<span className="bg-primary rounded-[50%] flex items-center justify-center w-6 h-6">
								<Edit2 className="w-4 h-4 text-background" />
							</span>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Edit Company Profile</DialogTitle>
								<DialogDescription>
									<Form {...form}>
										<form
											onSubmit={form.handleSubmit(onSubmit)}
											className="space-y-4 my-3"
										>
											<FormField
												control={form.control}
												name="username"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Name</FormLabel>
														<FormControl>
															<Input
																placeholder="Product name"
																{...field}
															/>
														</FormControl>
														{/* <FormDescription>
									This is your public display name.
								    </FormDescription> */}
														<FormMessage />
													</FormItem>
												)}
											/>
											<div>
												<div className="mb-2">Category</div>
												<Popover
													open={open}
													onOpenChange={setOpen}
												>
													<PopoverTrigger asChild>
														<Button
															variant="outline"
															role="combobox"
															aria-expanded={open}
															className="w-max-[220px] justify-between"
														>
															{value ? (
																frameworks.find(
																	(framework) => framework.value === value,
																)?.label
															) : (
																<div className="opacity-50">
																	select product category...
																</div>
															)}
															<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
														</Button>
													</PopoverTrigger>
													<PopoverContent className="w-[220px] p-0">
														<Command>
															<CommandInput placeholder="Search framework..." />
															<CommandList>
																<CommandEmpty>No framework found.</CommandEmpty>
																<CommandGroup>
																	{frameworks.map((framework) => (
																		<CommandItem
																			key={framework.value}
																			value={framework.value}
																			onSelect={(currentValue) => {
																				setValue(
																					currentValue === value
																						? ""
																						: currentValue,
																				);
																				setOpen(false);
																			}}
																		>
																			<Check
																				className={cn(
																					"mr-2 h-4 w-4",
																					value === framework.value
																						? "opacity-100"
																						: "opacity-0",
																				)}
																			/>
																			{framework.label}
																		</CommandItem>
																	))}
																</CommandGroup>
															</CommandList>
															<Dialog>
																<DialogTrigger>
																	<div className="p-2 cursor-pointer flex items-center justify-start border-t-[1.5px]">
																		<div className="flex flex-row gap-3 ">
																			<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
																				<Plus className="h-3 w-3" />
																			</div>
																			<p className="text-[13px]">
																				Add new category
																			</p>
																		</div>
																	</div>
																</DialogTrigger>
																<DialogContent>
																	<DialogHeader>
																		<DialogTitle>Category</DialogTitle>
																		<DialogDescription>
																			<FormControl>
																				<Input placeholder="Category name" />
																			</FormControl>
																			<Button className="mt-4">Enter</Button>
																		</DialogDescription>
																	</DialogHeader>
																</DialogContent>
															</Dialog>
														</Command>
													</PopoverContent>
												</Popover>
											</div>
											<FormField
												control={form.control}
												name="stock"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Stock</FormLabel>
														<FormControl>
															<Input
																placeholder="Amount of Items added"
																{...field}
															/>
														</FormControl>
														{/* <FormDescription>
									This is your public display name.
								    </FormDescription> */}
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="supplier"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Supplier</FormLabel>
														<FormControl>
															<Input
																placeholder="Supply Name"
																{...field}
															/>
														</FormControl>
														{/* <FormDescription>
									This is your public display name.
								    </FormDescription> */}
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="description"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Description</FormLabel>
														<FormControl>
															<Input
																placeholder="Description of your product"
																{...field}
															/>
														</FormControl>
														{/* <FormDescription>
									This is your public display name.
								    </FormDescription> */}
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="price"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Price</FormLabel>
														<FormControl>
															<Input
																placeholder="Price of your product"
																{...field}
															/>
														</FormControl>
														{/* <FormDescription>
									This is your public display name.
								    </FormDescription> */}
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="size"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Size/Variants</FormLabel>
														<FormControl>
															<Input
																placeholder="List of available sizes or variants"
																{...field}
															/>
														</FormControl>
														{/* <FormDescription>
									This is your public display name.
								    </FormDescription> */}
														<FormMessage />
													</FormItem>
												)}
											/>
											<div>
												<Button type="submit">Submit</Button>
											</div>
										</form>
									</Form>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
				<div className="text-[14px]">
					<div className="w-[90%] mt-4">
						<p className="opacity-40 underline text-[12.5px]">About</p>
						<p className="text-[13px]">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
							explicabo nostrum, delectus, maxime iure excepturi recusandae
							culpa dolores nobis laboriosam totam dolor minus architecto animi
							illo optio sed error aliquid.
						</p>
					</div>
					<div className="mt-4">
						<p className="opacity-40 underline text-[12.5px]">Location</p>
						<div className="text-[13px]">
							<p>4, Gloriza ketu, 200, Ig Lagos</p>
							<p>6, Gloriza ketu, 200, Ig Lagos</p>
						</div>
					</div>
					<div className="mt-4">
						<p className="opacity-40 underline text-[12.5px]">Contact</p>
						<div className="text-[13px]">
							<p>+234563729783</p>
							<p>+578986758647</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6">
				<div>
					<div className="w-full flex justify-end my-4">
						<span className="flex items-center justify-center gap-1 hover:bg-border w-6 h-6 rounded-md bg-primary">
							<Filter className="w-4 h-4 cursor-pointer text-background" />
						</span>
					</div>
					<Table className="overflow-x-scroll mx-2">
						<TableCaption className="text-[12px]">
							List Of The Product Bought.
						</TableCaption>
						<TableHeader>
							<TableRow className="text-[12px]">
								<TableHead className="px-3">ProductName</TableHead>
								<TableHead className="px-3">Quantity</TableHead>
								<TableHead className="px-3">Status</TableHead>
								<TableHead className="px-3">PaymentMethod</TableHead>
								<TableHead className="px-3">Deposit</TableHead>
								<TableHead className="px-3">Balance</TableHead>
								<TableHead className="px-3">Amount</TableHead>
								<TableHead className="px-3">Receipt</TableHead>
								<TableHead className="px-3 w-[200px]">Confirm</TableHead>
								<TableHead className="px-3 w-[200px]">Comment</TableHead>
								<TableHead className="px-3 w-[200px]">UpdatedBy</TableHead>
								<TableHead className="px-3 w-[100px]">Date</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{soldGoods.map((sold) => (
								<TableRow className="text-[12px]">
									<TableCell className="px-3 font-bold w-[200px] items-start whitespace-nowrap">
										{sold.ProductName}
									</TableCell>
									<TableCell className="px-3 text-center font-bold">
										{sold.Quantity}
									</TableCell>
									<TableCell className="w-[100px] px-3 text-center font-bold">
										{sold.Status}
									</TableCell>
									<TableCell className="px-3 text-[12px] whitespace-nowrap">
										{sold.PaymentMethod}
									</TableCell>
									<TableCell className="px-3 w-[150px] text-[12px]">
										{sold.Deposit.toLocaleString("en-US", {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</TableCell>
									<TableCell className="px-3">
										<span className="text-right text-[12px]">
											{sold.Balance.toLocaleString("en-US", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</span>
									</TableCell>
									<TableCell className="px-3">
										<span className="text-right text-[12.3px] font-bold">
											{sold.Amount.toLocaleString("en-US", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</span>
									</TableCell>
									<TableCell className="px-3 flex justify-center items-center">
										<div>
											{sold.Receipt ? (
												<CloudDownload className="w-[16px] hover:text-blue-500" />
											) : (
												<CircleOff className="w-[16px] hover:text-red-500" />
											)}
										</div>
									</TableCell>
									<TableCell className="px-3 w-[200px]">
										{sold.Confirm === "Received" ? (
											<div className="bg-green-600 rounded-2xl text-[11px] text-white font-bold text-center px-2">
												Success
											</div>
										) : sold.Confirm === "Processing" ? (
											<div className="bg-yellow-500 rounded-2xl text-[11px] text-white font-bold text-center px-2">
												Processing
											</div>
										) : (
											<div className="bg-red-600 rounded-2xl text-[11px] text-white font-bold text-center px-2">
												Failed
											</div>
										)}
									</TableCell>
									<HoverCard>
										<HoverCardTrigger>
											<TableCell className="px-3 hover:text-primary hover:underline  cursor-pointer text-[11.5px] whitespace-nowrap">
												{sold.comment?.length > 10
													? sold.comment.split(" ")[0] + "..."
													: sold.comment}
											</TableCell>
										</HoverCardTrigger>
										<HoverCardContent>{sold.comment}</HoverCardContent>
									</HoverCard>
									<TableCell className="px-3 hover:text-primary hover:underline cursor-pointer text-[11.5px]">
										{sold.UpdatedBy}
									</TableCell>
									<TableCell className="px-3 w-[100px] opacity-65 whitespace-nowrap text-[11px]">
										{sold.Date}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default SuppliersInfo;
