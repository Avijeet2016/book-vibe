import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('/booksData.json'),
        Component: BookDetails 
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);
