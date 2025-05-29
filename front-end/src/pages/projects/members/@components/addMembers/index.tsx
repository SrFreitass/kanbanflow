import { AddMembersModel } from "./addMembersModel";
import { AddMembersView } from "./addMembersView";

export function AddMember(){
    const model = AddMembersModel()

    return <AddMembersView {...model}/>
}