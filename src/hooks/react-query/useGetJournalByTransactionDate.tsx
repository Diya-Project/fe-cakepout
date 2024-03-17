'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetJournalByTransactionDate(start:string,end:string){
    const journal = useQuery({
        queryKey:['get_journal_by_transaction_date'],
        queryFn:()=>api.get(`/journal/transaction_date/${start}/${end}`),
        enabled:start !== null && end !== null ? true:false
    })
    useEffect(()=>{
        if(start && end){
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[start,end])
    return journal
}