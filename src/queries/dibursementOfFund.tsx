'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "@/queries/api";

export function useGetAllDisbursementOfFund(trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_all_disbursement_of_fund'],
        queryFn: () => api.get('/disbursement_of_fund')
    })
    useEffect(() => {
        disbursementOfFund.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger])
    return disbursementOfFund
}

export function useGetDisbursementOfFundByUuid(uuid: string, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ["get_disbursement_of_fund_by_uuid"],
        queryFn: () => api.get(`/disbursement_of_fund/${uuid}`),
        enabled: uuid !== null ? true : false
    })
    useEffect(() => {
        if (uuid) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid, trigger])
    return disbursementOfFund
}

export function useGetDisbursementOfFundByActivity(activity_id: string, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_activity'],
        queryFn: () => api.get(`/disbursement_of_fund/activity/${activity_id}`),
        enabled: activity_id !== null ? true : false
    })
    useEffect(() => {
        if (activity_id) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activity_id, trigger])
    return disbursementOfFund
}

export function useGetDisbursementOfFundByPtk(ptk_id: string, trigger: boolean) {
    const disbursementOfFund = useQuery({
        queryKey: ['get_disbursement_of_fund_by_ptk'],
        queryFn: () => api.get(`/disbursement_of_fund/ptk/${ptk_id}`),
        enabled: ptk_id !== null ? true : false
    })
    useEffect(() => {
        if (ptk_id) {
            disbursementOfFund.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ptk_id, trigger])
}

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

export function useUpdateStatusDisbursementOfFund() {
    const disbursementOfFund = useMutation({
        mutationKey: ['update_status_disbursement_of_fund'],
        mutationFn: (e: string) => api.put(`/disbursementOfFund/status/${e}`),
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
        mutationFn: (e: { uuid: string, data: { ptk_id: string | null, receipient: string | null } }) => api.put(`/disbursementOfFund/withdraw/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}

export function useDeleteDisbursementOfFund() {
    const disbursementOfFund = useMutation({
        mutationKey: ['delete_disbursement_of_fund'],
        mutationFn: (uuid: string) => api.delete(`/disbursementOfFund/${uuid}`),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return disbursementOfFund
}