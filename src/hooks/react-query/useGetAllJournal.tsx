'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { number } from "yup";

export function useGetAllJournal(trigger: boolean, page: number | string, size: number | string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journal = useQuery({
        queryKey: ['get_all_journal'],
        queryFn: () => api.get(`/journal?page=${page}&size=${size}`),
        enabled: page && size && page !== null && size !== null ? true : false
    })
    useEffect(() => {
        if (page && size) {
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, page, size])
    return journal
}

