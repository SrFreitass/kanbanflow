import { z } from 'zod'

export const projectFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'O nome deve conter pelo menos 3 caracteres' })
        .nullish(),
    description: z.string(),
    startDate: z.date(),
    dueDate: z.date(),
})

export type ProjectFormValues = z.infer<typeof projectFormSchema>
