'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


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