'use client'
import { useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";


export function useUpdateWithDrawDisbursementOfFund() {
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
