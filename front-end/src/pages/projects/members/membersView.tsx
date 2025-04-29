import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function MembersView() {
    // const projectId = params.id

    return (
        <div className="flex h-screen bg-gray-50">
            <main className="flex-1 p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Membros do Projeto</h1>
                        <p className="text-gray-500">Gerencie os membros e suas permissões</p>
                    </div>
                    <Button 
                    className=" text-white rounded-md flex items-center gap-2 hover:bg-blue-700"
                    size="lg"
                    >
                        <Plus className="w-4 h-4" />
                        Adicionar Membro
                    </Button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="p-4 border-b bg-gray-50">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Buscar membros..."
                                    className="px-3 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Todos os cargos</option>
                                    <option value="gerente">Gerente</option>
                                    <option value="admin">Admin</option>
                                    <option value="colaborador">Colaborador</option>
                                </select>
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
                    </div>

                    <table className="w-full">
                        <thead className="bg-gray-50 text-left">
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Membro</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Acesso</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Adicionado em</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[
                                {
                                    name: "Ana Silva",
                                    email: "ana@exemplo.com",
                                    role: "Gerente",
                                    access: "Completo",
                                    added: "10/01/2023",
                                    status: "Ativo",
                                    avatar: "/placeholder.svg?height=40&width=40",
                                },
                                {
                                    name: "Carlos Oliveira",
                                    email: "carlos@exemplo.com",
                                    role: "Admin",
                                    access: "Edição",
                                    added: "15/01/2023",
                                    status: "Ativo",
                                    avatar: "/placeholder.svg?height=40&width=40",
                                },
                                {
                                    name: "Mariana Costa",
                                    email: "mariana@exemplo.com",
                                    role: "Colaborador",
                                    access: "Leitura/Escrita",
                                    added: "22/01/2023",
                                    status: "Ativo",
                                    avatar: "/placeholder.svg?height=40&width=40",
                                },
                                {
                                    name: "Pedro Santos",
                                    email: "pedro@exemplo.com",
                                    role: "Colaborador",
                                    access: "Leitura/Escrita",
                                    added: "05/02/2023",
                                    status: "Ativo",
                                    avatar: "/placeholder.svg?height=40&width=40",
                                },
                                {
                                    name: "Juliana Mendes",
                                    email: "juliana@exemplo.com",
                                    role: "Colaborador",
                                    access: "Somente leitura",
                                    added: "12/02/2023",
                                    status: "Inativo",
                                    avatar: "/placeholder.svg?height=40&width=40",
                                },
                                {
                                    name: "Roberto Almeida",
                                    email: "roberto@exemplo.com",
                                    role: "Colaborador",
                                    access: "Leitura/Escrita",
                                    added: "20/02/2023",
                                    status: "Ativo",
                                    avatar: "/placeholder.svg?height=40&width=40",
                                },
                            ].map((member, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                                <div className="text-sm text-gray-500">{member.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${member.role === "Gerente"
                                                ? "bg-purple-100 text-purple-800"
                                                : member.role === "Admin"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-green-100 text-green-800"
                                                }`}
                                        >
                                            {member.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.access}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.added}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex gap-2 justify-center ">
                                            <button className="text-blue-600 hover:text-blue-900">Editar</button>
                                            <button className="text-red-600 hover:text-red-900">Remover</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="px-6 py-4 border-t flex items-center justify-between">
                        <div className="text-sm text-gray-500">Mostrando 1-6 de 6 membros</div>
                        <div className="flex gap-2">
                            <button
                                className="px-3 py-1 border rounded-md text-sm text-gray-500 bg-white disabled:opacity-50"
                                disabled
                            >
                                Anterior
                            </button>
                            <button
                                className="px-3 py-1 border rounded-md text-sm text-gray-500 bg-white disabled:opacity-50"
                                disabled
                            >
                                Próximo
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
