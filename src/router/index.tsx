import { lazy } from "react";
import Client from "../layout/client";
import Home from "../page/Home";

const ProductAdmin = lazy(() => import("../admin/products/"));
const LayoutAdmin = lazy(() => import("../layout/admin"));

export const router = [
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/products",
        element: <ProductAdmin />,
      },
    ],
  },
];
