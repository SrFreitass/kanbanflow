import { Outlet } from 'react-router'
import { SidebarProvider } from '../ui/sidebar'
import { HomeSidebar } from '../homeSidebar'

export function HomeLayout() {
    return (
        <SidebarProvider>
            <HomeSidebar />
            <main className="w-full h-screen max-h-screen relative overflow-hidden">
                <section className="h-section">
                    <div className="h-full w-full overflow-auto">
                        <Outlet />
                    </div>
                </section>
            </main>
        </SidebarProvider>
    )
}