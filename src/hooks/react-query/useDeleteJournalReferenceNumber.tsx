'use client'
import api from "@/app/api/lib/axios";
import { useMutation } from "@tanstack/react-query";


export function useDeleteJournalReferenceNumber() {
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
