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
					<div className="bg-[#d4d2ff] p-5 rounded-xl shadow-sm text-black">
						<h3 className="text-[13.5px] mb-2 font-bold">Total Sales</h3>
						<div className="flex items-center gap-2 flex-wrap">
							<p className="text-[16.5px] font-semibold">3,671</p>
							<span className="gap-1 text-[12px] flex items-center">
								-0.03%
								<TrendingUp className="w-3 h-3" />
							</span>
							<span className="bg-primary text-[10.5px] px-1 text-white rounded-xl border border-foreground">4min</span>
						</div>
					</div>
					<div className="bg-chart-5 p-5 rounded-xl shadow-sm text-black">
						<h3 className="text-[13.5px] mb-2 font-bold">Products</h3>
						<div className="flex items-center gap-2 flex-wrap">
							<p className=" text-[16.5px] font-semibold">1,601</p>
							<span className="gap-1 flex items-center text-[12px]">
								-0.01%
								<TrendingDown className="w-3 h-3" />
							</span>
							<span className="bg-primary text-[10.5px] px-1 text-white rounded-xl border border-foreground">4min</span>
						</div>
					</div>
					<div className="bg-[#d4d2ff] p-5 rounded-xl shadow-sm text-black">
						<h3 className="text-[13.5px] mb-2 font-bold">Expenses</h3>
						<div className="flex items-center gap-2 flex-wrap">
							<p className="text-[16.5px] font-semibold">3,271</p>
							<span className="gap-1 flex text-[12px] items-center">
								-0.04%
								<TrendingUp className="w-3 h-3" />
							</span>
							<span className="bg-primary text-[10.5px] px-1 text-white rounded-xl border border-foreground">4min</span>
						</div>
					</div>
					<div className="bg-chart-5 p-5 rounded-xl shadow-sm text-black">
						<h3 className="text-[13.5px] mb-2 font-bold">Profit</h3>
						<div className="flex items-center gap-2 flex-wrap">
							<p className=" text-[16.5px] font-semibold">1,601</p>
							<span className="gap-1 flex items-center text-[12px]">
								-0.01%
								<TrendingDown className="w-3 h-3" />
							</span>
							<span className="bg-primary text-[10.5px] px-1 text-white rounded-xl border border-foreground">4min</span>
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
				<div className="my-9 text-center w-full flex items-center justify-center gap-2 font-bold">
					<p>SALES</p> <p className="text-primary">DETAL</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
