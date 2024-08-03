'use client'
import api from "@/app/api/lib/axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useCloseBook(): UseMutationResult<AxiosResponse<any, any>, Error, string, unknown> {
    const account = useMutation({
        mutationKey: ['post_close_book'],
        mutationFn: (month: string) => api.post(`/journal/ledger/close-book?month_index=${month}`),
        onSuccess: (res) => {
            return res
        },
        onError: (err) => {
            return err
        }
    })
    return account
}

