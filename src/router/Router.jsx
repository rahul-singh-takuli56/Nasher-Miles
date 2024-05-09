import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/productlist", element: <ProductList /> },
      { path: "/productlist/:productId", element: <ProductDetail /> },
    ],
  },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/productlist", element: <ProductList /> },
]);

export default router;
