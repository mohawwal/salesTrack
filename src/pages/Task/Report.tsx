import { CirclePlus } from "lucide-react";
import { ReportTable } from "./ReportTable";

const Report = () => {
	return (
		<div className="w-[95%] mx-auto">
			<div className="my-5">
				<div>
					<h1 className="text-[22px] font-bold">Welcome Femi</h1>
					<p className="text-[13px] opacity-65">Here's a list of your Sales Goal</p>
				</div>
				<div className="flex items-center gap-[20px] cursor-pointer text-[12.5px] my-7">
					<div>
						<input
							type="text"
							placeholder="Filter tasks..."
              className="bg-inherit border border-border h-[30px] px-2 rounded-lg"
						/>
					</div>
					<div className="flex items-centers gap-1 text-[12px] border border-border px-1 rounded-md py-[2px]">
						<div className="flex items-center"><CirclePlus className="w-[15px] h-[15px]" /></div>
						<p>Status</p>
					</div>
          <div className="flex items-centers gap-1 text-[12px] border border-border px-1 rounded-md py-[2px]">
						<div className="flex items-center"><CirclePlus className="w-[15px] h-[15px]" /></div>
						<p>Priority</p>
					</div>
				</div>
				<div className="my-5 md:border md:rounded-lg border-border border-spacing-1 p-2 sm:">
					<ReportTable />
				</div>
			</div>
		</div>
	);
};

export default Report;
