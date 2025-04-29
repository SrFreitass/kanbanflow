import { ClipboardCheck, User, FolderClosed } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator, useSidebar } from "./ui/sidebar"
import { useNavigate } from "react-router"
import React from "react"

type MenuItems = {
    title: string
    icon: React.ElementType
    url: string
}[]

export function HomeSidebar() {
    const navigate = useNavigate()
    const { state } = useSidebar()

    const MENU_ITEMS: MenuItems = [
        {
            title: 'Minhas Atividades',
            icon: ClipboardCheck,
            url: '/minhas_atividades',
        },
        {
            title: 'Perfil',
            icon: User,
            url: "/perfil",
        },
        {
            title: 'Projetos',
            icon: FolderClosed,
            url: "/projetos",
        },
    ]

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="bg-background flex items-center overflow-hidden">
                <div className={`flex items-center gap-2 justify-start ${state === "expanded" ? "mr-4" : ""}`}>
                    <img src="/logo.svg" alt="logo" className="scale-[85%]"/>
                    {state === "expanded" && (
                        <p className="text-xl transition-all duration-200">
                            Kanbam<span className="font-bold text-xl text-[#F15637]">Flow</span>
                        </p>
                    )}
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
                                        className={`text-muted-foreground mt-4 ${state === "collapsed" ? 'flex justify-center' : ""}`}
                                    >
                                        <Icon style={{ width: "auto", height: state === "collapsed" ? 22 : 24}} />
                                        {state === "expanded" && <span>{item.title}</span>}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        }
                        )}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
