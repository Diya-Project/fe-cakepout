'use client'
import api from "@/app/api/lib/axios";
import { AccountAttributes } from "@/type";
import { useMutation } from "@tanstack/react-query";



export function useUpdateAccount() {
    const account = useMutation({
        mutationKey: ['update_account'],
        mutationFn: (e: { uuid: string, data: Omit<AccountAttributes, 'uuid'> }) => api.put(`/account/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}
