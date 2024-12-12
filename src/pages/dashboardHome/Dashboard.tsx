import { TrendingUp, TrendingDown } from "lucide-react";
import { SalesChart } from "./SalesChart";
import { SellerPieChat } from "./SellerPieChat";
import { SellerBarChat } from "./SellerBarChat";
import { SalesLineChart } from "./SalesLineChart";

const Dashboard = () => {
	return (
		<div className="w-full h-full">
			<div className="h-full w-[96%] mx-auto pt-3 pb-9">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 mb-6">
					<div className="bg-[#E3F5FF] p-5 rounded-xl shadow-sm ">
						<h3 className="text-foreground text-[13.5px] mb-2">Stock</h3>
						<div className="flex items-center gap-2">
							<p className="text-popover-foreground text-[16.5px] font-semibold">3,671</p>
							<span className="gap-1 text-[12px] flex items-center text-foreground">
								-0.03%
								<TrendingUp className="w-3 h-3" />
							</span>
						</div>
					</div>
					<div className="bg-[#E5ECF6] p-5 rounded-xl shadow-sm ">
						<h3 className="text-foreground text-[13.5px] mb-2">Profit</h3>
						<div className="flex items-center gap-2">
							<p className="text-popover-foreground text-[16.5px] font-semibold">1,601</p>
							<span className="gap-1 flex items-center text-[12px] text-foreground">
								-0.01%
								<TrendingDown className="w-3 h-3" />
							</span>
						</div>
					</div>
					<div className="bg-[#E3F5FF] p-5 rounded-xl shadow-sm ">
						<h3 className="text-foreground text-[13.5px] mb-2">Lost</h3>
						<div className="flex items-center gap-2">
							<p className="text-popover-foreground text-[16.5px] font-semibold">3,271</p>
							<span className="gap-1 flex text-[12px] items-center text-foreground">
								-0.04%
								<TrendingUp className="w-3 h-3" />
							</span>
						</div>
					</div>
					<div className="bg-[#E5ECF6] p-5 rounded-xl shadow-sm ">
						<h3 className="text-foreground text-[13.5px] mb-2">Sold</h3>
						<div className="flex items-center gap-2">
							<p className="text-popover-foreground text-[16.5px] font-semibold">1,001</p>
							<span className="gap-1 flex text-[12px] items-center text-foreground">
								-0.05%
								<TrendingDown className="w-3 h-3" />
							</span>
						</div>
					</div>
				</div>
				<div>
					<SalesChart />
				</div>

				<div className="w-full flex flex-row flex-wrap mt-9 gap-3">
					<div className="sm:w-[53%] w-[100%]">
						<SellerBarChat/>
					</div>
					<div className="sm:w-[45%] w-[100%]">
						<SellerPieChat />
					</div>
				</div>

				<div className="mt-5">
					<SalesLineChart />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
