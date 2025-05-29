import { z } from 'zod'

export const MembersFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'O nome deve conter pelo menos 3 caracteres' })
        .nullish(),
    role: z.string().nullish(),
    status: z.string(),
    
})

export type MembersFormValues = z.infer<typeof MembersFormSchema>
