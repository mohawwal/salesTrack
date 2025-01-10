import {
	ArrowDown,
	ArrowRight,
	ArrowUp,
	Ban,
	ChevronsUpDown,
	Circle,
	CircleCheckBig,
	CircleHelp,
	Ellipsis,
	Timer,
} from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";


export const ReportTable = () => {
	const taskBox = [
		{
			TaskNo: "Task-001",
			Label: "Aspire",
			TitleText: "You can get to a million this week if you want to",
			Status: "In Progress",
			Priority: "High",
		},
		{
			TaskNo: "Task-001",
			Label: "Documentation",
			TitleText: "You can get to a million this week if you want to",
			Status: "Done",
			Priority: "High",
		},
		{
			TaskNo: "Task-002",
			Label: "Motivate",
			TitleText: "You can get to a million this week if you want to",
			Status: "Todo",
			Priority: "Medium",
		},
		{
			TaskNo: "Task-003",
			Label: "Achieved",
			TitleText: "You can get to a million this week if you want to",
			Status: "Canceled",
			Priority: "High",
		},
		{
			TaskNo: "Task-004",
			Label: "Documentation",
			TitleText: "You can get to a million this week if you want to",
			Status: "In Progress",
			Priority: "Low",
		},
		{
			TaskNo: "Task-005",
			Label: "Assign",
			TitleText: "You can get to a million this week if you want to",
			Status: "Backlog",
			Priority: "High",
		},
	];

	return (
		<div className="p-1">
			<Table className="overflow-x-scroll">
				<TableHeader>
					<TableRow className="text-[12px] cursor-pointer">
						<TableHead className="px-2 text-[12px]">Task</TableHead>
						<TableHead className="px-2">
							<div className="flex items-center gap-2">
								Title
								<ChevronsUpDown className="w-[12px] h-[12px]" />
							</div>
						</TableHead>
						<TableHead className="px-2">
							<div className="flex items-center gap-2">
								Status
								<ChevronsUpDown className="w-[12px] h-[12px]" />
							</div>
						</TableHead>
						<TableHead className="px-2">
							<div className="flex items-center gap-2">
								Priority
								<ChevronsUpDown className="w-[12px] h-[12px]" />
							</div>
						</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{taskBox.map((task) => (
						<TableRow className="text-[12px]">
							<TableCell className="px-3 font-medium text-[11px] cursor-pointer hover:font-semibold whitespace-nowrap">
								<div className="flex items-center gap-3">
									<input
										type="checkbox"
										className="h-3 w-3 bg-foreground border-2 border-primary rounded-md accent-black"
									/>
									{task.TaskNo}
								</div>
							</TableCell>
							<TableCell className="whitespace-nowrap">
								<div className="flex items-center gap-2">
									<span className="border border-border px-[0.2rem] rounded-md">
										<p className="opacity-65">{task.Label}</p>
									</span>
									<p>{task.TitleText}</p>
								</div>
							</TableCell>
							<TableCell className="whitespace-nowrap">
								<div className="">
									{task.Status === "In Progress" ? (
										<div className="flex items-center gap-2">
											<Timer className="w-[15px] h-[15px] opacity-65" />
											<p>In Progress</p>
										</div>
									) : task.Status === "Backlog" ? (
										<div className="flex items-center gap-2">
											<CircleHelp className="w-[15px] h-[15px] opacity-65" />
											<p>Backlog</p>
										</div>
									) : task.Status === "Todo" ? (
										<div className="flex items-center gap-2">
											<Circle className="w-[15px] h-[15px] opacity-65" />
											<p>Todo</p>
										</div>
									) : task.Status === "Done" ? (
										<div className="flex items-center gap-2">
											<CircleCheckBig className="w-[15px] h-[15px] opacity-65" />
											<p>Done</p>
										</div>
									) : (
										<div className="flex items-center gap-2">
											<Ban className="w-[14px] h-[14px] opacity-65" />
											<p>Canceled</p>
										</div>
									)}
								</div>
							</TableCell>
							<TableCell className="whitespace-nowrap">
								<div>
									{task.Priority === "Medium" ? (
										<div className="flex items-center gap-2">
											<ArrowRight className="w-4 h-4 opacity-65" />
											<p>Medium</p>
										</div>
									) : task.Priority === "High" ? (
										<div className="flex items-center gap-2">
											<ArrowUp className="w-4 h-4 opacity-65" />
											<p>High</p>
										</div>
									) : (
										<div className="flex items-center gap-2">
											<ArrowDown className="w-4 h-4 opacity-65" />
											<p>Low</p>
										</div>
									)}
								</div>
							</TableCell>
							<TableCell className="whitespace-nowrap">
								<button>
									<Ellipsis className="w-4 h-3" />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
