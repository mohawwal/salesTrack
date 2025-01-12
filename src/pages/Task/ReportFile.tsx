
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


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

 //Define the form schema
 const formSchema = z.object({
    Name: z.string().min(2, {
        message: "Name can not be empty.",
    }),
    About: z.string().min(2, {
        message: "About can not be empty.",
    }),
    Location: z.string().min(2, {
        message: "Location can not be empty.",
    }),
    Contact: z.string().min(2, {
        message: "Contact can not be empty.",
    }),
});
const ReportFile = () => {
   const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            About: "",
            Location: "",
            Contact: "",
        },
    });
   
    // Handle form submission
    const onSubmit = (data: {
        Name: string;
        About: string;
        Location: string;
    }) => {
        console.log("Form Data:", data);
    };
	return (
		<div>
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
										placeholder="Product name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="About"
						render={({ field }) => (
							<FormItem>
								<FormLabel>About</FormLabel>
								<FormControl>
									<div className="relative w-full">
										<div className="w-full p-2 border border-border rounded-md focus-within:border-primary">
											<textarea
												className="w-full p-0 outline-none bg-transparent"
												placeholder="About the company/Brand"
												{...field}
											/>
										</div>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="Location"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Location</FormLabel>
								<FormControl>
									<Input
										placeholder="company address/Location"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="Contact"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contact</FormLabel>
								<FormControl>
									<Input
										placeholder="Company Contact"
										{...field}
									/>
								</FormControl>
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
	);
};

export default ReportFile;
