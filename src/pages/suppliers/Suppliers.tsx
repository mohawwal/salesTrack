const Suppliers = () => {
	const supplierNames = [
		{
			id: 1,
			company: "Golden Penny",
			TotalSupply: 300,
		},
		{
			id: 2,
			company: "Dangote",
			TotalSupply: 20,
		},
		{
			id: 3,
			company: "Banny",
			TotalSupply: 400,
		},
		{
			id: 4,
			company: "Apple",
			TotalSupply: 30,
		},
	];
	return (
		<div className="w-[95%] my-3 mx-auto">
			<div className="text-center flex flex-col">
				<span>Jobber Inc </span>
				<span>SALE-DETAL</span>
			</div>
			<div className="mt-4">
				<div className="grid grid-cols-1">
					{supplierNames.map((name) => (
						<div key={name.id} className="bg-red-300 m-1 w-[120px]">
							<span>{name.TotalSupply}</span>
							<p>{name.company}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Suppliers;
