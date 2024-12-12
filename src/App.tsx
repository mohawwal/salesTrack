import LeftBar from "./Component/LeftBar";
import { Navbar } from "./Component/Navbar";
import { RightBar } from "./Component/RightBar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/dashboardHome/Dashboard";
import { SidebarProvider } from "./components/ui/sidebar";
import SalesHome from "./pages/sales/SalesHome";

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
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Dashboard />,
				},
				{
					path: "/dashboard",
					element: <Dashboard />,
				},
				{
					path: "/profile",
					element: <Profile />,
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
