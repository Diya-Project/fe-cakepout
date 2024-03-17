'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export default function useGetAllAccount(): UseQueryResult<AxiosResponse<any, any>, Error> {
    const account = useQuery({
        queryKey: ['get_all_account'],
        queryFn: () => api.get(`/`)
    })
    useEffect(() => {
        account.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return account
}
