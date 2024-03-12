'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteDisbursementOfFund, getAllDisbursementOfFund, getDisbursementOfFunByStatus, getDisbursementOfFundByActivity, getDisbursementOfFundByPtk, getDisbursementOfFundByUuid, getDisbursementOfFundByWithdraw, updateStatusDisbursementOfFund, updateWithdrawDisbursementOfFund } from "../requests/dibsursementOfFund";
import { useEffect } from "react";

export function useGetAllDisbursementOfFund(trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_all_disbursement_of_fund'],
        queryFn: () => getAllDisbursementOfFund()
    })
    useEffect(() => {
        disbursementOfFund.refetch()
    }, [trigger])
    return disbursementOfFund
}

export function useGetDisbursementOfFundByUuid(uuid: string, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ["get_disbursement_of_fund_by_uuid"],
        queryFn: () => getDisbursementOfFundByUuid(uuid),
        enabled: uuid !== null ? true : false
    })
    useEffect(() => {
        if (uuid) {
            disbursementOfFund.refetch()
        }
    }, [uuid, trigger])
    return disbursementOfFund
}

export function useGetDisbursementOfFundByActivity(activity_id: string, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_activity'],
        queryFn: () => getDisbursementOfFundByActivity(activity_id),
        enabled: activity_id !== null ? true : false
    })
    useEffect(() => {
        if (activity_id) {
            disbursementOfFund.refetch()
        }
    }, [activity_id, trigger])
}

export function useGetDisbursementOfFundByPtk(ptk_id: string, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_ptk'],
        queryFn: () => getDisbursementOfFundByPtk(ptk_id),
        enabled: ptk_id !== null ? true : false
    })
    useEffect(() => {
        if (ptk_id) {
            disbursementOfFund.refetch()
        }
    }, [ptk_id, trigger])
}

export function useGetDisbursementOfFundByStatus(status: number, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_status'],
        queryFn: () => getDisbursementOfFunByStatus(status),
        enabled: status !== null ? true : false
    })
    useEffect(() => {
        if (status) {
            disbursementOfFund.refetch()
        }
    }, [status, trigger])
    return disbursementOfFund
}

export function useGetDisbursementOfFundByWithdraw(withDraw: number, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_withdraw'],
        queryFn: () => getDisbursementOfFundByWithdraw(withDraw),
        enabled: withDraw !== null ? true : false
    })
    useEffect(() => {
        if (withDraw) {
            disbursementOfFund.refetch()
        }
    }, [withDraw, trigger])
}

export function useUpdateStatusDisbursementOfFund() {
    const disbursementOfFund = useMutation({
        mutationKey: ['update_status_disbursement_of_fund'],
        mutationFn: (e: string) => updateStatusDisbursementOfFund(e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}

export function useUpdateWithDrawDisbursementOfFund() {
    const disbursementOfFund = useMutation({
        mutationKey: ['update_withdraw_disbursement_of_fund'],
        mutationFn: (e: { uuid: string, data: { ptk_id: string | null, receipient: string | null } }) => updateWithdrawDisbursementOfFund(e.uuid, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}

export function useDeleteDisbursementOfFund(uuid: string) {
    const disbursementOfFund = useMutation({
        mutationKey: ['delete_disbursement_of_fund'],
        mutationFn: (e: string) => deleteDisbursementOfFund(e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}