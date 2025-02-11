import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateBook from "../pages/admin/CreateBook";
import Home from "../pages/home/Home";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Home",
    path: "Home",
    element: <Home></Home>,
  },
  {
    name: "Book Management",
    children: [
      {
        name: "Create Book",
        path: "create-book",
        element: <CreateBook></CreateBook>,
      },
    ],
  },
];
