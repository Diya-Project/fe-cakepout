'use client'
import api from "@/app/api/lib/axios";
import { AccountBalancingBeginingAttributes } from "@/type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAccountBeginingBalancing(trigger: boolean): UseQueryResult<AxiosResponse<AccountBalancingBeginingAttributes, any>, Error> {
    const account = useQuery({
        queryKey: ["get_account_begining_balance"],
        queryFn: () => api.get(`/journal/account/account-begining-balance`),
        enabled: trigger
    })
    useEffect(() => {
        if (trigger) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger])
    return account
}