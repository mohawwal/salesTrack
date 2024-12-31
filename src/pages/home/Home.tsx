// import { Button } from "../../components/ui/button"
// import { Link } from "react-router-dom"

import HomeBody from "./HomeBody";
import HomeNav from "./HomeNav";

export const Home = () => {

	return (
		<div className="w-full bg-black">
			<div className="w-[95%] m-auto">
				<div className="h-[100vh] pt-4 relative">
					{/* <div className="w-full h-full absolute opacity-10 flex items-center justify-center">
						<div className=" bg-red-400 w-[700px] h-[700px]"></div>
					</div> */}
					<HomeNav />
					<HomeBody />
				</div>
				<div>section 2</div>
			</div>
		</div>
	);
};
