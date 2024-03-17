'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetJournalByStatus(status: string) {
    const journal = useQuery({
        queryKey: ['get_journal_by_status'],
        queryFn: () => api.get(`/journal/status/${status}`),
        enabled: status !== null ? true : false
    })
    useEffect(() => {
        if (status) {
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])
    return journal
}