"use client"

import { useState } from "react"
import { TaskModal } from "@/components/task-modal"
import { ProjectSidebar } from "@/components/projectSidebar"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TasksView() {
    //   const projectId = params.id
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)

    const openTaskModal = (task = null) => {
        setSelectedTask(task)
        if (task) {
            setIsViewTaskModalOpen(true)
        } else {
            setIsTaskModalOpen(true)
        }
    }

    type Task = {
        id: number
        title: string
        description: string
        priority: string
        creator: string
        assignee: string
        comments: number
        date: string
    }

    type Column = {
        title: string
        count: number
        color: string
        tasks: Task[]
    }

    const columns: Column[] = [
        { title: "Backlog", count: 5, color: "bg-gray-100", tasks: [] },
        { title: "Em Progresso", count: 3, color: "bg-blue-50", tasks: [] },
        { title: "Em Revisão", count: 2, color: "bg-yellow-50", tasks: [] },
        { title: "Concluído", count: 8, color: "bg-green-50", tasks: [] },
    ]

    // Adicionar tarefas de exemplo às colunas
    columns[0].tasks = [
        {
            id: 1,
            title: "Pesquisa de usuários",
            description: "Análise de comportamento",
            priority: "Alta",
            creator: "Ana Silva",
            assignee: "João Silva",
            comments: 3,
            date: "25/04/2023",
        },
        {
            id: 2,
            title: "Definir arquitetura",
            description: "Estrutura de componentes",
            priority: "Média",
            creator: "Carlos Oliveira",
            assignee: "Pedro Santos",
            comments: 5,
            date: "26/04/2023",
        },
        {
            id: 3,
            title: "Criar wireframes",
            description: "Layout das telas principais",
            priority: "Baixa",
            creator: "Ana Silva",
            assignee: "Mariana Costa",
            comments: 2,
            date: "27/04/2023",
        },
    ]

    columns[1].tasks = [
        {
            id: 4,
            title: "Implementar formulários",
            description: "Validação e estados",
            priority: "Média",
            creator: "Pedro Santos",
            assignee: "João Silva",
            comments: 4,
            date: "24/04/2023",
        },
        {
            id: 5,
            title: "Desenvolver API",
            description: "Endpoints de autenticação",
            priority: "Alta",
            creator: "Carlos Oliveira",
            assignee: "Carlos Oliveira",
            comments: 2,
            date: "23/04/2023",
        },
    ]

    columns[2].tasks = [
        {
            id: 6,
            title: "Revisão de código",
            description: "Verificar padrões e otimizações",
            priority: "Média",
            creator: "Ana Silva",
            assignee: "Carlos Oliveira",
            comments: 7,
            date: "22/04/2023",
        },
        {
            id: 7,
            title: "Testes de usabilidade",
            description: "Avaliar experiência do usuário",
            priority: "Baixa",
            creator: "Mariana Costa",
            assignee: "Ana Silva",
            comments: 3,
            date: "21/04/2023",
        },
    ]

    columns[3].tasks = [
        {
            id: 8,
            title: "Documentação da API",
            description: "Swagger e exemplos de uso",
            priority: "Média",
            creator: "Carlos Oliveira",
            assignee: "Pedro Santos",
            comments: 2,
            date: "20/04/2023",
        },
        {
            id: 9,
            title: "Componentes de UI",
            description: "Botões, formulários e cards",
            priority: "Alta",
            creator: "Ana Silva",
            assignee: "João Silva",
            comments: 5,
            date: "19/04/2023",
        },
        {
            id: 10,
            title: "Integração com API",
            description: "Conexão frontend e backend",
            priority: "Alta",
            creator: "Pedro Santos",
            assignee: "Carlos Oliveira",
            comments: 4,
            date: "18/04/2023",
        },
    ]

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <div className="flex justify-between items-center p-6">
                <h1 className="text-2xl font-bold">Tarefas</h1>
                <div className="flex gap-2">
                    <Button
                        onClick={() => openTaskModal()}
                        className=" text-white rounded-md flex items-center gap-1"
                        size="lg"
                    ><Plus className="w-4 h-4" />
                        Nova Tarefa
                    </Button>
                </div>
            </div>

            <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                    {columns.map((column, columnIndex) => (
                        <div key={columnIndex} className={`${column.color} rounded-lg p-3 h-auto`}>
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-medium flex items-center gap-2">
                                    {column.title}
                                    <span className="text-xs bg-white px-1.5 py-0.5 rounded-full">{column.tasks.length}</span>
                                </h3>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-2">
                                {column.tasks.map((task, taskIndex) => (
                                    <div
                                        key={taskIndex}
                                        className="bg-white p-3 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
                                        onClick={() => openTaskModal()}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-full ${task.priority === "Alta"
                                                    ? "bg-red-100 text-red-800"
                                                    : task.priority === "Média"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-blue-100 text-blue-800"
                                                    }`}
                                            >
                                                {task.priority}
                                            </span>
                                            <button
                                                className="text-gray-400 hover:text-gray-600"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    // Implementar menu de opções
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </button>
                                        </div>
                                        <h4 className="font-medium mb-1 text-sm">{task.title}</h4>
                                        <p className="text-xs text-gray-500 mb-3">{task.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-1">
                                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs">
                                                    {task.assignee.charAt(0)}
                                                </div>
                                                <span className="text-xs text-gray-500">{task.assignee}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <span>{task.date}</span>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                    </svg>
                                                    <span className="ml-1">{task.comments}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para criar nova tarefa */}
            <TaskModal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} />

            {/* Modal para visualizar/editar tarefa existente */}
            <TaskModal isOpen={isViewTaskModalOpen} onClose={() => setIsViewTaskModalOpen(false)} task={selectedTask} />
        </div>
    )
}
