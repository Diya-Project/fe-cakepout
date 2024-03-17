'use client'
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";

export function useGetDisbursementOfFundByActivity(activity_id: string, trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_activity'],
        queryFn: () => api.get(`/disbursement_of_fund/activity/${activity_id}`),
        enabled: activity_id !== null ? true : false
    })
    useEffect(() => {
        if (activity_id) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activity_id, trigger])
    return disbursementOfFund
}