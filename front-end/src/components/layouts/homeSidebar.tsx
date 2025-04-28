import { ClipboardCheck, User, FolderClosed } from "lucide-react";
import { Link } from "react-router-dom";

export function HomeSidebar() {
    return (
        <div className="flex flex-col w-64 bg-gray-800 text-white">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-xl font-bold">Home Sidebar</h1>
            </div>
            <nav className="flex flex-col p-4">
                <Link to={"/tasks"} className="mb-2">
                    <ClipboardCheck className="mb-4 text-gray-300" size={24} />
                </Link>
                <Link to={"/profile"} className="mb-2">
                    <User className="mb-4 text-gray-300" size={24} />
                </Link>
                <Link to={"/projects"} className="mb-2">
                    <FolderClosed className="mb-4 text-gray-300" />
                </Link>

                <a href="#" className="mb-2 text-gray-300 hover:text-white">Link 3</a>
            </nav>
        </div>
    )
}