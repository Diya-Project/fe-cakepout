'use client'
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";


export function useGetDisbursementOfFundByWithdraw(withDraw: number, trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_withdraw'],
        queryFn: () => api.get(`/disbursementOfFund/withdraw/${withDraw}`),
        enabled: withDraw !== null ? true : false
    })
    useEffect(() => {
        if (withDraw !== null) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [withDraw, trigger])
    return disbursementOfFund
}