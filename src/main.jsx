import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import { data } from "autoprefixer";
import JobDetails from "./components/JobDetails";
import AppliedJobs from "./components/AppliedJobs";
import Statistics from "./components/Statistics";
import ErrorPage from "./components/ErrorPage";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/featuredJobs.json"),
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails />,
        loader: () => fetch("/featuredJobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
        loader: () => fetch("/featuredJobs.json"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
