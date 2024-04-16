'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export default function useGetAllAccountByPage(trigger: boolean, page: number, size: number): UseQueryResult<AxiosResponse<any, any>, Error> {
    const account = useQuery({
        queryKey: ['get_all_account_by_page'],
        queryFn: () => api.get(`/account/page?page=${page}&size=${size}`)
    })
    useEffect(() => {
        if (page && size) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, page, size])
    return account
}
