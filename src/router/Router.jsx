import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
]);

export default router;
