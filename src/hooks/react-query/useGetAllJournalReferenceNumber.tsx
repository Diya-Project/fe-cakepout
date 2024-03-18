'use client'
import api from "@/app/api/lib/axios";
import { JournalReferenceNumberAttributes } from "@/type";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAllJournalReferenceNumber(): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_all_journal_reference_number'],
        queryFn: () => api.get(`/journal-reference-number`),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}
