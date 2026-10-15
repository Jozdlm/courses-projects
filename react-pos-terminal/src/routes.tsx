import { createBrowserRouter, Navigate } from "react-router";
import DashboardLayout from "./layouts/DasbhoardLayout";
import App from "./App";
import POSTerminal from "./pages/POSTerminal";
import LoginPage from "./pages/auth/LoginPage";
import TransactionsPage from "./pages/TransactionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: POSTerminal,
          },
          {
            path: "transaction-history",
            Component: TransactionsPage,
          },
        ],
      },
      {
        path: "login",
        Component: LoginPage,
      },
    ],
  },
  {
    path: "*",
    // TODO: Change default page or add 404 page
    element: <Navigate to="/dashboard" />,
  },
]);
