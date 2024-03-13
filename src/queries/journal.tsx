import { getAllJournal, getJournalByAccountId, getJournalByStatus, getJournalByTransactionDate, getJournalByUuid, getJournalByYear } from "@/requests/journal";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetAllJournal() {
    const journal = useQuery({
        queryKey: ['get_all_journal'],
        queryFn: () => getAllJournal()
    })
    useEffect(() => {
        journal.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journal
}

export function useGetJournalByUuid(uuid: string) {
    const journal = useQuery({
        queryKey: ['get_journal_by_uuid'],
        queryFn: () => getJournalByUuid(uuid),
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

export function useGetJournalByAccountId(accountId:string){
    const journal = useQuery({
        queryKey:['get_journal_by_account_id'],
        queryFn:()=>getJournalByAccountId(accountId),
        enabled:accountId!==null ? true:false
    })
    useEffect(()=>{
        if(accountId){
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[accountId])
    return journal
}

export function useGetJournalByTransactionDate(start:string,end:string){
    const journal = useQuery({
        queryKey:['get_journal_by_transaction_date'],
        queryFn:()=>getJournalByTransactionDate(start,end),
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

export function useGetJournalByStatus(status:string){
    const journal = useQuery({
        queryKey:['get_journal_by_status'],
        queryFn:()=>getJournalByStatus(status),
        enabled:status !== null ? true:false
    })
    useEffect(()=>{
        if(status){
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[status])
    return journal
}

export function useGetJournalByYear(year:string){
    const journal = useQuery({
        queryKey:['get_journal_by_year'],
        queryFn:()=>getJournalByYear(year),
        enabled:year!== null ? true:false
    })
    useEffect(()=>{
        if(year){
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[year])
    return journal
}