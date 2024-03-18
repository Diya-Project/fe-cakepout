'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetMonthlyAccountCalculationByUuid(uuid: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_uuid'],
        queryFn: () => api.get(`/monthly-account-calculation/${uuid}`),
    })
    useEffect(() => {
        if (uuid) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return monthlyAccountCalculation

}