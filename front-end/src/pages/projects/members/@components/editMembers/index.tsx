import { useEditMembersModel } from "./editMembersModel";
import { EditMembersView } from "./editMembersView";

export function EditMembers({
    rowId,
    isOpen,
    toggle,
}: { rowId: string, isOpen: boolean, toggle: VoidFunction }){
    const model = useEditMembersModel()

    return <EditMembersView toggle={toggle} open={isOpen} {...model}/>
}