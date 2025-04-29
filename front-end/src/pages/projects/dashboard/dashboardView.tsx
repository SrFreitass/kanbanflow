export function DashboardView({ params }) {
    const projectId = params.id

    return (
        <div className="flex h-screen bg-gray-50">
            <main className="flex-1 p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Dashboard do Projeto</h1>
                        <p className="text-gray-500">Visão geral e métricas do projeto</p>
                    </div>
                    <div className="flex gap-2">
                        <select className="px-3 py-1.5 border rounded-md text-sm bg-white">
                            <option value="7">Últimos 7 dias</option>
                            <option value="30" selected>
                                Últimos 30 dias
                            </option>
                            <option value="90">Últimos 90 dias</option>
                            <option value="all">Todo o período</option>
                        </select>
                        <button className="px-3 py-1.5 border bg-white rounded-md text-sm flex items-center gap-1">
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
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            Exportar
                        </button>
                    </div>
                </div>

                {/* Cards de resumo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Tarefas Totais</p>
                                <h3 className="text-3xl font-bold mt-1">28</h3>
                            </div>
                            <div className="p-2 bg-blue-100 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-600"
                                >
                                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="text-green-500 text-sm font-medium flex items-center">
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
                                    className="mr-1"
                                >
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                                12%
                            </span>
                            <span className="text-gray-500 text-sm ml-2">desde o mês passado</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Tarefas Concluídas</p>
                                <h3 className="text-3xl font-bold mt-1">18</h3>
                            </div>
                            <div className="p-2 bg-green-100 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-green-600"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="text-green-500 text-sm font-medium flex items-center">
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
                                    className="mr-1"
                                >
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                                18%
                            </span>
                            <span className="text-gray-500 text-sm ml-2">desde o mês passado</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Horas Registradas</p>
                                <h3 className="text-3xl font-bold mt-1">164</h3>
                            </div>
                            <div className="p-2 bg-purple-100 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-purple-600"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="text-red-500 text-sm font-medium flex items-center">
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
                                    className="mr-1"
                                >
                                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                                    <polyline points="16 17 22 17 22 11"></polyline>
                                </svg>
                                5%
                            </span>
                            <span className="text-gray-500 text-sm ml-2">desde o mês passado</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Membros Ativos</p>
                                <h3 className="text-3xl font-bold mt-1">6</h3>
                            </div>
                            <div className="p-2 bg-yellow-100 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-yellow-600"
                                >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="11" cy="7" r="4"></circle>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="text-green-500 text-sm font-medium flex items-center">
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
                                    className="mr-1"
                                >
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                                2%
                            </span>
                            <span className="text-gray-500 text-sm ml-2">desde o mês passado</span>
                        </div>
                    </div>
                </div>

                {/* Gráficos e estatísticas */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border lg:col-span-2">
                        <h3 className="text-lg font-medium mb-4">Progresso do Projeto</h3>
                        <div className="h-64 flex items-center justify-center">
                            {/* Aqui seria inserido um gráfico real */}
                            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">Gráfico de Progresso</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="text-lg font-medium mb-4">Status das Tarefas</h3>
                        <div className="space-y-4">
                            {[
                                { status: "Backlog", count: 5, color: "bg-gray-500", percentage: 18 },
                                { status: "Em Progresso", count: 3, color: "bg-blue-500", percentage: 11 },
                                { status: "Em Revisão", count: 2, color: "bg-yellow-500", percentage: 7 },
                                { status: "Concluídas", count: 18, color: "bg-green-500", percentage: 64 },
                            ].map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center">
                                            <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                                            <span className="text-sm font-medium">{item.status}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">{item.count}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
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
                            {[
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
                            ].map((activity, index) => (
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
                            {[
                                {
                                    task: "Finalizar protótipos",
                                    date: "28/04/2023",
                                    status: "Em progresso",
                                    assignee: "Ana Silva",
                                    daysLeft: 2,
                                },
                                {
                                    task: "Revisão de código",
                                    date: "02/05/2023",
                                    status: "Não iniciado",
                                    assignee: "Carlos Oliveira",
                                    daysLeft: 6,
                                },
                                {
                                    task: "Testes de integração",
                                    date: "10/05/2023",
                                    status: "Não iniciado",
                                    assignee: "Pedro Santos",
                                    daysLeft: 14,
                                },
                                {
                                    task: "Lançamento beta",
                                    date: "15/05/2023",
                                    status: "Não iniciado",
                                    assignee: "Equipe",
                                    daysLeft: 19,
                                },
                            ].map((deadline, index) => (
                                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div>
                                        <h4 className="font-medium text-sm">{deadline.task}</h4>
                                        <div className="flex items-center mt-1">
                                            <span className="text-xs text-gray-500 mr-2">{deadline.date}</span>
                                            <span
                                                className={`text-xs px-1.5 py-0.5 rounded-full ${deadline.status === "Em progresso" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                                                    }`}
                                            >
                                                {deadline.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500">Responsável: {deadline.assignee}</div>
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
