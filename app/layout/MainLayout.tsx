import { Outlet } from "react-router"
import Footer from "~/components/shared/Footer"
import Header from "~/components/shared/Header"

export default function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
