import ApiAuthentication from "@/app/api/fetch/authentication";
import { AuthenticationAttributes } from "@/type";
import { AxiosResponse } from "axios";

export async function login(data: AuthenticationAttributes): Promise<AxiosResponse> {
    const res = await ApiAuthentication.login(data);
    return res;
}

export async function logout(): Promise<AxiosResponse> {
    const res = await ApiAuthentication.logout();
    return res;
}