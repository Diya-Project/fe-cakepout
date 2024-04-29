'use client'
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";



export function useGetDisbursementOfFundByStatus(status: number, trigger: boolean, page: number, size: number): UseQueryResult<AxiosResponse<any, any>, Error> {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_status'],
        queryFn: () => api.get(`/disbursement-of-fund/status/${status}?page=${page}&&size=${size}`),
        enabled: status !== null ? true : false
    })
    useEffect(() => {
        if (status !== null) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, trigger,page,size])
    return disbursementOfFund
}