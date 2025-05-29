// import { Plus } from "lucide-react";
import { DataTable } from "@/components/dataTable/dataTable";
import { AddMember } from "./@components/addMembers";
import { useMembersColumns, type MembersProps } from "./membersColumns";

export function MembersView() {
    // const projectId = params.id
    const { columns, deleteModal, editModal, rowId } = useMembersColumns()

    const data: MembersProps[] = [
        {
            id: "1",
            name: "Ana Silva",
            email: "ana@exemplo.com",
            role: "Gerente",
            status: "Ativo",
        },
        {
            id: "2",
            name: "Carlos Oliveira",
            email: "carlos@exemplo.com",
            role: "Administrador",
            status: "Ativo",
        },
        {
            id: "3",
            name: "Mariana Costa",
            email: "mariana@exemplo.com",
            role: "Colaborador",
            status: "Ativo",
        },
        {
            id: "4",
            name: "Pedro Santos",
            email: "pedro@exemplo.com",
            role: "Colaborador",
            status: "Ativo",
        },
        {
            id: "5",
            name: "Juliana Mendes",
            email: "juliana@exemplo.com",
            role: "Colaborador",
            status: "Inativo",
        },
        {
            id: "6",
            name: "Roberto Almeida",
            email: "roberto@exemplo.com",
            role: "Colaborador",
            status: "Ativo",
        },
    ]

    return (
        <div className="flex h-screen bg-gray-50">
            <main className="flex-1 p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Membros do Projeto</h1>
                        <p className="text-gray-500">Gerencie os membros e suas permissões</p>
                    </div>
                    <AddMember />
                </div>

                <DataTable columns={columns} data={data} />
            </main>
        </div>
    )
}
