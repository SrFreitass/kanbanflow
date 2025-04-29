import { ChartNoAxesColumn, SquareCheckBig, Users } from "lucide-react";
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
            title: 'Atividades',
            icon: <SquareCheckBig />,
            url: '/atividades',
        },
        {
            title: 'Membros',
            icon: <Users />,
            url: "/membros",
        },
        {
            title: 'Dashboard',
            icon: <ChartNoAxesColumn />,
            url: "/dashboard",
        },
    ];

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="bg-background flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="../../public/logo.svg" alt="logo" />

                    <p className="text-xl transition-all duration-200">
                        Kanbam <span className="font-bold text-xl text-[#F15637]">Flow</span>
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
