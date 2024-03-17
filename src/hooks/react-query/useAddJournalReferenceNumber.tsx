'use client'
import api from "@/app/api/lib/axios";
import { JournalReferenceNumberAttributes } from "@/type";
import { useMutation } from "@tanstack/react-query";


export function useAddJournalReferenceNumber() {
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