'use client'
import api from "@/app/api/lib/axios";
import { JournalReferenceNumberAttributes } from "@/type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";


export function useUpdateJournalReferenceNumber(): UseMutationResult<AxiosResponse<any, any>, Error, {
    uuid: string;
    data: Omit<JournalReferenceNumberAttributes, 'uuid'>;
}, unknown> {
    const journalReferenceNumber = useMutation({
        mutationKey: ['update_journal_reference_number'],
        mutationFn: (e: { uuid: string, data: Omit<JournalReferenceNumberAttributes, 'uuid'> }) => api.put(`/journal-reference-number/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return journalReferenceNumber
}