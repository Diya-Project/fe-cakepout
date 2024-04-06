import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";


const api = axios.create({
    baseURL: 'http://192.168.1.12:9191'
    // baseURL: 'https://sipahamv2.ponpesabuhurairah.id'
    // baseURL: 'http://localhost:9191'
})

api.interceptors.request.use(async (req: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig<any>> => {
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