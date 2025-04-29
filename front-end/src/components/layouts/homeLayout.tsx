import { Outlet } from "react-router"
import { SidebarProvider } from "../ui/sidebar"
import { HomeSidebar } from "../homeSidebar"

export function HomeLayout() {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen overflow-hidden">
        <HomeSidebar />
        <main className="flex-1 relative overflow-auto">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
