'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetJournalByYear(year: string) {
    const journal = useQuery({
        queryKey: ['get_journal_by_year'],
        queryFn: () => api.get(`/journal/year/${year}`),
        enabled: year !== null ? true : false
    })
    useEffect(() => {
        if (year) {
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year])
    return journal
}