import { AuthenticationAttributes } from "@/type";
import api from "./http";

const ApiAuthentication = {
    login: (data: AuthenticationAttributes) => {
        return api.post(`/authentication/login`, data)
    },
    logout: () => {
        return api.get(`/authentication/logout`)
    }
}

export default ApiAuthentication