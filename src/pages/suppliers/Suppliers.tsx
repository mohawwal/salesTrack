import { Badge } from "lucide-react";
import { Link } from "react-router-dom";

const Suppliers = () => {
	const supplierNames = [
		{
			id: 1,
			company: "Golden Penny",
			TotalSupply: 300,
		},
		{
			id: 2,
			company: "Dangote",
			TotalSupply: 20,
		},
		{
			id: 3,
			company: "Banny",
			TotalSupply: 400,
		},
		{
			id: 4,
			company: "Apple",
			TotalSupply: 30,
		},
		{
			id: 5,
			company: "Samsung lorem",
			TotalSupply: 0,
		},
	];
	return (
		<div className="w-[95%] my-3 mx-auto">
			<div className="text-center flex flex-col">
				{/* <span className="font-Roboto">Product Suppliers</span> */}
			</div>
			<div className="mt-4">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 cursor-pointer">
					{supplierNames.map((name) => (
						<Link
							to={`/supplier/${name?.company?.toLocaleLowerCase()}`}
							key={name.id}
							className={`border border-border overflow h-[130px] hover:bg-primary hover:text-background ${
								name.id === 1 && "rounded-tl-lg"
							} flex flex-col group`}
						>
							<div className="h-[20%] text-[12px] text-card py-2 px-1">
								<div className=" flex justify-end items-center gap-2 text-foreground">
									<div className="bg-foreground group-hover:bg-chart-1 group-hover:text-white text-background flex items-center gap-2 px-2 rounded-tl-lg rounded-bl-lg">
										<Badge className="w-3" />
										<p className="font-bold">{name.TotalSupply} Purchases</p>
									</div>
								</div>
							</div>
							<p className="h-[80%] text-center flex items-center justify-center p-2 font-bold text-[1.1rem]">
								{name.company}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Suppliers;
