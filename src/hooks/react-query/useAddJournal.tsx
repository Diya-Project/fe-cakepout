'use client'
import api from "@/app/api/lib/axios";
import { AddJournalAttributes } from "@/form-type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useAddJournal(): UseMutationResult<AxiosResponse<any, any>, Error, AddJournalAttributes, unknown> {
    const account = useMutation({
        mutationKey: ['post_account'],
        mutationFn: (e: AddJournalAttributes) => api.post(`/journal`, e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

