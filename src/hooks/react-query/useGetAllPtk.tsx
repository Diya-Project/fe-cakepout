'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useGetAllPtk(): UseQueryResult<AxiosResponse<any, any>, Error> {
    const ptk = useQuery({
        queryKey: ['get_all_ptk'],
        queryFn: () => api.get('/ptk')
    })
    return ptk
}