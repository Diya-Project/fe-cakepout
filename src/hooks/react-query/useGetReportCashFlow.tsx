'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetReportCashFlow(monthIndex: number): UseQueryResult<AxiosResponse<any, any>, Error> {
    const reportCashFlow = useQuery({
        queryKey: ['get_report_cash_flow_statement'],
        queryFn: () => api.get(`/cakepout/report/cash-flow-statement?month=${monthIndex}`),
        enabled: monthIndex !== null ? true : false
    })
    useEffect(() => {
        if (monthIndex !== null) {
            reportCashFlow.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthIndex])
    return reportCashFlow
}