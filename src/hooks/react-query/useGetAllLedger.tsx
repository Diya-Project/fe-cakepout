'use client'
import api from "@/app/api/lib/axios";
import monthIndex from "@/components/constants/monthIndex";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAllLedger(monthIndex: number, trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const ledger = useQuery({
        queryKey: ['get_all_ledger'],
        queryFn: () => api.get(`/ledger?month=${monthIndex}`),
        enabled: trigger && monthIndex ? true : false
    })
    useEffect(() => {
        if (monthIndex > 0) {
            ledger.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, monthIndex])
    return ledger
}

