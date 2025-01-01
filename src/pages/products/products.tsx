import { Link } from "react-router-dom";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";

import { Filter } from "lucide-react";

const Products = () => {
	const products = [
		{
			id: "1",
			name: "Wireless Mouse",
			category: "Electronics",
			price: 251099,
			stock: 50,
			sku: "WM-001",
			supplier: "TechWorld Supplies",
			status: "Available",
			discount: 10,
			dateAdded: "2024.Dec.01",
		},
		{
			id: "2",
			name: "Running Shoes",
			category: "Apparel",
			price: 49599,
			stock: 2,
			sku: "RS-002",
			supplier: "FitGear Inc.",
			status: "Warning",
			discount: 5,
			dateAdded: "2024.Oct.28",
		},
		{
			id: "3",
			name: "Bluetooth Headphones",
			category: "Electronics",
			price: 892399,
			stock: 0,
			sku: "BH-003",
			supplier: "SoundHub",
			status: "Out Of Stock",
			discount: 15,
			dateAdded: "2024.Oct.15",
		},
		{
			id: "4",
			name: "Desk Lamp",
			category: "Home & Office",
			price: 19109,
			stock: 100,
			sku: "DL-004",
			supplier: "BrightLights Co.",
			status: "Available",
			discount: null,
			dateAdded: "2024.Oct.10",
		},
		{
			id: "5",
			name: "Yoga Mat",
			category: "Fitness",
			price: 293399,
			stock: 5,
			sku: "YM-005",
			supplier: "ZenGear",
			status: "Warning",
			discount: 10,
			dateAdded: "2024.Oct.05",
		},
		{
			id: "6",
			name: "Coffee Mug",
			category: "Kitchen",
			price: 125499,
			stock: 60,
			sku: "CM-006",
			supplier: "BrewEssentials",
			status: "Available",
			discount: 0,
			dateAdded: "2024.May.30",
		},
		{
			id: "7",
			name: "Gaming Chair",
			category: "Furniture",
			price: 1993499,
			stock: 0,
			sku: "GC-007",
			supplier: "GameStation",
			status: "Out Of Stock",
			discount: 200000,
			dateAdded: "2024.May.25",
		},
		{
			id: "8",
			name: "Smartwatch",
			category: "Electronics",
			price: 12999,
			stock: 10,
			sku: "SW-008",
			supplier: "NextGen Gadgets",
			status: "Warning",
			discount: 15,
			dateAdded: "2024.May.20",
		},
		{
			id: "9",
			name: "Water Bottle",
			category: "Fitness",
			price: 14099,
			stock: 200,
			sku: "WB-009",
			supplier: "HydroPlus",
			status: "Available",
			discount: 5,
			dateAdded: "2024.Apr.15",
		},
		{
			id: "10",
			name: "Notebook",
			category: "Stationery",
			price: 40099,
			stock: 3,
			sku: "NB-010",
			supplier: "WriteWell",
			status: "Warning",
			discount: null,
			dateAdded: "2024.Apr.10",
		},
	];

	return (
		<div className="m-3">
			<span className="flex items-center justify-center gap-1 hover:bg-border w-6 h-6 rounded-md">
				<Filter className="w-4 cursor-pointer" />
			</span>
			<Table className="w-full overflow-x-scroll">
				<TableCaption>List of all products.</TableCaption>
				<TableHeader>
					<TableRow className="text-[13px]">
						<TableHead className="px-3">No</TableHead>
						<TableHead className="w-[200px] px-3">Name</TableHead>
						<TableHead className="px-3 w-[200px]">Category</TableHead>
						<TableHead className="px-3 w-[200px]">Price</TableHead>
						<TableHead className="px-3">Supplier</TableHead>
						<TableHead className="px-3 w-[150px]">Status</TableHead>
						<TableHead className="px-3">Stock</TableHead>
						<TableHead className="px-3 w-[150px]">Date Added</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.map((product) => (
						<TableRow className="text-[12.2px]">
							<TableCell className="px-3">{product.id}</TableCell>
							<TableCell className="px-3 w-[200px] font-bold cursor-pointer ">
								{product.name}
							</TableCell>
							<TableCell className="px-3 w-[200px] opacity-70">
								{product.category}
							</TableCell>
							<TableCell className="px-3 w-[200px] font-bold">
								<span className="text-right">
									{product.price.toLocaleString("en-US", {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</span>
							</TableCell>
							<TableCell className="px-3 text-primary underline cursor-pointer text-[11px]">
								<Link to={`/supplier/${product.supplier}`}>
								{product.supplier}
								</Link>
							</TableCell>
							<TableCell className="px-3 w-[100px]">
								<div
									className={`whitespace-nowrap font-bold rounded-3xl text-[11px] text-center w-[80px] text-white ${
										product.status === "Available"
											? "bg-blue-600"
											: product.status === "Warning"
											? "bg-yellow-500"
											: "bg-red-600"
									}`}
								>
									<p className="text-center">{product.status}</p>
								</div>
							</TableCell>
							<TableCell className="px-3 text-center font-bold">
								{product.stock}
							</TableCell>
							<TableCell className="px-3 w-[150px] opacity-65 ">
								{product.dateAdded}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Products;
