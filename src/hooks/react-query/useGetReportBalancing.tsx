'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetReportBalancing(monthIndex: number): UseQueryResult<AxiosResponse<any, any>, Error> {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_report_balance'],
        queryFn: () => api.get(`/report/balance-statement?month_index=${monthIndex}`),
        enabled: monthIndex !== null ? true : false
    })
    useEffect(() => {
        if (monthIndex !== null) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthIndex])
    return monthlyAccountCalculation
}