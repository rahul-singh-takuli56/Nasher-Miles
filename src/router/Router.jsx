import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import ProductList from "../components/ProductList";
import ShopByCategory from "../components/ShopByCategory";
import ShopByColor from "../components/ShopByColor";
import ShopByTravel from "../components/ShopByTravel";
import Featured from "../components/Featured";
import CartItems from "../components/CartItems";
import SingleProduct from "../components/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/productlist", element: <ProductList /> },
      { path: "/productlist/:productId", element: <SingleProduct /> },
      { path: "/shop-by-category", element: <ShopByCategory /> },
      { path: "/shop-by-colour", element: <ShopByColor /> },
      { path: "/shop-by-travel-type", element: <ShopByTravel /> },
      { path: "/featured", element: <Featured /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/cart-items", element: <CartItems /> },
    ],
  },
]);

export default router;
