'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetAllDetailOfActivity(status: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const detailOfActivity = useQuery({
        queryKey: ['get_detail_of_activity'],
        queryFn: () => api.get(`/cakepout/detail-of-activity`),
        enabled: status
    })
    useEffect(() => {
        if (status) {
            detailOfActivity.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])
    return detailOfActivity
}
