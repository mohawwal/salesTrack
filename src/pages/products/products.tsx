import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";

import { Dot, Filter } from "lucide-react";

const Products = () => {
	const products = [
		{
			id: "1",
			name: "Wireless Mouse",
			category: "Electronics",
			price: 25.99,
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
			price: 49.99,
			stock: 20,
			sku: "RS-002",
			supplier: "FitGear Inc.",
			status: "Available",
			discount: 5,
			dateAdded: "2024.Oct.28",
		},
		{
			id: "3",
			name: "Bluetooth Headphones",
			category: "Electronics",
			price: 89.99,
			stock: 15,
			sku: "BH-003",
			supplier: "SoundHub",
			status: "Available",
			discount: 15,
			dateAdded: "2024.Oct.15",
		},
		{
			id: "4",
			name: "Desk Lamp",
			category: "Home & Office",
			price: 19.99,
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
			price: 29.99,
			stock: 35,
			sku: "YM-005",
			supplier: "ZenGear",
			status: "Available",
			discount: 10,
			dateAdded: "2024.Oct.05",
		},
		{
			id: "6",
			name: "Coffee Mug",
			category: "Kitchen",
			price: 12.99,
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
			price: 199.99,
			stock: 0,
			sku: "GC-007",
			supplier: "GameStation",
			status: "OOS",
			discount: 20,
			dateAdded: "2024.May.25",
		},
		{
			id: "8",
			name: "Smartwatch",
			category: "Electronics",
			price: 129.99,
			stock: 10,
			sku: "SW-008",
			supplier: "NextGen Gadgets",
			status: "Available",
			discount: 15,
			dateAdded: "2024.May.20",
		},
		{
			id: "9",
			name: "Water Bottle",
			category: "Fitness",
			price: 9.99,
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
			price: 4.99,
			stock: 300,
			sku: "NB-010",
			supplier: "WriteWell",
			status: "Available",
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
						<TableHead className="px-3">Stock</TableHead>
            <TableHead className="px-3 w-[200px]">Sku</TableHead>
						<TableHead className="px-3">Supplier</TableHead>
						<TableHead className="px-3 w-[150px]">Status</TableHead>
						<TableHead className="px-3">Stock</TableHead>
						<TableHead className="px-3 w-[150px]">Date Added</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.map((product) => (
						<TableRow className="text-[12.5px]">
							<TableCell className="px-3">{product.id}</TableCell>
							<TableCell className="px-3 w-[200px] font-bold cursor-pointer">
								{product.name}
							</TableCell>
							<TableCell className="px-3 w-[200px]">{product.category}</TableCell>
							<TableCell className="px-3 w-[200px]">{product.price}</TableCell>
							<TableCell className="px-3">{product.stock}</TableCell>
              <TableCell className="px-3">{product.sku}</TableCell>
							<TableCell className="px-3 text-primary underline cursor-pointer">{product.supplier}</TableCell>
							<TableCell className="px-3 w-[150px]">
              <p className={`px-1 rounded-3xl text-[11px] flex justify-start items-center text-card ${
										product.status === "Available"
											? "bg-blue-500"
											: "bg-red-500"
									}`}>
              <Dot/>
								<p>
									{product.status}
								</p>
              </p>
							</TableCell>
							<TableCell className="px-3">{product.stock}</TableCell>
							<TableCell className="px-3 w-[150px] opacity-65">{product.dateAdded}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Products;
