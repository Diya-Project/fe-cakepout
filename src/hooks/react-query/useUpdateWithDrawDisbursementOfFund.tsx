'use client'
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";


export function useUpdateWithDrawDisbursementOfFund(): UseMutationResult<AxiosResponse<any, any>, Error, {
    uuid: string;
    data: {
        ptk_id: string | null;
        receipient: string | null;
    };
}, unknown> {
    const disbursementOfFund = useMutation({
        mutationKey: ['update_withdraw_disbursement_of_fund'],
        mutationFn: (e: { uuid: string, data: { ptk_id: string | null, receipient: string | null } }) => api.put(`/disbursementOfFund/withdraw/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}
