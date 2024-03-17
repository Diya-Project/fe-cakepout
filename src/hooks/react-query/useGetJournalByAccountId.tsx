'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetJournalByAccountId(accountId: string) {
    const journal = useQuery({
        queryKey: ['get_journal_by_account_id'],
        queryFn: () => api.get(`/journal/account_id/${accountId}`),
        enabled: accountId !== null ? true : false
    })
    useEffect(() => {
        if (accountId) {
            journal.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountId])
    return journal
}
