import AppLayout from "@/layouts/app-layout"
import HelloWorldPage from "@/pages/hello-world-page"
import { RouteObject } from "react-router-dom"

export const appRouter: RouteObject[] = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HelloWorldPage,
      },
    ],
  },
]
