'use client'
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/app/api/lib/axios";
import { AxiosResponse } from "axios";

export function useGetAllDisbursementOfFund(trigger: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const disbursementOfFund = useQuery({
        queryKey: ['get_all_disbursement_of_fund'],
        queryFn: () => api.get('/disbursement_of_fund')
    })
    useEffect(() => {
        disbursementOfFund.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger])
    return disbursementOfFund
}
