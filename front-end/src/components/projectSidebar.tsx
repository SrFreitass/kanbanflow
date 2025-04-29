import { ChartNoAxesColumn, Home, SquareCheckBig, Users } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator, useSidebar } from "./ui/sidebar"
import { Link, useNavigate } from "react-router"

type MenuItems = {
    title: string
    icon: React.ElementType
    url: string
}[]

export function ProjectSidebar() {
    const navigate = useNavigate();
    const { state } = useSidebar()


    const MENU_ITEMS: MenuItems = [
        {
            title: 'Atividades',
            icon: SquareCheckBig,
            url: '/atividades',
        },
        {
            title: 'Membros',
            icon: Users,
            url: "/membros",
        },
        {
            title: 'Dashboard',
            icon: ChartNoAxesColumn,
            url: "/dashboard",
        },
    ]

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="bg-background flex items-center overflow-hidden">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="logo" />
                    {state === "expanded" && (
                        <p className="text-xl transition-all duration-200">
                            Kanbam<span className="font-bold text-xl text-[#F15637]">Flow</span>
                        </p>
                    )}
                    <Link to={"/inicio"}>
                        <Home />
                    </Link>
                </div>
            </SidebarHeader>
            <SidebarSeparator className="w-full ml-0" />
            <SidebarContent className="bg-background">
                <SidebarGroup>
                    <SidebarMenu>
                        {MENU_ITEMS.map((item) => {
                            const Icon = item.icon
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        tooltip={item.title}
                                        onClick={() => navigate(item.url)}
                                        className="text-muted-foreground mt-4"
                                    >
                                        <Icon style={{ width: "auto", height: 30 }} />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
