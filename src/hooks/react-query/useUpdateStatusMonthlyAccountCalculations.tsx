'use client'
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";


export function useUpdateStatusMonthyAccountCalculation(): UseMutationResult<AxiosResponse<any, any>, Error, { uuid: string, data: { open: boolean|string } }, unknown> {
    const monthlyAccountCalculation = useMutation({
        mutationKey: ['update_status_disbursement_of_fund'],
        mutationFn: (e: { uuid: string, data: { open: boolean|string } }) => api.put(`/monthly-account-calculation/open/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return monthlyAccountCalculation
}