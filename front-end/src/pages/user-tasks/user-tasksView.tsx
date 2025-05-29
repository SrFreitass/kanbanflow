import { Heading } from "@/components/heading/heading";

export function UserTasksView() {
    return (
        <div className="flex h-screen p-6 bg-gray-50">
            <main className="flex-1 pb-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <Heading size="lg">Minhas Atividades</Heading>
                        <p className="text-gray-500">Visualize todas as suas atividades em diferentes projetos</p>
                    </div>
                    <div className="flex gap-2">
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
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                            Filtrar
                        </button>
                        
                    </div>
                </div>

                <div className="grid gap-4">
                    {[
                        {
                            project: "Design System",
                            task: "Criar componentes de UI",
                            status: "Em progresso",
                            date: "Hoje, 14:30",
                            priority: "Alta",
                            description: "Desenvolver componentes reutilizáveis para o sistema de design",
                        },
                        {
                            project: "App Mobile",
                            task: "Implementar autenticação",
                            status: "Concluído",
                            date: "Ontem, 16:45",
                            priority: "Média",
                            description: "Implementar sistema de login e registro no aplicativo móvel",
                        },
                        {
                            project: "Website",
                            task: "Otimizar SEO",
                            status: "Em revisão",
                            date: "22/04, 10:15",
                            priority: "Baixa",
                            description: "Melhorar o SEO do site para aumentar o tráfego orgânico",
                        },
                        {
                            project: "API REST",
                            task: "Documentar endpoints",
                            status: "Em progresso",
                            date: "21/04, 09:30",
                            priority: "Média",
                            description: "Criar documentação detalhada para todos os endpoints da API",
                        },
                        {
                            project: "Dashboard Analytics",
                            task: "Criar gráficos de desempenho",
                            status: "Backlog",
                            date: "20/04, 11:20",
                            priority: "Alta",
                            description: "Desenvolver gráficos interativos para visualização de dados",
                        },
                        {
                            project: "App Mobile",
                            task: "Corrigir bug de login",
                            status: "Concluído",
                            date: "19/04, 15:10",
                            priority: "Alta",
                            description: "Resolver problema de autenticação em dispositivos Android",
                        },
                    ].map((activity, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-medium">{activity.task}</h3>
                                    <p className="text-sm text-blue-600">{activity.project}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full ${activity.status === "Concluído"
                                            ? "bg-green-100 text-green-800"
                                            : activity.status === "Em revisão"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : activity.status === "Em progresso"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-gray-100 text-gray-800"
                                            }`}
                                    >
                                        {activity.status}
                                    </span>
                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full ${activity.priority === "Alta"
                                            ? "bg-red-100 text-red-800"
                                            : activity.priority === "Média"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-blue-100 text-blue-800"
                                            }`}
                                    >
                                        {activity.priority}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs border-2 border-white">
                                            A
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs border-2 border-white">
                                            B
                                        </div>
                                    </div>
                                    <span className="text-gray-500">2 colaboradores</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>3</span>
                                    </div>
                                    <span>{activity.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
