'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetDetailOfActivityByInstitution(institutionId: number | string | null): UseQueryResult<AxiosResponse<any, any>, Error> {
    const detailOfActivity = useQuery({
        queryKey: ['get_detail_of_activity_by_institution'],
        queryFn: () => api.post(`/detail-of-activity/institution`, { institutionId: institutionId }),
        enabled: institutionId !== null ? true : false
    })
    useEffect(() => {
        if (institutionId !== null) {
            detailOfActivity.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [institutionId])
    return detailOfActivity
}
