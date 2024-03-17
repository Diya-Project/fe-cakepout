'use client'
import api from "@/app/api/lib/axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";


export function useDeleteAccount(): UseMutationResult<AxiosResponse<any, any>, Error, string, unknown> {
    const account = useMutation({
        mutationKey: ['delete_account'],
        mutationFn: (uuid: string) => api.delete(`/account/${uuid}`),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}