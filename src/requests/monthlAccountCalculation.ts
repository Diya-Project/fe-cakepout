import ApiMonthlyAccountCalculation from "@/app/api/fetch/monthlyAccountCalculation";
import { AxiosResponse } from "axios";

export async function getAllMonthlyAccountCalculation(): Promise<AxiosResponse> {
    const res = await ApiMonthlyAccountCalculation.getAllMonthlyAccountCalculation()
    return res;
}

export async function getMonthlyAccountCalculationByUuid(uuid:string):Promise<AxiosResponse>{
    const res = await ApiMonthlyAccountCalculation.getMonthlyAccountCalculationByUuid(uuid)
    return res
}

export async function getMonthlyAccountCalculationByAccount(accountId:string):Promise<AxiosResponse>{
    const res = await ApiMonthlyAccountCalculation.getMonthlyAccountCalculationByAccount(accountId)
    return res;
}

export async function getMonthlyAccountCalculationByMonthIndex(monthIndex:string):Promise<AxiosResponse>{
    const res = await ApiMonthlyAccountCalculation.getMonthlyAccountCalculationByMonthIndex(monthIndex)
    return res;
}

export async function getMonthlyAccountCalculationByYear(year:string):Promise<AxiosResponse>{
    const res = await ApiMonthlyAccountCalculation.getMonthlyAccountCalculationByYear(year)
    return res;
}
