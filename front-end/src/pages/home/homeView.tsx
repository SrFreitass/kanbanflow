"use client"

import { Heading } from "@/components/heading/heading"
import { Badge } from "@/components/ui/badge"
import { BarChart2, Briefcase, CheckSquare, Clock } from "lucide-react"

export default function HomeView() {

    const stats = [
        {
            title: "Projetos Ativos",
            value: "8",
            change: "+2",
            changeType: "increase",
            icon: <Briefcase className="h-6 w-6 text-blue-600" />,
            color: "bg-blue-50",
        },
        {
            title: "Tarefas Pendentes",
            value: "7",
            icon: <CheckSquare className="h-6 w-6 text-yellow-600" />,
            color: "bg-yellow-50",
        },
        {
            title: "Tarefas Concluídas",
            value: "1",
            icon: <CheckSquare className="h-6 w-6 text-green-600" />,
            color: "bg-green-50",
        },
        {
            title: "Horas Registradas",
            value: "40",
            icon: <Clock className="h-6 w-6 text-purple-600" />,
            color: "bg-purple-50",
        },
    ]

    // Dados de exemplo para projetos recentes
    const recentProjects = [
        {
            name: "Design System",
            progress: 75,
            status: "Em progresso",
            dueDate: "30/05/2023",
        },
        {
            name: "App Mobile",
            progress: 45,
            status: "Em progresso",
            dueDate: "15/06/2023",
        },
        {
            name: "Website",
            progress: 90,
            status: "Em revisão",
            dueDate: "10/05/2023",
        },
    ]

    // Dados de exemplo para atividades recentes
    const recentActivities = [
        {
            user: "Ana Silva",
            action: "concluiu a tarefa",
            task: "Criar wireframes",
            time: "há 2 horas",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        {
            user: "Carlos Oliveira",
            action: "comentou na tarefa",
            task: "Implementar formulários",
            time: "há 5 horas",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        {
            user: "Mariana Costa",
            action: "adicionou",
            task: "Testes de usabilidade",
            time: "há 1 dia",
            avatar: "/placeholder.svg?height=32&width=32",
        },
        {
            user: "Pedro Santos",
            action: "atualizou",
            task: "Documentação da API",
            time: "há 2 dias",
            avatar: "/placeholder.svg?height=32&width=32",
        },
    ]

    // Dados de exemplo para próximos prazos
    const upcomingDeadlines = [
        {
            task: "Finalizar protótipos",
            project: "Design System",
            date: "28/04/2023",
            daysLeft: 2,
        },
        {
            task: "Revisão de código",
            project: "App Mobile",
            date: "02/05/2023",
            daysLeft: 6,
        },
        {
            task: "Testes de integração",
            project: "API REST",
            date: "10/05/2023",
            daysLeft: 14,
        },
    ]

    return (
        <div className="flex h-screen p-6 bg-gray-50">
            <main className="pb-6 overflow-auto flex-1">
                <Heading size="lg">Dashboard</Heading>
                    <div className="flex flex-col my-6">
                        <h2 className="text-2xl font-bold">Bem-vindo, João!</h2>
                        <p className="text-gray-500">Aqui está um resumo do seu trabalho</p>
                    </div>

                {/* Cards de estatísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border flex flex-col gap-5">
                            <p className="text-lg font-medium text-gray-500">{stat.title}</p>
                            <div className="flex justify-between">
                                <div className={`p-3 rounded-md ${stat.color} w-14 flex justify-center`}>{stat.icon}</div>
                                <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gráfico e projetos recentes */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border lg:col-span-2">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Progresso dos Projetos</h3>
                            <button className="text-sm text-blue-600 hover:underline">Ver todos</button>
                        </div>
                        <div className="h-64 flex items-center justify-center">
                            {/* Aqui seria inserido um gráfico real */}
                            <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <BarChart2 className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                                    <p className="text-gray-500">Gráfico de Progresso dos Projetos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Próximos Prazos</h3>
                            <button className="text-sm text-blue-600 hover:underline">Ver todos</button>
                        </div>
                        <div className="space-y-3">
                            {upcomingDeadlines.map((deadline, index) => (
                                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div>
                                        <h4 className="font-medium text-sm">{deadline.task}</h4>
                                        <div className="flex items-center mt-1">
                                            <span className="text-xs text-blue-600 mr-2">{deadline.project}</span>
                                            <span className="text-xs text-gray-500">{deadline.date}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div
                                            className={`text-xs font-medium ${deadline.daysLeft <= 3
                                                ? "text-red-600"
                                                : deadline.daysLeft <= 7
                                                    ? "text-yellow-600"
                                                    : "text-green-600"
                                                }`}
                                        >
                                            {deadline.daysLeft} dias restantes
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
