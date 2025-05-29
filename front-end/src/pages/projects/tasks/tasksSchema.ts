import { z } from 'zod'

export const TasksFormSchema = z.object({
    title: z
        .string()
        .min(3, { message: 'O nome deve conter pelo menos 3 caracteres' })
        .nullish(),
    description: z.string(),
    status: z.string(),
    priority: z.string(),
    assignee: z.string(),
    dueDate: z.date(),

})

export type TasksFormValues = z.infer<typeof TasksFormSchema>
