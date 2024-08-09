import GuestLayout from "@/layouts/guest-layout"
import NotFoundPage from "@/pages/not-found-page"
import UnauthorizedPage from "@/pages/unathorized-page"
import { createBrowserRouter } from "react-router-dom"
import { appRouter } from "./app.router"

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    ...appRouter,
    {
      path: "/unauthorized",
      Component: GuestLayout,
      children: [
        {
          index: true,
          Component: UnauthorizedPage,
        },
      ],
    },
    {
      path: "*",
      Component: NotFoundPage,
    },
  ])
