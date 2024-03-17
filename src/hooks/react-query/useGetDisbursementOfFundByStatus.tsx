'use client'
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/app/api/lib/axios";



export function useGetDisbursementOfFundByStatus(status: number, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_status'],
        queryFn: () => api.get(`/disbursement_of_fund/status/${status}`),
        enabled: status !== null ? true : false
    })
    useEffect(() => {
        console.log(trigger)
        if (status !== null) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, trigger])
    return disbursementOfFund
}