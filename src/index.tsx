import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import GlobalError from "./app/global-error";
import RootLayout from "./app/layout";
import App from "./app/Home";

const router = createBrowserRouter([
   {
      errorElement: <GlobalError />,
      element: <RootLayout />,
      path: "/",
      children: [
         {
            index: true,
            element: <App />,
         },
         {
            element: <>rota filha</>,
            path: "/:id",
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
