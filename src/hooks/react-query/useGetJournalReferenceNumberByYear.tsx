'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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