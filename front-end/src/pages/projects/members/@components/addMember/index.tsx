import { AddMemberModel } from "./addMemberModel";
import { AddMemberView } from "./addMemberView";

export function AddMember(){
    const model = AddMemberModel()

    return <AddMemberView {...model}/>
}