'use client'
import api from "@/app/api/lib/axios";
import { AccountAttributes } from "@/type";
import { useMutation } from "@tanstack/react-query";

export function useAddAccount() {
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

