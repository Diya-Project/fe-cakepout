'use client'
import api from "@/app/api/lib/axios";
import { AccountAttributes } from "@/type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useAddAccount():UseMutationResult<AxiosResponse<any, any>, Error, Omit<AccountAttributes, "uuid">, unknown> {
    const account = useMutation({
        mutationKey: ['post_account'],
        mutationFn: (e: Omit<AccountAttributes, 'uuid'>) => api.post(`/account`, e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

