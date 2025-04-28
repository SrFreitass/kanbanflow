export function ProjectSidebar() {
    return (
        <div className="flex flex-col w-64 bg-white shadow-md">
            <div className="flex items-center justify-center h-16 bg-gray-800 text-white">
                <h1 className="text-xl font-bold">Project Sidebar</h1>
            </div>
            <nav className="flex flex-col p-4">
                <a href="/projects/dashboard" className="mb-2 text-gray-700 hover:text-gray-900">Dashboard</a>
                <a href="/projects/members" className="mb-2 text-gray-700 hover:text-gray-900">Members</a>
                <a href="/activities" className="mb-2 text-gray-700 hover:text-gray-900">Activities</a>
            </nav>
        </div>
    )
}