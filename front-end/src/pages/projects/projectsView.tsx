"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "./project-modal"
import { Link } from "react-router"

export default function ProjectsView() {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

    const projects = [
        {
            id: 1,
            name: "Design System",
            description: "Biblioteca de componentes UI para padronização de interfaces",
            progress: 75,
            startDate: "01/03/2023",
            endDate: "30/05/2023",
            members: 5,
            tasks: 28,
            status: "Em progresso",
        },
        {
            id: 2,
            name: "App Mobile",
            description: "Aplicativo para iOS e Android com funcionalidades de gerenciamento de tarefas",
            progress: 45,
            startDate: "15/02/2023",
            endDate: "15/06/2023",
            members: 8,
            tasks: 42,
            status: "Em progresso",
        },
        {
            id: 3,
            name: "Website",
            description: "Site institucional com blog e área de clientes",
            progress: 90,
            startDate: "10/01/2023",
            endDate: "10/05/2023",
            members: 4,
            tasks: 35,
            status: "Em revisão",
        },
        {
            id: 4,
            name: "API REST",
            description: "Desenvolvimento de API para integração com sistemas externos",
            progress: 60,
            startDate: "05/03/2023",
            endDate: "20/06/2023",
            members: 3,
            tasks: 22,
            status: "Em progresso",
        },
        {
            id: 5,
            name: "Dashboard Analytics",
            description: "Painel de métricas e análise de dados para tomada de decisão",
            progress: 30,
            startDate: "20/03/2023",
            endDate: "25/07/2023",
            members: 6,
            tasks: 18,
            status: "Em progresso",
        },
        {
            id: 6,
            name: "Documentação Técnica",
            description: "Criação de documentação técnica para desenvolvedores",
            progress: 100,
            startDate: "05/01/2023",
            endDate: "05/04/2023",
            members: 2,
            tasks: 15,
            status: "Concluído",
        },
    ]

    return (
        <div className="flex h-screen bg-gray-50">
            <main className="flex-1 p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Meus Projetos</h1>
                    <ProjectModal />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                            <div className="p-4 border-b">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-lg font-semibold">{project.name}</h2>
                                    <Badge
                                        variant="outline"
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{project.description}</p>
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between text-sm text-gray-500 mb-1">
                                    <span>Progresso: {project.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                    <div
                                        className={`h-2 rounded-full ${project.progress === 100
                                            ? "bg-green-500"
                                            : project.progress > 75
                                                ? "bg-blue-600"
                                                : project.progress > 50
                                                    ? "bg-blue-500"
                                                    : project.progress > 25
                                                        ? "bg-yellow-500"
                                                        : "bg-red-500"
                                            }`}
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                                    <div>
                                        <p className="text-gray-500">Data de início</p>
                                        <p className="font-medium">{project.startDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Prazo final</p>
                                        <p className="font-medium">{project.endDate}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        {Array.from({ length: Math.min(4, project.members) }).map((_, i) => (
                                            <Avatar key={i} className="h-8 w-8 border-2 border-white">
                                                <AvatarImage src="/placeholder.svg" />
                                                <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                                            </Avatar>
                                        ))}
                                        {project.members > 4 && (
                                            <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                                                +{project.members - 4}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">{project.tasks} tarefas</span>
                                        <Link to="/atividades">
                                            <Button
                                                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm hover:bg-blue-100"
                                            >
                                                Acessar
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
