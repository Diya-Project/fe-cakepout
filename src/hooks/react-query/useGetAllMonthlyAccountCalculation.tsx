'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAllMonthlyAccountCalculation(): UseQueryResult<AxiosResponse<any, any>, Error> {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_all_monthly_account_calculation'],
        queryFn: () => api.get(`/monthly-account-calculation`),
    })
    useEffect(() => {
        monthlyAccountCalculation.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return monthlyAccountCalculation
}
