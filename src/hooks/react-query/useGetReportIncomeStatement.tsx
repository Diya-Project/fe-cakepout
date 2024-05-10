'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetReportIncomeStatement(start: string, end: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_report_income_statement'],
        queryFn: () => api.get(`/report/income-statement?start=${start}&end=${end}`),
        enabled: start !== "" && end !== "" ? true : false
    })
    useEffect(() => {
        if (start !== "" && end !== "") {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, end])
    return monthlyAccountCalculation
}