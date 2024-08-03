'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetDetailOfActivityByInstitution(institution_no: number | string | null): UseQueryResult<AxiosResponse<any, any>, Error> {
    const detailOfActivity = useQuery({
        queryKey: ['get_detail_of_activity_by_institution'],
        queryFn: () => api.post(`/apakah/detail-of-activity/institution`, { institution_no: institution_no }),
        enabled: institution_no !== null ? true : false
    })
    useEffect(() => {
        if (institution_no !== null) {
            detailOfActivity.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [institution_no])
    return detailOfActivity
}
