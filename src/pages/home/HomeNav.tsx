import { Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const HomeNav = () => {
	return (
		<div className="flex justify-between w-full">
			<div className="w-[70%] flex items-center gap-[40px] cursor-pointer text-[13.8px]">
				<div className="pt-4 flex items-start gap-1 px-2 text-[20px] text-foreground">
					<Flower2 className="w-8 h-8 pb-1" />
					<div className="font-RobotoFlex">
						SALES <span className="text-primary">DETAL</span>
					</div>
				</div>
				<div className="flex gap-8 font-RobotoFlex mt-4">
					<p className="hover:underline">Learn</p>
					<p className="hover:underline">Build</p>
					<p className="hover:underline">Tools</p>
					<p className="hover:underline">Media</p>
					<p className="hover:underline">Jobs</p>
				</div>
			</div>
			<div className="flex items-center bg-white text-black py-[2%] px-[3%] rounded-[100px]">
				<Link to='/dashboard' className="text-center w-[100%] font-RobotoFlex text-[13px]">
					What is SD?
				</Link>
			</div>
		</div>
	);
};

export default HomeNav;
