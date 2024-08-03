'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetJournalByTransactionDate(start:string,end:string): UseQueryResult<AxiosResponse<any, any>, Error>{
    const journal = useQuery({
        queryKey:['get_journal_by_transaction_date'],
        queryFn:()=>api.get(`/cakepout/journal/transaction-date/${start}/${end}`),
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