'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export default function useGetAllAccount(trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const account = useQuery({
        queryKey: ['get_all_account'],
        queryFn: () => api.get(`/account`),
        enabled: trigger ? true : false
    })
    useEffect(() => {
        account.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger,])
    return account
}
