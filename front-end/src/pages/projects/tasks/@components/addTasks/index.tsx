import { AddTasksModel } from "./addTasksModel";
import { AddTasksView } from "./addTasksView";

export function AddTasks(){
    const model = AddTasksModel()
    
    return <AddTasksView {...model}/>
}