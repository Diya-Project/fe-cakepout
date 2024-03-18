'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetDetailOfActivityByUuid(uuid: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const detailOfActivity = useQuery({
        queryKey: ['get_detail_of_activity_by_uuid'],
        queryFn: () => api.get(`/detail-of-activity/${uuid}`),
        enabled: uuid !== null ? true : false
    })
    useEffect(() => {
        if (uuid) {
            detailOfActivity.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return detailOfActivity
}