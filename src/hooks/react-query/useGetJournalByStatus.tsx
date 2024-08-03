'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetJournalByStatus(status: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journal = useQuery({
        queryKey: ['get_journal_by_status'],
        queryFn: () => api.get(`/cakepout/journal/status/${status}`),
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