'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetJournalByUuid(uuid: string) {
    const journal = useQuery({
        queryKey: ['get_journal_by_uuid'],
        queryFn: () => api.get(`/journal/${uuid}`),
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
