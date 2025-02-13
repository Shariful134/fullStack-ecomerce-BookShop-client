import SingleBooks from "../pages/books/SingleBooks";
import Home from "../pages/home/Home";

export const homePaths = [
  {
    name: "Home",
    path: "home",
    element: <Home></Home>,
  },
  {
    path: "single-book",
    element: <SingleBooks></SingleBooks>,
  },
];
