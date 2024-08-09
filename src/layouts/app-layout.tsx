import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <main className="font-inter">
      <Outlet />
    </main>
  )
}
