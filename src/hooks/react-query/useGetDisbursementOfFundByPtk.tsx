'use client'
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";



export function useGetDisbursementOfFundByPtk(ptk_id: string, trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_ptk'],
        queryFn: () => api.get(`/cakepout/disbursement-of-fund/ptk/${ptk_id}`),
        enabled: ptk_id !== null ? true : false
    })
    useEffect(() => {
        if (ptk_id) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ptk_id, trigger])
    return disbursementOfFund
}