import api from "@/queries/api";
import { AccountAttributes } from "@/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetAllAccount() {
    const account = useQuery({
        queryKey: ['get_all_account'],
        queryFn: () => api.get(`/`)
    })
    useEffect(() => {
        account.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return account
}

export function useGetAccountByUuid(uuid: string) {
    const account = useQuery({
        queryKey: ['get_account_by_uuid'],
        queryFn: () => api.get(`/account/${uuid}`),
        enabled: uuid !== null ? true : false
    })
    useEffect(() => {
        if (uuid) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return account
}

export function useGetAccountByActivity(activityId: string) {
    const account = useQuery({
        queryKey: ['get_account_by_activity'],
        queryFn: () => api.get(`/account/activity/${activityId}`),
        enabled: activityId !== null ? true : false
    })
    useEffect(() => {
        if (activityId) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activityId])
    return account
}

export function useGetAccountByGroupAccount(groupAccount: string) {
    const account = useQuery({
        queryKey: ['get_account_by_group_account'],
        queryFn: () => api.get(`/account/group_account/${groupAccount}`),
        enabled: groupAccount !== null ? true : false
    })
    useEffect(() => {
        if (groupAccount) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupAccount])
}

export function useGetAccountByAccountNumber(accountNumber: string) {
    const account = useQuery({
        queryKey: ["get_account_by_account_number"],
        queryFn: () => api.get(`/account/account_number/${accountNumber}`),
        enabled: accountNumber !== null ? true : false
    })
    useEffect(() => {
        if (accountNumber) {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountNumber])
}

export function useAddAccount() {
    const account = useMutation({
        mutationKey: ['post_account'],
        mutationFn: (e: Omit<AccountAttributes, 'uuid'>) => api.post(`/account`, e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

export function useUpdateAccount() {
    const account = useMutation({
        mutationKey: ['update_account'],
        mutationFn: (e: { uuid: string, data: Omit<AccountAttributes, 'uuid'> }) => api.put(`/account/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

export function useDeleteAccount() {
    const account = useMutation({
        mutationKey: ['delete_account'],
        mutationFn: (uuid: string) => api.delete(`/account/${uuid}`),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}