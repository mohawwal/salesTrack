import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/button";
import {
	Form,
	FormControl,
	//FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../components/ui/dialog";

// Define the form schema
const formSchema = z.object({
	Name: z.string().min(2, {
		message: "Name can not be empty.",
	}),
	Duty: z.string().min(2, {
		message: "Duty can not be empty.",
	}),
	Role: z.string().min(2, {
		message: "Role can not be empty.",
	}),
});

type Staff = {
	name: string;
	type: string;
	notification: number;
};

const AddStaffForm: React.FC<{ companyStaffs: Array<Staff> }> = ({
	companyStaffs,
}) => {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			Name: "",
			Duty: "",
			Role: "",
		},
	});

	// Handle form submission
	const onSubmit = (data: { Name: string; Duty: string; Role: string }) => {
		console.log("Form Data:", data);
	};

	return (
		<div>
			<Dialog>
				<DialogTrigger className="w-full">
					{companyStaffs.length <= 2 && (
						<button className="bg-primary w-full text-background text-[12px] rounded-lg py-1 border-2 border-white hover:bg-chart-1">
							Add a staff
						</button>
					)}
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Add a co-worker</DialogTitle>
						<DialogDescription>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4 my-3"
								>
									<FormField
										control={form.control}
										name="Name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input
														placeholder="worker name"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="Duty"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Duty</FormLabel>
												<FormControl>
													<Input
														placeholder="Select Duty: Sales Manager"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="Role"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Role</FormLabel>
												<Select
													onValueChange={(value) => field.onChange(value)}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select a staff Role" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="m@example.com">Admin</SelectItem>
														<SelectItem value="m@google.com">Worker</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div>
										<Button
											className="w-full"
											type="submit"
										>
											Generate a link
										</Button>
									</div>
								</form>
							</Form>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AddStaffForm;
