'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAllSharingProgram(trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const sharingProgram = useQuery({
        queryKey: ['get_all_sharing_program'],
        queryFn: () => api.get('/sharing-program'),
        enabled: trigger
    })
    useEffect(() => {
        sharingProgram.refetch()
    }, [trigger])
    return sharingProgram
}