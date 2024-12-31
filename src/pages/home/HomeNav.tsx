import { AlignLeft, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const HomeNav = () => {
	return (
		<div className="flex justify-between w-full">
			<div className="w-[70%] flex items-center gap-[20px] cursor-pointer text-[13.8px]">
				<div className="hidden md:flex items-start gap-1 px-2 text-[15px] text-foreground mt-2">
					<Flower2 className="w-7 h-7 pb-1" />
					<div className="font-RobotoFlex font-semibold">
						SALES <span className="text-primary">DETAL</span>
					</div>
				</div>

				<div className="hidden md:flex gap-8 font-RobotoFlex">
					<p className="hover:underline underline-offset-4">Learn</p>
					<p className="hover:underline underline-offset-4">Build</p>
					<p className="hover:underline underline-offset-4">Tools</p>
					<p className="hover:underline underline-offset-4">Media</p>
					<p className="hover:underline underline-offset-4">Jobs</p>
				</div>

				<div className="flex md:hidden">
					<AlignLeft className="text-[20px] text-foreground" />
				</div>
			</div>

			<div className="border-2 border-primary flex items-center bg-white text-black py-[1.8%] px-[2.8%] rounded-[100px]">
				<Link
					to="/dashboard"
					className="font-semibold text-center w-[100%] font-RobotoFlex text-[13px]"
				>
					Get Started?
				</Link>
			</div>
		</div>
	);
};

export default HomeNav;
