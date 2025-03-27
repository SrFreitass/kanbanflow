import { useUserCreate } from '@/hooks/users'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function useSignUpModel() {
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    }) 

    const CriarConta = useUserCreate()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = (data: any) => {
        setLoading(true)
        CriarConta.mutate(data, {
            onSuccess: async () => {
                setLoading(false)
                console.log("deu certo")
            }
        })
    }
   return {
    form,
    onSubmit,
    isLoading,
   } 
}
