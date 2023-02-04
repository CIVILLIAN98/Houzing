import Home from "../Components/Home";
import ProductDetails from "../Components/productDetails/productDetails";
import Products from "../Components/products/products";
import Login from "../Login";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    element: <Products />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 3,
    title: "Product Detail",
    path: "/home/:id",
    element: <ProductDetails />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 4,
    title: "Login",
    path: "/login",
    element: <Login />,
    isPrivate: true,
    hidden: true,
  },
];
