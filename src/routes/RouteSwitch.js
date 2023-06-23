import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";

const RouteSwitch = () => {
  const [totalCartItems, setTotalCartItems] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          totalCartItems={totalCartItems}
          setTotalCartItems={setTotalCartItems}
        />
      ),
    },
    {
      path: "/cart",
      element: <Cart totalCartItems={totalCartItems} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouteSwitch;
