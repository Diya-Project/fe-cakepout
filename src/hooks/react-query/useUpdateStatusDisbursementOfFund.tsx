'use client'
import { useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";


export function useUpdateStatusDisbursementOfFund() {
    const disbursementOfFund = useMutation({
        mutationKey: ['update_status_disbursement_of_fund'],
        mutationFn: (e: string) => api.put(`/disbursementOfFund/status/${e}`),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}