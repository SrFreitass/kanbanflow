import { UserType } from "@/types/userType"
import clientHttp from "../clienHttp"
import { ENDPOINTS } from "@/constants/endpoints"

export const userCreate = (data: UserType) => {
    return clientHttp.post<{ data: UserType }>(`${ENDPOINTS.CREATE_USER}`, data)
}