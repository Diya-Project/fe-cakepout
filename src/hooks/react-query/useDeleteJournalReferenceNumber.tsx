'use client'
import api from "@/app/api/lib/axios";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";


export function useDeleteJournalReferenceNumber(): UseMutationResult<AxiosResponse<any, any>, Error, string, unknown> {
    const journalReferenceNumber = useMutation({
        mutationKey: ['delete_journal_reference_number'],
        mutationFn: (uuid: string) => api.delete(`/journalReferenceNumber/${uuid}`),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return journalReferenceNumber
}
