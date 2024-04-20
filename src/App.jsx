import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";

// Pages
import Home from "./pages/Home/Home";
import Sales from "./pages/Sales/Sales";
import Inventory from "./pages/Inventory/Inventory";
import Customer from "./pages/Customer/Customer"

function App() {

  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "salesReport", element: <Sales /> },
        { path: "inventory", element: <Inventory /> },
        { path: "customer", element: <Customer /> },
        // { path: "*", element: <Error /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
