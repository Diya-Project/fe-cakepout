'use client'
import api from "@/app/api/lib/axios";
import { JournalReferenceNumberAttributes } from "@/type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";


export function useAddJournalReferenceNumber(): UseMutationResult<AxiosResponse<any, any>, Error, Omit<JournalReferenceNumberAttributes, "uuid">, unknown> {
    const journalReferenceNumber = useMutation({
        mutationKey: ['post_journal_reference_number'],
        mutationFn: (e: Omit<JournalReferenceNumberAttributes, 'uuid'>) => api.post(`/journal_reference_number`, e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return journalReferenceNumber
}