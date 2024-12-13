import {
	Menu,
	Search,
	Sun,
	Moon,
	History,
	Bell,
	PanelsTopLeft,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import SideNav from "./SideNav";

export const Navbar = () => {
	const { setTheme } = useTheme();

	const [toggleNav, setToggleNav] = useState(false)

	const handleToggleNav = ()  => {
		setToggleNav(!toggleNav)
	}

	return (
		<div className="fixed z-10 w-full h-18 nv:w-[calc(100%-16rem)] bg-background">
			<div className="border-b relative border-gray-200 px-4 py-4 md:px-6 flex justify-between">
				<button className="flex flex-row items-center gap-2">
					<Menu className="p-1 nv:hidden block" onClick={handleToggleNav} />
					<h1 className="text-[22px] font-bold">
						Dashboard 
					</h1>
				</button>
				{toggleNav && <div className="fixed block nv:hidden w-[80%] sm:w-[350px] bg-primary-foreground h-full z-10 top-0 left-0 border-r-[2px] border-sidebar-border ">
					<div className="w-[95%] mx-auto h-full">
						<SideNav setToggleNav={setToggleNav} />
					</div>
				</div>}
				<div className="flex flex-row items-center relative">
					<div className="flex items-center mr-6">
						<Search className="sm:foreground sm:absolute sm:bg-inherit sm:text-gray-400 sm:p-0 p-[3px] sm:h-[20px] sm:w-[20px] sm:pl-[5px] text-foreground w-[23px]" />
						<input
							type="text"
							placeholder="search..."
							className="pl-8 pr-4 py-2 border-border bg-input text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hidden sm:block"
						/>
					</div>
					<div className="flex items-center justify-center gap-5">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
							<button className="relative bg-transparent hover:border-none hover:bg-transparent focus:outline-none focus:ring-0 border-none hidden sm:block p-0 shadow-none">
								<Sun className="text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 p-1" />
								<Moon className="absolute inset-0 text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 p-1" />
							</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="m-4">
								<DropdownMenuItem onClick={() => setTheme("light")}>
									Light
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("dark")}>
									Dark
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("system")}>
									System
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<button className="hover:bg-gray-100 rounded-lg w-[25px] h-[25px] items-center justify-center hidden sm:block">
							<History className="p-1" />
						</button>
						<button className="hover:bg-gray-100 rounded-lg w-[25px] h-[25px] flex items-center justify-center ">
							<Bell className="p-1" />
						</button>
						<button className="hover:bg-gray-100 rounded-lg w-[25px] h-[25px] flex items-center justify-center ">
							<PanelsTopLeft className="p-1" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
