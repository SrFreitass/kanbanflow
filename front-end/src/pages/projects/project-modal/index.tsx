import { ProjectModalModel } from "./project-modalModel";
import { ProjectModalView } from "./project-modalView";

export function ProjectModal() {
    const model = ProjectModalModel()

    return <ProjectModalView {...model} />
}