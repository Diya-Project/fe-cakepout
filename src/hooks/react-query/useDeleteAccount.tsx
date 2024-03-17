'use client'
import api from "@/app/api/lib/axios";
import { useMutation } from "@tanstack/react-query";


export function useDeleteAccount() {
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