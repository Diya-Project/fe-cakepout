'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetDetailLedger(id: string, month: number, trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const ledger = useQuery({
        queryKey: ['get_detail_ledger'],
        queryFn: () => api.get(`/cakepout/ledger/detail?id=${id}&month=${month}`),
        enabled: id && month && id !== "" && month !== 0 ? true : false
    })
    useEffect(() => {
        console.log(id, month)
        if (id && month && id !== "" && month !== 0 && trigger) {
            ledger.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, id, month])
    return ledger
}

