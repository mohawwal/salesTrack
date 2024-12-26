import LeftBar from "./Component/LeftBar";
import { Navbar } from "./Component/Navbar";
import { RightBar } from "./Component/RightBar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboardHome/Dashboard";
import { SidebarProvider } from "./components/ui/sidebar";
import SalesHome from "./pages/sales/SalesHome";
import { Home } from "./pages/home/Home";
import Products from "./pages/products/products";
import AddProduct from "./pages/products/addProduct";

function App() {
	// Layout Component
	const Layout = () => {
		return (
			<div>
				<SidebarProvider>
					<LeftBar />
					<div className="w-full h-[100vh]">
						<div>
							<Navbar />
						</div>
						<div className="mt-[70px] w-full flex justify-around h-[calc(100%-4.4rem)]">
							<div className="w-[80%] w-full overflow-y-scroll ">
								<Outlet />
							</div>
							<div className="bg-rightBar overflow-y-scroll nv:hidden xl:block xl:min-w-[280px] lg:min-w-[275px] 2xl:min-w-[300px] w-[20%] min-w-[280px] hidden lg:block">
								<RightBar />
							</div>
						</div>
					</div>
				</SidebarProvider>
			</div>
		);
	};

	// Router Configuration
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/dashboard",
					element: <Dashboard />,
				},
				{
					path: "/products",
					element: <Products />,
				},
				{
					path: "/addProduct",
					element: <AddProduct />,
				},
				{
					path: "/sales",
					element: <SalesHome />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
