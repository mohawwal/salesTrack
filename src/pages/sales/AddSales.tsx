import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "../../components/hooks/use-toast";
import { Button } from "../../components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

const FormSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
});

const AddSales = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<div>
			<div>
				<Dialog>
					<DialogTrigger>
            <div className="m-4">
              <Button>sold a product</Button>
            </div>
          </DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="text-center">Add Item</DialogTitle>
							<DialogDescription>
								<div>
									<Form {...form}>
										<form
											onSubmit={form.handleSubmit(onSubmit)}
											className="w-2/3 space-y-6"
										>
											<FormField
												control={form.control}
												name="username"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Product</FormLabel>
														<FormControl>
															<Input
																placeholder="shadcn"
																{...field}
															/>
														</FormControl>
														<FormDescription>
															This is your public display name.
														</FormDescription>
														<FormMessage />
													</FormItem>
												)}
											/>
											<Button type="submit">Submit</Button>
										</form>
									</Form>
								</div>
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default AddSales;
