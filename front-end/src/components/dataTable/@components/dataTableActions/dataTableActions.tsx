import { IconButton, IconManager } from '@/components/iconManager/iconManager'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

interface DataTableActionsProps {
    url?: string
    onEdit?: () => void
    onDelete: () => void
    disabledEditAction?: boolean
    disabledDeleteAction?: boolean
}

const actionsStyle =
    'flex items-center justify-center rounded-full transition-all w-fit p-2 hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50'

export function DataTableActions({
    onDelete,
    onEdit,
    url,
    disabledDeleteAction = false,
    disabledEditAction = false,
}: DataTableActionsProps) {
    return (
        <>
            <div className=" w-full flex justify-center gap-2 min-w-24">
                {url ? (
                    <button type="button" className={actionsStyle}>
                        <Link to={url}>
                            <IconManager
                                name="Pencil"
                                className="size-5 fill-primary stroke-white"
                            />
                        </Link>
                    </button>
                ) : (
                    <IconButton
                        onClick={onEdit}
                        name="Pencil"
                        className="size-5 fill-primary stroke-white"
                        buttonClassName={actionsStyle}
                        disabled={disabledEditAction}
                    />
                )}

                <IconButton
                    onClick={onDelete}
                    name="Trash2"
                    className="size-5 stroke-red-500"
                    buttonClassName={cn(actionsStyle, 'hover:bg-destructive/10')}
                    disabled={disabledDeleteAction}
                />
            </div>
        </>
    )
}
