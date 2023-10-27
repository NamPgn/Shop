import { lazy } from "react";
import Client from "../layout/client";
import Home from "../page/Home";
import ProductDetail from "../page/Detail";
import Cart from "../page/Cart";
import Page404 from "../components/404";
import Lazy from "../components/Lazy";
import CircularIndeterminate from "../admin/ui/Notification/Loading";

const ProductAdmin = lazy(() => import("../admin/products/"));
const LayoutAdmin = lazy(() => import("../layout/admin"));
const ProductPage = lazy(() => import('../page/Products'));
export const router = [
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/d/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Lazy loading={<CircularIndeterminate/>}>
          <ProductPage />
        </Lazy>
      }
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
  {
    path: "*",
    element: <Page404 />
  }
];
