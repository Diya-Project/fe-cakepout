'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetMonthlyAccountCalculationByYear(year: string) {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_year'],
        queryFn: () => api.get(`/monthly_account_calculation/year/${year}`),
    })
    useEffect(() => {
        if (year) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year])
    return monthlyAccountCalculation
}