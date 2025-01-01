import { Edit2, Filter, CloudDownload, CircleOff } from "lucide-react";
import { useParams } from "react-router-dom";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";

const SuppliersInfo = () => {
	const { company } = useParams();

	const soldGoods = [
		{
			ProductName: "Wireless Mouse",
			Quantity: 2,
			Status: "Delivered",
			PaymentMethod: "Credit Card",
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Confirm: "Received",
			Amount: 29965.99,
			UpdatedBy: "Femi",
			Date: "2024-Oct-15",
		},
        {
			ProductName: " Messager Mobile",
			Quantity: 2,
			Status: "Delivered",
			PaymentMethod: "Credit Card",
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Confirm: "Received",
			Amount: 29965.99,
			UpdatedBy: "Wally",
			Date: "2024-Oct-15",
		},
	];

	return (
		<div className="w-[90%] m-auto mt-3">
			<div>
				<div className="flex items-center gap-4">
					<span className="text-[1.4rem] font-semibold">
						{company?.toUpperCase()}
					</span>
					<span className="bg-primary rounded-[50%]">
						<Edit2 className="w-4 h-4" />
					</span>
				</div>
				<div className="text-[14px]">
					<div className="w-[90%] mt-4">
						<p className="opacity-40 underline text-[12.5px]">About</p>
						<p className="text-[13px]">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
							explicabo nostrum, delectus, maxime iure excepturi recusandae
							culpa dolores nobis laboriosam totam dolor minus architecto animi
							illo optio sed error aliquid.
						</p>
					</div>
					<div className="mt-4">
						<p className="opacity-40 underline text-[12.5px]">Location</p>
						<div className="text-[13px]">
                            <p>4, Gloriza ketu, 200, Ig Lagos</p>
                            <p>6, Gloriza ketu, 200, Ig Lagos</p>
                        </div>
					</div>
					<div className="mt-4">
						<p className="opacity-40 underline text-[12.5px]">Contact</p>
                        <div className="text-[13px]">
                            <p>+234563729783</p>
                            <p>+578986758647</p>
                        </div>
					</div>
				</div>
			</div>
			<div className="mt-6">
				<div>
					<div className="w-full flex justify-end my-4">
						<span className="flex items-center justify-center gap-1 hover:bg-border w-6 h-6 rounded-md bg-primary">
							<Filter className="w-4 h-4 cursor-pointer" />
						</span>
					</div>
					<Table className="overflow-x-scroll mx-2">
						<TableCaption className="text-[12px]">
							List Of The Product Bought.
						</TableCaption>
						<TableHeader>
							<TableRow className="text-[12px]">
								<TableHead className="px-3">ProductName</TableHead>
								<TableHead className="px-3">Quantity</TableHead>
								<TableHead className="px-3">Status</TableHead>
								<TableHead className="px-3">PaymentMethod</TableHead>
								<TableHead className="px-3">Deposit</TableHead> 
								<TableHead className="px-3">Balance</TableHead>
								<TableHead className="px-3">Amount</TableHead>
								<TableHead className="px-3">Receipt</TableHead>
								<TableHead className="px-3 w-[200px]">Confirm</TableHead>
								<TableHead className="px-3 w-[200px]">UpdatedBy</TableHead>
								<TableHead className="px-3 w-[100px]">Date</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{soldGoods.map((sold) => (
								<TableRow className="text-[12px]">
									<TableCell className="px-3 font-bold w-[200px] items-start whitespace-nowrap">
										{sold.ProductName}
									</TableCell>
									<TableCell className="px-3 text-center font-bold">
										{sold.Quantity}
									</TableCell>
									<TableCell className="w-[100px] px-3 text-center font-bold">
										{sold.Status}
									</TableCell>
									<TableCell className="px-3 text-[12px] whitespace-nowrap">
										{sold.PaymentMethod}
									</TableCell>
									<TableCell className="px-3 w-[150px] text-[12px]">
										{sold.Deposit.toLocaleString("en-US", {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</TableCell>
									<TableCell className="px-3">
										<span className="text-right text-[12px]">
											{sold.Balance.toLocaleString("en-US", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</span>
									</TableCell>
									<TableCell className="px-3">
										<span className="text-right text-[12.3px] font-bold">
											{sold.Amount.toLocaleString("en-US", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</span>
									</TableCell>
									<TableCell className="px-3 flex justify-center items-center">
										<div>
											{sold.Receipt ? (
												<CloudDownload className="w-[16px] hover:text-blue-500" />
											) : (
												<CircleOff className="w-[16px] hover:text-red-500" />
											)}
										</div>
									</TableCell>
									<TableCell className="px-3 w-[200px]">
										{sold.Confirm === "Received" ? (
											<div className="bg-green-600 rounded-2xl text-[11px] text-white font-bold text-center px-2">
												Success
											</div>
										) : sold.Confirm === "Processing" ? (
											<div className="bg-yellow-500 rounded-2xl text-[11px] text-white font-bold text-center px-2">
												Processing
											</div>
										) : (
											<div className="bg-red-600 rounded-2xl text-[11px] text-white font-bold text-center px-2">
												Failed
											</div>
										)}
									</TableCell>
									<TableCell className="px-3 hover:text-primary hover:underline cursor-pointer text-[12px]">
										{sold.UpdatedBy}
									</TableCell>
									<TableCell className="px-3 w-[100px] opacity-65 whitespace-nowrap text-[12px]">
										{sold.Date}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default SuppliersInfo;
