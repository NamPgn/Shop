import { lazy } from "react";
import Client from "../layout/client";
import Home from "../page/Home";
import ProductDetail from "../page/Detail";
import Cart from "../page/Cart";
import Page404 from "../components/404";
import Lazy from "../components/Lazy";

import Admin from "../admin";
import CircularIndeterminate from "../admin/ui/Notification/Loading";
import Users from "../admin/user";
import Size from "../admin/products/components/size";
import Color from "../admin/products/components/color";
import EditProduct from "../admin/products/components/edit";
import Options from "../admin/products/components/options";
import FormLogin from "../page/Auth/sign-in";
import OptionsValue from "../admin/products/components/options/value";

const ProductAdmin = lazy(() => import("../admin/products/"));
const LayoutAdmin = lazy(() => import("../layout/admin"));
const ProductPage = lazy(() => import("../page/Products"));
export const router = [
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
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
        element: (
          <Lazy loading={<CircularIndeterminate />}>
            <ProductPage />
          </Lazy>
        ),
      },
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
        path: "/admin/options/",
        element: (
          <Lazy>
            <Options />
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
