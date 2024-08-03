'use client'
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";


export function useUpdateStatusDisbursementOfFund(): UseMutationResult<AxiosResponse<any, any>, Error, { antrian: Array<string> }, unknown> {
    const disbursementOfFund = useMutation({
        mutationKey: ['update_status_disbursement_of_fund'],
        mutationFn: (data: { antrian: Array<string> }) => api.put(`/cakepout/disbursement-of-fund/status`, data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}