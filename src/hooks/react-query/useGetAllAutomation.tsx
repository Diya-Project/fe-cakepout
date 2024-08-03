'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export default function useGetAllAutomation(group_account: number, trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const automation = useQuery({
        queryKey: ['get-all-automation'],
        queryFn: () => api.get(`/cakepout/account-automation/account?group_account=${group_account}`),
        enabled: group_account && trigger ? true : false
    })
    useEffect(() => {
        if (group_account && group_account !== 0) automation.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [group_account, trigger])
    return automation
}
