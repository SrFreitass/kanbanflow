import { DataTableActions } from "@/components/dataTable/@components/dataTableActions/dataTableActions"
import { useToggle } from "@/hooks/useToggle"
import { ColumnDef } from "@tanstack/react-table"
import { useCallback, useState } from "react"

export type MembersProps = {
    id: string
    name: string
    email: string
    role: "Gerente" | "Administrador" | "Colaborador"
    status: "Ativo" | "Inativo"
}

export function useMembersColumns() {
    const [isOpenEdit, toggleEdit] = useToggle()
    const [isOpenDelete, toggleDelete] = useToggle()
    const [rowId, setRowId] = useState('')

    const handleToggle = useCallback(
        ({ rowId, modalType }: { rowId: string; modalType: 'edit' | 'delete' }) => {
            setRowId(rowId)

            if (modalType === 'edit') {
                toggleEdit()
                return
            }
            toggleDelete()
        },
        [toggleEdit, toggleDelete]
    )


    const columns: ColumnDef<MembersProps>[] = [
        {
            accessorKey: "name",
            header: "Nome",
            cell: ({ row }) => (
                <div className="text-muted-foreground">{row.original.name}</div>
            )
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => (
                <div className="text-muted-foreground">{row.original.email}</div>
            )
        },
        {
            accessorKey: "role",
            header: "Cargo",
            cell: ({ row }) => (
                <div className="text-muted-foreground">{row.original.role}</div>
            )
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <div className="text-muted-foreground">{row.original.status}</div>
            )
        },
        {
            id: 'actions',
            header: () => <div className="text-center">Ações</div>,
            enableColumnFilter: false,
            minSize: 150,
            cell: ({ row }) => (
                <DataTableActions
                    onEdit={() =>
                        handleToggle({ rowId: row.original.id, modalType: 'edit' })
                    }
                    onDelete={() =>
                        handleToggle({
                            rowId: row.original.id,
                            modalType: 'delete',
                        })
                    }
                />
            ),
        },
    ]

    return {
        editModal: {
            isOpen: isOpenEdit,
            toggle: toggleEdit,
        },
        deleteModal: {
            isOpen: isOpenDelete,
            toggle: toggleDelete,
        },
        rowId,
        columns,
    }
}
