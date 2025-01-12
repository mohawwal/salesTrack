import { Badge, CirclePlus } from "lucide-react";
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
			<div className="">
				{/* new */}
					<div className="my-5">
						
						<div className="flex items-center gap-[20px] cursor-pointer text-[12.5px] my-7">
							<div>
								<input
									type="text"
									placeholder="Supplier name..."
									className=" border bg-inherit h-[30px] px-2 rounded-lg"
								/>
							</div>
							<div className="flex items-centers gap-1 text-[12px] border border-border px-2 rounded-md py-[3px] hover:bg-primary">
								<div className="flex items-center">
									<CirclePlus className="w-[14px] h-[14px]" />
								</div>
								<p>Status</p>
							</div>
						</div>
					</div>
				{/* old */}
			</div>
			<div className="mt-4">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 cursor-pointer">
					{supplierNames.map((name) => (
						<Link
							to={`/supplier/${name?.company?.toLocaleLowerCase()}`}
							key={name.id}
							className={`border hover:border-foreground m-1 overflow h-[130px] hover:bg-primary hover:text-background rounded-lg flex flex-col group`}
						>
							{name.TotalSupply > 0 && (
								<div className="h-[20%] text-[12px] text-card py-2 px-1">
									<div className=" flex justify-end items-center gap-2 text-foreground">
										<div className="bg-chart-4 group-hover:bg-chart-2 group-hover:text-white text-background flex items-center gap-2 px-2 rounded-tl-lg rounded-bl-lg">
											<Badge className="w-3" />
											<p className="font-bold">{name.TotalSupply} Purchases</p>
										</div>
									</div>
								</div>
							)}
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
