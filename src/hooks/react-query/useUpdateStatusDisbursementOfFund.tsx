'use client'
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";


export function useUpdateStatusDisbursementOfFund(): UseMutationResult<AxiosResponse<any, any>, Error, string, unknown> {
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