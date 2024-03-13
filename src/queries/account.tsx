import { deleteAccount, getAccountByAccountNumber, getAccountByActivity, getAccountByGroupAccount, getAccountByUuid, getAllAccount, postAccount, updateAccount } from "@/requests/account";
import { AccountAttributes } from "@/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetAllAccount() {
    const account = useQuery({
        queryKey: ['get_all_account'],
        queryFn: () => getAllAccount()
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
        queryFn: () => getAccountByUuid(uuid),
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
        queryFn: () => getAccountByActivity(activityId),
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
        queryFn: () => getAccountByGroupAccount(groupAccount),
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
        queryFn: () => getAccountByAccountNumber(accountNumber),
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
        mutationFn: (e: Omit<AccountAttributes, 'uuid'>) => postAccount(e),
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
        mutationFn: (e: { uuid: string, data: Omit<AccountAttributes, 'uuid'> }) => updateAccount(e.uuid, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

export function useDeleteAccount(uuid: string) {
    const account = useMutation({
        mutationKey: ['delete_account'],
        mutationFn: (e: string) => deleteAccount(e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}