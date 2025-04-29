"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, BarChart2, Bell, Briefcase, CheckSquare, Clock, Search } from "lucide-react"

export default function HomeView() {
    const [selectedPeriod, setSelectedPeriod] = useState("month")

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
            change: "-5",
            changeType: "decrease",
            icon: <CheckSquare className="h-6 w-6 text-yellow-600" />,
            color: "bg-yellow-50",
        },
        {
            title: "Tarefas Concluídas",
            value: "1",
            change: "+12",
            changeType: "increase",
            icon: <CheckSquare className="h-6 w-6 text-green-600" />,
            color: "bg-green-50",
        },
        {
            title: "Horas Registradas",
            value: "40",
            change: "+28",
            changeType: "increase",
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
        <div className="flex flex-col h-screen bg-gray-50">
            <header className="bg-white p-4 border-b sticky top-0 z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                            JS
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-6 overflow-auto flex-1">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">Bem-vindo, João!</h2>
                        <p className="text-gray-500">Aqui está um resumo do seu trabalho</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSelectedPeriod("week")}
                            className={`px-3 py-1.5 text-sm rounded-md ${selectedPeriod === "week" ? "bg-blue-600 text-white" : "bg-white border text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            Semana
                        </button>
                        <button
                            onClick={() => setSelectedPeriod("month")}
                            className={`px-3 py-1.5 text-sm rounded-md ${selectedPeriod === "month" ? "bg-blue-600 text-white" : "bg-white border text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            Mês
                        </button>
                        <button
                            onClick={() => setSelectedPeriod("year")}
                            className={`px-3 py-1.5 text-sm rounded-md ${selectedPeriod === "year" ? "bg-blue-600 text-white" : "bg-white border text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            Ano
                        </button>
                    </div>
                </div>

                {/* Cards de estatísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                    <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                                </div>
                                <div className={`p-3 rounded-md ${stat.color}`}>{stat.icon}</div>
                            </div>
                            <div className="flex items-center mt-4">
                                <span
                                    className={`text-sm font-medium flex items-center ${stat.changeType === "increase" ? "text-green-500" : "text-red-500"
                                        }`}
                                >
                                    {stat.changeType === "increase" ? (
                                        <ArrowUp className="mr-1 h-4 w-4" />
                                    ) : (
                                        <ArrowDown className="mr-1 h-4 w-4" />
                                    )}
                                    {stat.change}
                                </span>
                                <span className="text-gray-500 text-sm ml-2">desde o mês passado</span>
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
                            <h3 className="text-lg font-medium">Projetos Recentes</h3>
                            <button className="text-sm text-blue-600 hover:underline">Ver todos</button>
                        </div>
                        <div className="space-y-4">
                            {recentProjects.map((project, index) => (
                                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-medium">{project.name}</h4>
                                        <Badge
                                            variant={
                                                project.status === "Concluído"
                                                    ? "success"
                                                    : project.status === "Em revisão"
                                                        ? "warning"
                                                        : "info"
                                            }
                                        >
                                            {project.status}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                                        <span>Progresso: {project.progress}%</span>
                                        <span>Prazo: {project.dueDate}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Atividades recentes e próximos prazos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Atividades Recentes</h3>
                            <button className="text-sm text-blue-600 hover:underline">Ver todas</button>
                        </div>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium mr-3">
                                        {activity.user.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm">
                                            <span className="font-medium">{activity.user}</span>{" "}
                                            <span className="text-gray-500">{activity.action}</span>{" "}
                                            <span className="font-medium text-blue-600">{activity.task}</span>
                                        </p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
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
            </div>
        </div>
    )
}
