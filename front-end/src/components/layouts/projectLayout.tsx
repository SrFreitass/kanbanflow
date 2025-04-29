import { Outlet } from 'react-router'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { ProjectSidebar } from '../projectSidebar'

export function ProjectLayout() {
    return (
        <SidebarProvider>
            <div className='flex w-screen h-screen overflow-hidden'>
                <ProjectSidebar />
                <main className="w-screen h-screen relative overflow-hidden">
                    <SidebarTrigger />
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    )
}