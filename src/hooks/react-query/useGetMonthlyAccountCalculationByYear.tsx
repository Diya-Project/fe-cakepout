'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetMonthlyAccountCalculationByYear(year: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_year'],
        queryFn: () => api.get(`/monthly-account-calculation/year/${year}`),
    })
    useEffect(() => {
        if (year) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year])
    return monthlyAccountCalculation
}