'use client'
import api from "@/app/api/lib/axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useAddAccount(): UseMutationResult<AxiosResponse<any, any>, Error, AddAccountAttributes, unknown> {
    const account = useMutation({
        mutationKey: ['post_account'],
        mutationFn: (e: AddAccountAttributes) => api.post(`/account`, e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

