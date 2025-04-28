import { ClipboardCheck, User, FolderClosed } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar";
import { useNavigate } from "react-router";

type MenuItems = {
    title: string;
    icon: React.ReactNode;
    url: string;
}[];

export function ProjectSidebar() {
    const navigate = useNavigate();

    const MENU_ITEMS: MenuItems = [
        {
            title: 'Minhas Atividades',
            icon: <ClipboardCheck />,
            url: '/minhas_atividades',
        },
        {
            title: 'Perfil',
            icon: <User />,
            url: "/perfil",
        },
        {
            title: 'Projetos',
            icon: <FolderClosed />,
            url: "/projetos",
        },
    ];

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="bg-background flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="@/assets/logo.svg" alt="logo" />

                    <p className="text-xl transition-all duration-200">
                        Kanbam <span className="font-bold text-xl">Flow</span>
                    </p>
                </div>
            </SidebarHeader>
            <SidebarSeparator className="w-full ml-0" />
            <SidebarContent className="bg-background">
                <SidebarGroup>
                    <SidebarMenu>
                        {MENU_ITEMS.map(item => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    onClick={() => navigate(item.url)}
                                    className="text-muted-foreground"
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
