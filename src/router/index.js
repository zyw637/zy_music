import HomePage from "@/pages/homePage";
import { useRoutes } from "react-router-dom";

import { discoverChildren } from "./discover"

export default function Router() {
  console.log(discoverChildren)

  const routes = useRoutes([
    {
      path: "/",
      exact: true,
      element: <HomePage />,
    },
    {
      path: "/discover",
      exact: true,
      children: discoverChildren,
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