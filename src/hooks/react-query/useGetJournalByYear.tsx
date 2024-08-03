'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetJournalByYear(year: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journal = useQuery({
        queryKey: ['get_journal_by_year'],
        queryFn: () => api.get(`/cakepout/journal/year/${year}`),
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