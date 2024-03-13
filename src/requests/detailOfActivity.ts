import ApiDetailOfActiviy from "@/app/api/services/detailOfActivity";
import { AxiosResponse } from "axios";

export async function getAllDetailOfActivity(): Promise<AxiosResponse> {
    const res = await ApiDetailOfActiviy.getAllDetailOfActivity();
    return res;
}

export async function getDetailOfActivityByUuid(uuid: string): Promise<AxiosResponse> {
    const res = await ApiDetailOfActiviy.getDetailOfActivityByUuid(uuid);
    return res;
}