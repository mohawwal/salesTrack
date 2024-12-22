"use client";

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

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../lib/utils";
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
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../components/ui/dialog";

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

const AddProduct = () => {
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
		<div className="w-[100%]">
			<div className="w-[80%] mx-auto">
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
											frameworks.find((framework) => framework.value === value)
												?.label
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
																currentValue === value ? "" : currentValue,
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
														<p className="text-[13px]">Add new category</p>
													</div>
												</div>
											</DialogTrigger>
											<DialogContent>
												<DialogHeader>
													<DialogTitle>Category</DialogTitle>
													<DialogDescription>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Category name"
                                                            />
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
			</div>
		</div>
	);
};

export default AddProduct;
