import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Rewards from "../pages/Rewards";
import Staking from "../pages/Staking";
import Stats from "../pages/Stats";
import Withdraw from "../pages/Withdraw";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/rewards",
        element: <Rewards />
    },
    {
        path: "/staking",
        element: <Staking />
    },
    {
        path: "/stats",
        element: <Stats />
    },
    {
        path: "/withdraw",
        element: <Withdraw />
    },
]);