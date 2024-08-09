import "./index.css"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/provider/theme-provider.tsx"
import { Toaster } from "./components/ui/toaster.tsx"
import { router } from "./router/index.router.tsx"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="react-theme">
    <RouterProvider router={router} />
    <Toaster />
  </ThemeProvider>,
)
