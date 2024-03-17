'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAllJournal(): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journal = useQuery({
        queryKey: ['get_all_journal'],
        queryFn: () => api.get(`/journal`)
    })
    useEffect(() => {
        journal.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journal
}

