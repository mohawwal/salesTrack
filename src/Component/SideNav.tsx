import { Link } from "react-router-dom";
import {
	//Calendar,
	LayoutDashboard,
	SquarePercent,
	Inbox,
	Settings,
	GalleryVerticalEnd,
	ChevronsUpDown,
	AudioWaveform,
	BellDot,
	Plus,
	ClipboardMinus,
	ChevronUp,
	BadgeCheck,
	CreditCard,
	Bell,
	LogOut,
	//ScrollText,
	Sparkles,
	Flower2,
	X,
	Truck,
	BoomBox,
} from "lucide-react";
import UpImg from "../assets/images/upImg.jpg";

import {
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
	SidebarMenuBadge,
} from "../components/ui/sidebar";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "../components/ui/dropdown-menu";
const itemsLayout = [
	// {
	// 	title: "Calendar",
	// 	url: "#",
	// 	icon: Calendar,
	// },
	{
		title: "Products",
		url: "/products",
		icon: BoomBox,
	},
	{
		title: "Sales",
		url: "/sales",
		icon: SquarePercent,
	},
	{
		title: "Supplier",
		url: "/suppliers",
		icon: Truck,
	},
	{
		title: "Report",
		url: "#",
		icon: ClipboardMinus,
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox,
	},
	// {
	// 	title: "Audit",
	// 	url: "#",
	// 	icon: ScrollText,
	// },
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

const otherCompany = [
	{
		name: "Boss Ltd",
		type: "Sale",
		notification: 10,
	},
	{
		name: "Fabbaz Ent.",
		type: "Marking",
		notification: 12,
	},
	{
		name: "Daniel Shop",
		type: "Tech",
		notification: 24,
	},
];

const companyStaffs = [
	{
		name: "Ayomide",
		type: "Sale",
		notification: 10,
	},
	{
		name: "Kemi",
		type: "Marking",
		notification: 12,
	},
	{
		name: "Daniel",
		type: "Tech",
		notification: 24,
	},
];

interface SideNavProps {
	setToggleNav: (value: boolean) => void;
}

const SideNav: React.FC<SideNavProps> = ({ setToggleNav }) => {
	const removeNavFunc = () => {
		setToggleNav(false)
	}
	return (
		<div className="w-full z-50 h-full flex flex-col">
			<div className="w-full flex justify-between items-start">
				<div className="pt-4 flex items-start gap-1 px-2 text-[14px] font-bold">
					<Flower2 className="w-6 h-6 pb-1" />
					<div className="flex items-center">
						SALES <span className="text-primary">DETAL</span>
					</div>
				</div>
				<button
					className="w-[24px] h-[24px] bg-border mt-3 rounded-[5px] flex items-end justify-end"
					onClick={() => setToggleNav(false)}
				>
					<div className="flex h-full w-full items-center justify-center">
						<X className="w-3" />
					</div>
				</button>
			</div>
			<SidebarHeader className="w-full flex justify-between items-center flex-row">
				<div className="flex flex-row items-center gap-2">
					<div className="bg-foreground h-8 w-8 flex justify-center items-center rounded-md">
						<GalleryVerticalEnd className="text-card w-4 h-4" />
					</div>
					<span>
						<p className="text-[13px] text-foreground">Jobber Inc</p>
						<p className="text-[11px] flex items-center">Enterprise</p>
					</span>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button>
							<ChevronsUpDown className="text-foreground p-1" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<p className="text-foreground text-[11px] mb-3 ">
							Company <span className="text-primary">Branches</span>
						</p>
						{otherCompany.map((staff) => (
							<DropdownMenuItem className="flex items-center justify-between">
								<div onClick={removeNavFunc} className="w-[150px] flex items-center flex-row gap-2">
									<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
										<AudioWaveform className="h-3 w-3" />
									</div>
									<div className="text-[12px]">{staff.name}</div>
								</div>
								<BellDot className="h-[1.5px] w-[1.5px]" />
							</DropdownMenuItem>
						))}
						<DropdownMenuItem className="flex flex-row gap-3 mt-3 border-t-[1.5px]">
							<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
								<Plus className="h-3 w-3" />
							</div>
							<p className="text-[13px]">Add Brand</p>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarHeader>

			<SidebarGroup>
				<SidebarGroupLabel>Application</SidebarGroupLabel>
				<SidebarGroupContent className="border-t-[1px]">
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<Link
									to="/dashboard"
									className="my-1"
									onClick={removeNavFunc}
								>
									<LayoutDashboard />
									<div>Dashboard</div>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<div className="pl-2 pb-1 my-1">
							<p className="text-[11px]">CO-WORKERS</p>
							<SidebarMenuSub>
								{companyStaffs.map((staffs) => (
									<SidebarMenuSubItem>
										<SidebarMenuItem>
											<SidebarMenuButton>
												<p className="text-[11.5px]">{staffs.name}</p>
												<SidebarMenuBadge>
													{staffs.notification}
												</SidebarMenuBadge>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarMenuSubItem>
								))}
							</SidebarMenuSub>
						</div>
						{itemsLayout.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<Link
										to={item.url}
										className="my-1 cursor-pointer"
										onClick={removeNavFunc}
									>
										<item.icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>

			<SidebarFooter className="mt-auto">
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<div className="flex flex-row items-center gap-2 w-full">
										<div className="rounded-full border-2 h-8 w-8 flex justify-center items-center">
											<img
												src={UpImg}
												className="w-full h-full object-cover rounded-full"
											/>
										</div>
										<span>
											<p className="text-[12px] text-foreground">Wally</p>
											<p className="text-[10px] flex items-center">CEO</p>
										</span>
									</div>
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side="top"
								className="w-[--radix-popper-anchor-width] mb-2"
							>
								<DropdownMenuItem>
									<div className="flex flex-row items-center gap-2 w-full">
										<div className="rounded-full border-2 h-8 w-8 flex justify-center items-center">
											<img
												src={UpImg}
												className="w-full h-full object-cover rounded-full"
											/>
										</div>
										<span>
											<p className="text-[12px] text-foreground">Wally</p>
											<p className="text-[10px] flex items-center">CEO</p>
										</span>
									</div>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
										<Sparkles className="h-3 w-3" />
									</div>
									<p className="text-[13px]">Upgrade to Pro</p>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
										<BadgeCheck className="h-3 w-3" />
									</div>
									<p className="text-[13px]">Account</p>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
										<CreditCard className="h-3 w-3" />
									</div>
									<p className="text-[13px]">Billing</p>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
										<Bell className="h-3 w-3" />
									</div>
									<p className="text-[13px]">notification</p>
								</DropdownMenuItem>
								<DropdownMenuItem className="flex flex-row gap-3 mt-3 border-t-[1.5px]">
									<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
										<LogOut className="h-3 w-3" />
									</div>
									<p className="text-[13px]">Log out</p>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</div>
	);
};

export default SideNav;
