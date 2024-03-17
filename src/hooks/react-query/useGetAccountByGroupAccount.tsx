'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAccountByGroupAccount(groupAccount: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const account = useQuery({
        queryKey: ['get_account_by_group_account'],
        queryFn: () => api.get(`/account/group_account/${groupAccount}`),
        enabled: groupAccount !== null ? true : false
    })
    useEffect(() => {
        if (groupAccount) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupAccount])
    return account
}