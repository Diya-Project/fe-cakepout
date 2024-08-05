import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";


const api = axios.create({
    baseURL: "https://api-cakepout.ponpesabuhurairah.id"
    // baseURL: 'http://192.168.1.16:91`91'
    // baseURL: 'https://sipahamv2.ponpesabuhurairah.id'
    // baseURL: 'http://localhost:9933'
    // baseURL: 'http://192.168.1.12:9191'
})

api.interceptors.request.use(async (req: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    if (req.url !== "/authentication/login" && req.headers) {
        const session = await getSession()
        req.headers['Authorization'] = `Bearer ${session?.user?.token}`
    }
    return req
})
api.interceptors.response.use((res: AxiosResponse) => {
    return res;
}, (err) => {
    if (err.response.status === 401) {
        signOut()
    }
    throw err
}
)

export default api;