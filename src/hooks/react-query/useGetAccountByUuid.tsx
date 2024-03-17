'use client'
import api from "@/app/api/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

export function useGetAccountByUuid(uuid: string) {
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