import HomeNav from "./HomeNav";

export const Home = () => {
	return (
		<div className="w-[100vw] bg-black h-[100vh] text-white">
			<div className="w-[95%] m-auto">
				<div className="pt-4 relative">
					<HomeNav />
					<div>
						<div className="flex mt-[150px] flex-col h-full">
							<div className="font-thin">
								<h1 className="font-Funnel text-center text-[clamp(3rem,_7vw,_6rem)] leading-none">
									Sales <br /> Ecosystem
								</h1>
							</div>

							<div className="font-RobotoFlex text-center py-10 w-[90%] mx-auto text-[13.5px] sm:w-[70%] md:w-[55%] nv:w-[40%]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Tempora, deleniti sed adipisci fuga itaque unde nesciunt, error
								mollitia quibusdam repellat necessitatibus tenetur quidem,
								inventore voluptatum blanditiis eligendi facilis eos dolorem!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
