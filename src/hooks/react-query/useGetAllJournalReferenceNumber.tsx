'use client'
import api from "@/app/api/lib/axios";
import { JournalReferenceNumberAttributes } from "@/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetAllJournalReferenceNumber() {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_all_journal_reference_number'],
        queryFn: () => api.get(`/journal_reference_number`),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}

export function useGetJournalReferenceNumberByUuid(uuid: string) {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_journal_reference_number_by_uuid'],
        queryFn: () => api.get(`/journal_reference_number/${uuid}`),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}

export function useGetJournalReferenceNumberByYear(year: string) {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_journal_reference_number_by_year'],
        queryFn: () => api.get(`/journal_reference_number/year/${year}`),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}

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
