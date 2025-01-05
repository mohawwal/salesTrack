import { AlignLeft, Flower2, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
	const menuList = [
		{
			name: "Learn",
			url: "#",
		},
		{
			name: "Build",
			url: "#",
		},
		{
			name: "Tools",
			url: "#",
		},
		{
			name: "Media",
			url: "#",
		},
		{
			name: "Jobs",
			url: "#",
		},
	];
	const [handleNav, setHandleNav] = useState(false);

	const navFunc = () => {
		setHandleNav(!handleNav);
	};

	return (
		<div className="flex justify-between w-full relative">
			<div className="w-[70%] flex items-center gap-[20px] cursor-pointer text-[13.8px]">
				<div className="hidden md:flex items-start gap-1 px-2 text-[15px] text-foreground mt-2">
					<Flower2 className="w-7 h-7 pb-1" />
					<div className="font-RobotoFlex font-semibold">
						SALES <span className="text-primary">DETAL</span>
					</div>
				</div>

				<div className="hidden md:flex gap-8 font-RobotoFlex">
					{menuList.map((list) => (
						<p
							className="hover:underline underline-offset-4"
							key={list.name}
						>
							{list.name}
						</p>
					))}
				</div>

				<div
					className="flex md:hidden"
					onClick={navFunc}
				>
					<AlignLeft className="text-[20px]" />
				</div>
			</div>

			<div className="border-2 border-primary flex items-center bg-white text-black py-[1.5%] px-[1.8%] rounded-[100px] group">
				<Link
					to="/dashboard"
					className="font-semibold text-center w-[100%] font-RobotoFlex text-[13px] flex justify-center items-center gap-2"
				>
					<p>Get Started</p>
					<span className="hidden w-6 h-6 bg-primary border-primary rounded-[50%] group-hover:flex">
						<MoveUpRight className="p-1" />
					</span>
				</Link>
			</div>

			{handleNav && (
				<div className="md:hidden fixed bg-primary top-[10%] left-0 w-[100%] z-50 flex items-center justify-center p-4">
					<div className="flex flex-col gap-10 font-RobotoFlex">
						{menuList.map((list) => (
							<p
								className="hover:underline font-semibold underline-offset-4 text-[20px]"
								key={list.name}
							>
								{list.name?.toUpperCase()}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default HomeNav;
