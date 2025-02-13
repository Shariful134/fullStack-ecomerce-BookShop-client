import SingleBooks from "../pages/books/SingleBooks";
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
    path: "single-book/:bookId",
    element: <SingleBooks></SingleBooks>,
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
