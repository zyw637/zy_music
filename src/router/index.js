import HomePage from "@/pages/homePage";
import { useRoutes } from "react-router-dom";


// const routes = [
//     {
//         path:"/",
//         exact:true,
//         component:<>hello world</>,
//     },
//     {
//         path:"/discover",
//         exact:true,
//         component:<></>,
//     },
//     {
//         path:"/library",
//         component:<></>,
//     },

// ]

// export default routes;


export default function Router() {

  const routes = useRoutes([
    {
      path: "/",
      // exact: true,
      element: <HomePage />,
    },
    {
      path: "/discover",
      // exact: true,
      element: <>发现</>,
    },
    {
      path: "/library",
      element: <>音乐库</>,
    },

  ])

  return routes
}