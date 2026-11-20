import { createBrowserRouter } from "react-router-dom";
import { Main } from "@/pages/Main";
import { NotFound } from "@/pages/404page";

export const router = createBrowserRouter([
  {
    element: <></>,
    children: [{ path: "/", element: <Main /> }],
  },
  { path: "*", element: <NotFound /> },
]);
