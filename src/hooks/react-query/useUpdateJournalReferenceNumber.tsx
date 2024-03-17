'use client'
import api from "@/app/api/lib/axios";
import { JournalReferenceNumberAttributes } from "@/type";
import { useMutation } from "@tanstack/react-query";


export function useUpdateJournalReferenceNumber() {
    const journalReferenceNumber = useMutation({
        mutationKey: ['update_journal_reference_number'],
        mutationFn: (e: { uuid: string, data: Omit<JournalReferenceNumberAttributes, 'uuid'> }) => api.put(`/journal_reference_number/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return journalReferenceNumber
}