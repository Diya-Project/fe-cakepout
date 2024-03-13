import { AxiosResponse } from "axios";
import ApiDisbursementOfFund from "../app/api/services/disbursementOfFund"

export async function getAllDisbursementOfFund(): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.getAllDisbursementOfFund();
    return res;
}

export async function getDisbursementOfFundByUuid(uuid: string): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByUuid(uuid);
    return res;
}

export async function getDisbursementOfFundByActivity(activity_id: string): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByActivity(activity_id);
    return res;
}

export async function getDisbursementOfFundByPtk(ptk_id: string): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByPtk(ptk_id);
    return res;
}

export async function getDisbursementOfFunByStatus(status: number): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.getDisbursementOfFunByStatus(status);
    return res;
}

export async function getDisbursementOfFundByWithdraw(withdraw: number): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByWithdraw(withdraw);
    return res;
}

export async function updateStatusDisbursementOfFund(uuid: string): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.updateStatusDisbursementOfFund(uuid);
    return res;
}

export async function updateWithdrawDisbursementOfFund(uuid: string, data: { ptk_id: string | null, receipient: string | null }): Promise<AxiosResponse> {
    const res = await ApiDisbursementOfFund.updateWithdrawDisbursementOfFund(uuid, data);
    return res;
}

export async function deleteDisbursementOfFund(uuid: string) {
    const res = await ApiDisbursementOfFund.deleteDisbursementOfFund(uuid);
    return res;
}