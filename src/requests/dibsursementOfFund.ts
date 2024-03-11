import { AxiosResponse } from "axios";
import ApiDisbursementOfFund from "../app/api/services/disbursementOfFund"

export const getAllDisbursementOfFund = async (): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.getAllDisbursementOfFund();
    return res;
}

export const getDisbursementOfFundByUuid = async (uuid: string): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByUuid(uuid);
    return res;
}

export const getDisbursementOfFundByActivity = async (activity_id: string): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByActivity(activity_id);
    return res;
}

export const getDisbursementOfFundByPtk = async (ptk_id: string): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByPtk(ptk_id);
    return res;
}

export const getDisbursementOfFunByStatus = async (status: number): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.getDisbursementOfFunByStatus(status);
    return res;
}

export const getDisbursementOfFundByWithdraw = async (withdraw: number): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.getDisbursementOfFundByWithdraw(withdraw);
    return res;
}

export const updateStatusDisbursementOfFund = async (uuid: string): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.updateStatusDisbursementOfFund(uuid);
    return res;
}

export const updateWithdrawDisbursementOfFund = async (uuid: string, data: { ptk_id: string | null, receipient: string | null }): Promise<AxiosResponse> => {
    const res = await ApiDisbursementOfFund.updateWithdrawDisbursementOfFund(uuid, data);
    return res;
}

export const deleteDisbursementOfFund = async (uuid: string) => {
    const res = await ApiDisbursementOfFund.deleteDisbursementOfFund(uuid);
    return res;
}