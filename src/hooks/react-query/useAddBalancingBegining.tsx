'use client'
import api from "@/app/api/lib/axios";
import { FormSaldoAwal } from "@/form-type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useAddBeginingBalancing(): UseMutationResult<AxiosResponse<any, any>, Error, FormSaldoAwal, unknown> {
    const account = useMutation({
        mutationKey: ['post_balancing_begining'],
        mutationFn: (value: FormSaldoAwal) => api.post(`/cakepout/journal/account/account-begining-balance`, value),
        onSuccess: (res) => {
            return res
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

