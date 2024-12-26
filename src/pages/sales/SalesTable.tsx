import { Filter } from "lucide-react";
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
	const sold = [
		{
			invoiceN0: "1",
			name: "Wireless Mouse",
			Status: "Paid",
			Amount: 25.99,
			stock: 50,
			sku: "WM-001",
			supplier: "TechWorld Supplies",
			status: "Available",
			discount: 10,
			dateAdded: "2024.Dec.01",
		},
		{
			invoiceN0: "2",
			name: "Running Shoes",
			Status: "Deposit",
			Amount: 49.99,
			stock: 20,
			sku: "RS-002",
			supplier: "FitGear Inc.",
			status: "Available",
			discount: 5,
			dateAdded: "2024.Oct.28",
		},
		{
			invoiceN0: "3",
			name: "Bluetooth Headphones",
			Status: "Paid",
			Amount: 89.99,
			stock: 15,
			sku: "BH-003",
			supplier: "SoundHub",
			status: "Available",
			discount: 15,
			dateAdded: "2024.Oct.15",
		},
		{
			invoiceN0: "4",
			name: "Desk Lamp",
			Status: "Paid",
			Amount: 19.99,
			stock: 100,
			sku: "DL-004",
			supplier: "BrightLights Co.",
			status: "Available",
			discount: null,
			dateAdded: "2024.Oct.10",
		},
		{
			invoiceN0: "5",
			name: "Yoga Mat",
			Status: "Paid",
			Amount: 29.99,
			stock: 35,
			sku: "YM-005",
			supplier: "ZenGear",
			status: "Available",
			discount: 10,
			dateAdded: "2024.Oct.05",
		},
		{
			invoiceN0: "6",
			name: "Coffee Mug",
			Status: "Paid",
			Amount: 12.99,
			stock: 60,
			sku: "CM-006",
			supplier: "BrewEssentials",
			status: "Available",
			discount: 0,
			dateAdded: "2024.May.30",
		},
		{
			invoiceN0: "7",
			name: "Gaming Chair",
			Status: "Deposit",
			Amount: 199.99,
			stock: 0,
			sku: "GC-007",
			supplier: "GameStation",
			status: "OOS",
			discount: 20,
			dateAdded: "2024.May.25",
		},
		{
			invoiceN0: "8",
			name: "Smartwatch",
			Status: "Paid",
			Amount: 129.99,
			stock: 10,
			sku: "SW-008",
			supplier: "NextGen Gadgets",
			status: "Available",
			discount: 15,
			dateAdded: "2024.May.20",
		},
		{
			invoiceN0: "9",
			name: "Water Bottle",
			Status: "Paid",
			Amount: 9.99,
			stock: 200,
			sku: "WB-009",
			supplier: "HydroPlus",
			status: "Available",
			discount: 5,
			dateAdded: "2024.Apr.15",
		},
	]
	
	return (
		<div>
			<span className="flex items-center justify-center gap-1 hover:bg-border w-6 h-6 rounded-md">
				<Filter className="w-4 cursor-pointer" />
			</span>
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className="text-right">Amount</TableHead>
						<TableHead className="text-center">Edit</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
						<TableCell className="cursor-pointer text-center text-primary">Edit</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV002</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
						<TableCell className="cursor-pointer text-center text-primary">Edit</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV003</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
						<TableCell className="cursor-pointer text-center text-primary">Edit</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV004</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Cash</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
						<TableCell className="cursor-pointer text-center text-primary">Edit</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">INV005</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
						<TableCell className="cursor-pointer text-center text-primary">Edit</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};
