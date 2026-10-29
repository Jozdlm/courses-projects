import { createBrowserRouter, redirect } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import App from "./App";
import POSTerminal from "./pages/POSTerminal";
import LoginPage from "./pages/auth/LoginPage";
import TransactionsPage from "./pages/TransactionsPage";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Categories from "./pages/categories";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => redirect("/dashboard"),
      },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Overview,
          },
          {
            path: "virtual-terminal",
            Component: POSTerminal,
          },
          {
            path: "transaction-history",
            Component: TransactionsPage,
          },
          {
            path: "products",
            Component: Products,
          },
          {
            path: "categories",
            Component: Categories,
          },
        ],
      },
      {
        path: "login",
        Component: LoginPage,
      },
      // TODO: Implement 404 page or redirect to high-level page
      {
        path: "*",
        loader: () => redirect("/"),
      },
    ],
  },
]);
