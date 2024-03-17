'use client'
import api from "@/app/api/lib/axios"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { useEffect } from "react"

export function useGetAccountByUuid(uuid: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const account = useQuery({
        queryKey: ['get_account_by_uuid'],
        queryFn: () => api.get(`/account/${uuid}`),
        enabled: uuid !== null ? true : false
    })
    useEffect(() => {
        if (uuid) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return account
}