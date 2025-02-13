import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateBook from "../pages/admin/CreateBook";
import SingleBooks from "../pages/books/SingleBooks";
import Home from "../pages/home/Home";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Home",
    path: "home",
    element: <Home></Home>,
  },
  {
    path: "single-book",
    element: <SingleBooks></SingleBooks>,
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
