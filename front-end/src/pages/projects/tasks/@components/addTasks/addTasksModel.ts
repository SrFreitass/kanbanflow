import { useToggle } from '@/hooks/useToggle'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TasksFormSchema, TasksFormValues } from '../../tasksSchema'

export function AddTasksModel() {
    const [open, toggle] = useToggle(false)

    const form = useForm<TasksFormValues>({
        resolver: zodResolver(TasksFormSchema),
        defaultValues: {
            title: '',
            description: '',
            status: '',
            priority: '',
            assignee: '',
            dueDate: undefined,
        },
    })

    function handleConfirmationData() {
    }

    return {
        open,
        toggle,
        handleConfirmationData,
        form,
    }
}
