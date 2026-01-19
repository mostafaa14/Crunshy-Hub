import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import ContactUs from "./Components/ContactUs/ContactUs";
import Area from "./Components/Area/Area";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound";
import Categories from "./Components/Categories/Categories";
import AboutUs from "./Components/AboutUs/AboutUs";

export default function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "categories",
            element: <Categories />,
          },
          {
            path: "contact-us",
            element: <ContactUs />,
          },
          {
            path: "area",
            element: <Area />,
          },
          {
            path: "about-us",
            element: <AboutUs />,
          },
          {
            path: "*",
            element: <Notfound />,
          },
        ],
      },
    ],
    {
      basename: "/Crunshy-Hub",
    },
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
