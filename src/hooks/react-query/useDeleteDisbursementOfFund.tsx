'use client'
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";


export function useDeleteDisbursementOfFund(): UseMutationResult<AxiosResponse<any, any>, Error, string, unknown> {
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