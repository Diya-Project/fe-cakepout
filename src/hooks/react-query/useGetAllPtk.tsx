'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAllPtk(trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const ptk = useQuery({
        queryKey: ['get_all_ptk'],
        queryFn: () => api.get('/ptk'),
        enabled: trigger
    })
    useEffect(() => {
        ptk.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger])
    return ptk
}