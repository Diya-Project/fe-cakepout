'use client'
import { useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";


export function useDeleteDisbursementOfFund() {
    const disbursementOfFund = useMutation({
        mutationKey: ['delete_disbursement_of_fund'],
        mutationFn: (uuid: string) => api.delete(`/disbursementOfFund/${uuid}`),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}