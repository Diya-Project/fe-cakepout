'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAllJournal(trigger: boolean, page: number | string, size: number | string,fromDate:string,toDate:string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journal = useQuery({
        queryKey: ['get_all_journal'],
        queryFn: () => api.get(`/cakepout/journal/?page=${page}&size=${size}&from_date=${fromDate}&to_date=${toDate}`),
        enabled: page && size && page !== null && size !== null && fromDate !== "" && toDate !== ""  ? true : false
    })
    useEffect(() => {
        if (page && size ) {
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, page, size,fromDate,toDate])
    return journal
}

