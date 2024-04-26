import { useGetAccountByGroupAccount } from '@/hooks/react-query/useGetAccountByGroupAccount'
import { AccountAttributes, SelectAttributes } from '@/type'
import { useEffect, useState } from 'react'

export default function useAccountByGroupOptions(group: number|string, status: boolean): Array<SelectAttributes> {
    const account = useGetAccountByGroupAccount(group)
    const [accountOptions, setAccountOptions] = useState<Array<SelectAttributes>>([])
    useEffect(() => {
        if (account?.data?.data) {
            setAccountOptions(account?.data?.data?.map((e: AccountAttributes) => {
                return { value: e.uuid, label: `${e.group_account?.group_account}.${e.group_account?.group_account_label}.${e.account_number} (${e.name})` }
            }))
        }
    }, [account?.data?.data, status, group])
    return accountOptions
}
