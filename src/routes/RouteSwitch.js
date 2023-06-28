import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";

const RouteSwitch = () => {
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: (
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalCartItems={totalCartItems}
              setTotalCartItems={setTotalCartItems}
            />
          ),
        },
        {
          path: "cart",
          element: (
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalCartItems={totalCartItems}
              setTotalCartItems={setTotalCartItems}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouteSwitch;
