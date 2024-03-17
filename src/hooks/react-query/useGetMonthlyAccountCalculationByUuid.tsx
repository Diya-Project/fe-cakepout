'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetMonthlyAccountCalculationByUuid(uuid: string) {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_uuid'],
        queryFn: () => api.get(`/monthly_account_calculation/${uuid}`),
    })
    useEffect(() => {
        if (uuid) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return monthlyAccountCalculation

}