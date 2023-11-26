import { lazy } from "react";
import Client from "../layout/client";
import Page404 from "../components/404";
import Lazy from "../components/Lazy";
import Admin from "../admin";
import Users from "../admin/user";
import Size from "../admin/products/components/size";
import Color from "../admin/products/components/color";
import EditProduct from "../admin/products/components/edit";
import FormLogin from "../page/Auth/sign-in";
import ProductChild from "../admin/products/components/productChild";

const ProductAdmin = lazy(() => import("../admin/products/"));
const LayoutAdmin = lazy(() => import("../layout/admin"));
export const router = [
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "/signin",
        element: <FormLogin />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        index: true,
      },
      {
        path: "/admin/products",
        element: (
          <Lazy>
            <ProductAdmin />
          </Lazy>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <Lazy>
            <Users />
          </Lazy>
        ),
      },
      {
        path: "/admin/products/size",
        element: (
          <Lazy>
            <Size />
          </Lazy>
        ),
      },
      {
        path: "/admin/products/color",
        element: (
          <Lazy>
            <Color />
          </Lazy>
        ),
      },
      {
        path: "/admin/product/edit/:id",
        element: (
          <Lazy>
            <EditProduct />
          </Lazy>
        ),
      },
      {
        path: "/admin/productChild",
        element: (
          <Lazy>
            <ProductChild />
          </Lazy>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
