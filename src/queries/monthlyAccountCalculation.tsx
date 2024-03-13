import { getAllMonthlyAccountCalculation, getMonthlyAccountCalculationByMonthIndex, getMonthlyAccountCalculationByUuid, getMonthlyAccountCalculationByYear } from "@/requests/monthlAccountCalculation";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetAllMonthlyAccountCalculation() {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_all_monthly_account_calculation'],
        queryFn: () => getAllMonthlyAccountCalculation(),
    })
    useEffect(() => {
        monthlyAccountCalculation.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return monthlyAccountCalculation
}

export function useGetMonthlyAccountCalculationByUuid(uuid: string) {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_uuid'],
        queryFn: () => getMonthlyAccountCalculationByUuid(uuid),
    })
    useEffect(() => {
        if (uuid) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return monthlyAccountCalculation

}

export function useGetMonthlyAccountCalculationByAccount(account: string) {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_account'],
        queryFn: () => getMonthlyAccountCalculationByUuid(account),
    })
    useEffect(() => {
        if (account) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account])
    return monthlyAccountCalculation

}

export function useGetMonthlyAccountCalculationByMonthIndex(monthIndex: string) {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_month_index'],
        queryFn: () => getMonthlyAccountCalculationByMonthIndex(monthIndex),
    })
    useEffect(() => {
        if (monthIndex) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthIndex])
    return monthlyAccountCalculation

}

export function useGetMonthlyAccountCalculationByYear(year: string) {
    const monthlyAccountCalculation = useQuery({
        queryKey: ['get_monthly_account_calculation_by_year'],
        queryFn: () => getMonthlyAccountCalculationByYear(year),
    })
    useEffect(() => {
        if (year) {
            monthlyAccountCalculation.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year])
    return monthlyAccountCalculation
}