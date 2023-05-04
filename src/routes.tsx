import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import JobDetailPage from "./pages/JobDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "jobs/:id", element: <JobDetailPage /> },
    ],
  },
]);

export default router;
