import { userCreate } from "@/services/repositories/users"
import { UserType } from "@/types/userType"
import { useMutation } from "@tanstack/react-query"


// const queryKey = 'users'

export const useUserCreate = () => {
    return useMutation({
        mutationFn: async (dados: UserType) => {
            return userCreate(dados)
        }
    })
}