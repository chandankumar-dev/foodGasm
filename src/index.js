import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Search from "./pages/Search";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/about", // parentPath/{path} => localhost:1244/about
      //   element: (
      //     <Suspense fallback={<h1>Loading....</h1>}>
      //       <About />
      //     </Suspense>
      //   ),
      //   children: [
      //     {
      //       path: "profile", // parentPath/{path} => localhost:1244/about/profile
      //       element: <Profile />,
      //     },
      //   ],
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/restaurant/:resId",
      //   element: <RestaurantMenu />,
      // },
      // {
      //   path: "/instamart",
      //   element: (
      //     <Suspense fallback={<ShimmerUI />}>
      //       <Instamart />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
