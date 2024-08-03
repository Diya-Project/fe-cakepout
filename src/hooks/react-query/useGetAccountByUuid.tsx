'use client'
import api from "@/app/api/lib/axios"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { useEffect } from "react"

export function useGetAccountByUuid(uuid: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const account = useQuery({
        queryKey: ['get_account_by_uuid'],
        queryFn: () => api.get(`/cakepout/account/${uuid}`),
        enabled: uuid && uuid !== null ? true : false
    })
    useEffect(() => {
        if (uuid && uuid !== null) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return account
}