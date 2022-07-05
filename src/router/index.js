import HomePage from "@/pages/homePage";
import { useRoutes } from "react-router-dom";

import { discoverChildren } from "./discover"

export default function Router() {

  const routes = useRoutes([
    ...discoverChildren,

    {
      path: "/",
      exact: true,
      element: <HomePage />,
    },
    {
      path: "/discover",
      exact: true,
      element: <>发现</>,
    },
    {
      path: "/library",
      element: <>音乐库</>,
    },


    // {
    //   path: "/discover/playlist/:playlist",
    //   element: <>playlist</>,
    // },

  ])


  return routes
}