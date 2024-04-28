'use client'
import api from "@/app/api/lib/axios";
import { AddMonthlyAccountCalculation } from "@/form-type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useAddMonthlyAccountCalculation(): UseMutationResult<AxiosResponse<any, any>, Error, AddMonthlyAccountCalculation, unknown> {
    const account = useMutation({
        mutationKey: ['post_monthly_account_calculation'],
        mutationFn: (e: AddMonthlyAccountCalculation) => api.post(`/monthly-account-calculation`, e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

