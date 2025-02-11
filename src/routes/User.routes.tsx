import Home from "../pages/home/Home";
import Orders from "../pages/users/Order";
import UserDashboard from "../pages/users/UserDashboard";

export const UsersPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
  {
    name: "home",
    path: "home",
    element: <Home></Home>,
  },
  {
    name: "Order Management",
    children: [
      {
        name: "Get Orders",
        path: "get-orders",
        element: <Orders></Orders>,
      },
    ],
  },
];
