import ApiAccount from "@/app/api/fetch/account";
import { AccountAttributes } from "@/type";
import { AxiosResponse } from "axios";

export async function getAllAccount(): Promise<AxiosResponse> {
    const res = await ApiAccount.getAllAccount()
    return res;
}

export async function getAccountByUuid(uuid: string): Promise<AxiosResponse> {
    const res = await ApiAccount.getAccountByUuid(uuid)
    return res;
}

export async function getAccountByActivity(activityId: string): Promise<AxiosResponse> {
    const res = await ApiAccount.getAccountByActivity(activityId)
    return res;
}

export async function getAccountByGroupAccount(groupAccount: string): Promise<AxiosResponse> {
    const res = await ApiAccount.getAccountByGroupAccount(groupAccount)
    return res;
}

export async function getAccountByAccountNumber(accountNumber: string): Promise<AxiosResponse> {
    const res = await ApiAccount.getAccountByAccountNumber(accountNumber)
    return res;
}

export async function postAccount(data:Omit<AccountAttributes,'uuid'>):Promise<AxiosResponse>{
    const res = await ApiAccount.postAccount(data)
    return res;
}

export async function updateAccount(uuid:string,data:Omit<AccountAttributes,'uuid'>):Promise<AxiosResponse>{
    const res = await ApiAccount.updateAccount(uuid,data)
    return res;
}

export async function deleteAccount(uuid:string):Promise<AxiosResponse>{
    const res = await ApiAccount.deleteAccount(uuid)
    return res;
}