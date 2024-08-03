'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetJournalByUuid(uuid: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const journal = useQuery({
        queryKey: ['get_journal_by_uuid'],
        queryFn: () => api.get(`/cakepout/journal/${uuid}`),
        enabled: uuid !== null ? true:false
    })
    useEffect(()=>{
        if(uuid){
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[uuid])
    return journal
}
