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
	BoomBox,
	Truck,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
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
import UpImg from "../assets/images/upImg.jpg";
import { Link } from "react-router-dom";

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

const LeftBar = () => {
	return (
		<div>
			<Sidebar>
				<SidebarContent className="h-full">
					<div className="pt-4 flex items-start gap-1 px-2 text-[14px] text-foreground">
						<Flower2 className="w-6 h-6 pb-1" />
						<div>
							SALES <span className="text-primary">DETAL</span>
						</div>
					</div>
					<SidebarHeader className="w-full flex justify-between items-center flex-row">
						<div className="flex flex-row items-center gap-2">
							<div className="bg-foreground h-8 w-8 flex justify-center items-center rounded-md">
								<GalleryVerticalEnd className="text-foreground w-4 h-4" />
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
								{otherCompany.map((company) => (
									<DropdownMenuItem className="flex items-center justify-between">
										<div className="w-[150px] flex items-center flex-row gap-2">
											<div className="border-2 rounded-md h-5 w-5 flex items-center justify-center">
												<AudioWaveform className="h-3 w-3" />
											</div>
											<div className="text-[12px]">{company.name}</div>
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
										<Link to="/dashboard" className="my-1">
											<LayoutDashboard />
											<div className="text-[12.4px] text-foreground">Dashboard</div>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<div className="pl-2 pb-1 my-1">
									<p className="text-[12px]">CO-WORKERS</p>
									<SidebarMenuSub>
										{companyStaffs.map((staffs) => (
											<SidebarMenuSubItem>
												<SidebarMenuItem>
													<SidebarMenuButton>
														<p className="text-[12px]">{staffs.name}</p>
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
											<Link to={item.url}
												className="my-1 cursor-pointer text-[12.5px] text-foreground"
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

					<SidebarFooter className="mt-auto mb-3">
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
				</SidebarContent>
			</Sidebar>
		</div>
	);
};

export default LeftBar;
