'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetJournalReferenceNumberByYear(year: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_journal_reference_number_by_year'],
        queryFn: () => api.get(`/journal-reference-number/year/${year}`),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}