import {
	Filter,
	CloudDownload,
	Dot,
	CircleOff,
	Loader,
	Truck,
	ShoppingBag,
} from "lucide-react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";

export const SalesTable = () => {
	const soldGoods = [
		{
			Invoice: "INV001",
			ProductName: "Wireless Mouse",
			Buyer: "Pannal",
			Quantity: 2,
			Status: "Delivered",
			PaymentMethod: "Credit Card",
			TnxReceipt: true,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 29965.99,
			Seller: "Femi",
			Date: "2024-Oct-15",
		},
		{
			Invoice: "INV002",
			ProductName: "Smartwatch",
			Buyer: "Sarah Johnson",
			Quantity: 1,
			Status: "pickUp",
			PaymentMethod: "PayPal",
			TnxReceipt: false,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Pick-Up",
			Amount: 198659.99,
			Seller: "Wally",
			Date: "2024-Oct-16",
		},
		{
			Invoice: "INV003",
			ProductName: "Power Bank",
			Buyer: "Michael Lee",
			Quantity: 3,
			Status: "Delivered",
			PaymentMethod: "Bank Transfer",
			TnxReceipt: true,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 145439.97,
			Seller: "Wally",
			Date: "2024-Oct-17",
		},
		{
			Invoice: "INV004",
			ProductName: "Laptop Bag",
			Buyer: "Emily Chen",
			Quantity: 1,
			Status: "Pending",
			PaymentMethod: "Cash on Delivery",
			TnxReceipt: false,
			Deposit: 4900,
			Balance: 2000,
			Receipt: false,
			Mode: "Pick-up",
			Amount: 7099.99,
			Seller: "Dammy",
			Date: "2024-Oct-18",
		},
		{
			Invoice: "INV005",
			ProductName: "Headphones",
			Buyer: "David Kim",
			Quantity: 2,
			Status: "Delivered",
			PaymentMethod: "Stripe",
			TnxReceipt: true,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 244359.98,
			Seller: "Femi",
			Date: "2024-Oct-19",
		},
		{
			Invoice: "INV006",
			ProductName: "Smart Speaker",
			Buyer: "Lisa Nguyen",
			Quantity: 1,
			Status: "Delivered",
			PaymentMethod: "Apple Pay",
			TnxReceipt: true,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 399757,
			Seller: "Femi",
			Date: "2024-Oct-20",
		},
		{
			Invoice: "INV007",
			ProductName: "Gaming Keyboard",
			Buyer: "Chris Brown",
			Quantity: 1,
			Status: "pickUp",
			PaymentMethod: "Google Pay",
			TnxReceipt: false,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 29999,
			Seller: "Wally",
			Date: "2024-Oct-21",
		},
		{
			Invoice: "INV008",
			ProductName: "Tablet",
			Buyer: "Rebecca Davis",
			Quantity: 1,
			Status: "Delivered",
			PaymentMethod: "Transfer",
			TnxReceipt: true,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 49999,
			Seller: "Ayo",
			Date: "2024-Oct-22",
		},
		{
			Invoice: "INV009",
			ProductName: "Power Cord",
			Buyer: "Kevin White",
			Quantity: 5,
			Status: "Delivered",
			PaymentMethod: "NFC",
			TnxReceipt: true,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 49095,
			Seller: "Ayo",
			Date: "2024-Oct-23",
		},
		{
			Invoice: "INV010",
			ProductName: "Smartwatch Band",
			Buyer: "Amanda Martin",
			Quantity: 1,
			Status: "Pending",
			PaymentMethod: "Cryptocurrency",
			TnxReceipt: false,
			Deposit: 0,
			Balance: 0,
			Receipt: true,
			Mode: "Order",
			Amount: 291199,
			Seller: "Femi",
			Date: "2024-Oct-24",
		},
	];

	return (
		<div>
			<span className="flex py-5 items-center justify-center gap-1 hover:bg-border w-6 h-6 rounded-md">
				<Filter className="w-4 cursor-pointer" />
			</span>
			<Table>
				<TableCaption className="text-[12px]">
					List Of The Product Sold.
				</TableCaption>
				<TableHeader>
					<TableRow className="text-[13px]">
						<TableHead className="px-3 ">Invoice</TableHead>
						<TableHead className="px-3 w-[150px]">Product Name</TableHead>
						<TableHead className="px-3 w-[150px]">Buyer</TableHead>
						<TableHead className="px-3 w-[100px]">Qty</TableHead>
						<TableHead className="px-3">Status</TableHead>
						<TableHead className="px-3">Method</TableHead>
						<TableHead className="px-3 w-[100px]">Tnx Receipt</TableHead>
						<TableHead className="px-3 w-[150px] text-center">Mode</TableHead>
						<TableHead className="px-3">Deposit</TableHead>
						<TableHead className="px-3">Balance</TableHead>
						<TableHead className="px-3">Amount</TableHead>
						<TableHead className="px-3 w-[200px]">seller</TableHead>
						<TableHead className="px-3 w-[100px]">Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{soldGoods.map((sold) => (
						<TableRow className="text-[12.6px]">
							<TableCell className="px-3 font-medium">{sold.Invoice}</TableCell>
							<TableCell className="px-3 font-bold w-[150px] flex justify-start">
								{sold.ProductName}
							</TableCell>
							<TableCell className="px-3 hover:text-primary hover:underline cursor-pointer text-[12px] w-[150px]">
								{sold.Buyer}
							</TableCell>
							<TableCell className="w-[100px] text-center">
								{sold.Quantity}
							</TableCell>
							<TableCell className="px-3">
								{sold.Status === "Pending" ? (
									<div className="flex items-center gap-1">
										<Loader className="w-3 text-yellow-700" /> Pending
									</div>
								) : sold.Status === "Delivered" ? (
									<div className="flex items-center gap-1">
										<Truck className="w-3 text-green-700" />
										Delivered
									</div>
								) : sold.Status === "pickUp" ? (
									<div className="flex items-center gap-1">
										<ShoppingBag className="w-3 text-blue-700" /> Pick Up
									</div>
								) : (
									sold.Status
								)}
							</TableCell>
							<TableCell className="px-3">{sold.PaymentMethod}</TableCell>
							<TableCell className="px-3 w-[100px] flex justify-center">
								<div>
									{sold.Receipt ? (
										<CloudDownload className="w-[16px] hover:text-blue-500" />
									) : (
										<CircleOff className="w-[16px] hover:text-red-500" />
									)}
								</div>
							</TableCell>
							<TableCell className="px-3 w-[150px]">
								<p
									className={`whitespace-nowrap rounded-3xl text-[11.8px] flex justify-start items-center w-[70px] font-bold text-white ${
										sold.Mode === "Pick-up" ? "bg-blue-600" : "bg-green-600"
									}`}
								>
									<Dot className="w-4" />
									{sold.Mode}
								</p>
							</TableCell>
							<TableCell className="px-3 w-[150px]">
								{sold.Deposit.toLocaleString("en-US", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</TableCell>
							<TableCell className="px-3">
								<span className="text-right">
									{sold.Balance.toLocaleString("en-US", {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</span>
							</TableCell>
							<TableCell className="px-3">
								<span className="text-right">
									{sold.Amount.toLocaleString("en-US", {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</span>
							</TableCell>
							<TableCell className="px-3 w-[200px] hover:text-primary hover:underline cursor-pointer">
								{sold.Seller}
							</TableCell>
							<TableCell className="px-3 w-[100px] opacity-65 flex">
								{sold.Date}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
