'use client'
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/app/api/lib/axios";


export function useGetDisbursementOfFundByWithdraw(withDraw: number, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_withdraw'],
        queryFn: () => api.get(`/disbursementOfFund/withdraw/${withDraw}`),
        enabled: withDraw !== null ? true : false
    })
    useEffect(() => {
        if (withDraw !== null) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [withDraw, trigger])
}