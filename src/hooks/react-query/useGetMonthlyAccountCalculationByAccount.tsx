'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";



export function useGetMonthlyAccountCalculationByAccount(accountId: string) {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_account'],
        queryFn: () => api.get(`/monthl_account_calculation/account_id/${accountId}`),
    })
    useEffect(() => {
        if (accountId) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountId])
    return monthlyAccountCalculation

}