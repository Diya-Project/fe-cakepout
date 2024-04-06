import useGetAllAccount from '@/hooks/react-query/useGetAllAccount'
import { AccountAttributes, SelectAttributes } from '@/type'
import { useEffect, useState } from 'react'

export default function useAccountOptions(status: boolean): Array<SelectAttributes> {
    const account = useGetAllAccount(status)
    const [accountOptions, setAccountOptions] = useState<Array<SelectAttributes>>([])
    useEffect(() => {
        if (account?.data?.data) {
            setAccountOptions(account?.data?.data?.map((e: AccountAttributes) => {
                return { value: e.uuid, label: `${e.group_account?.group_account}.${e.group_account?.group_account_label}.${e.account_number} (${e.name})` }
            }))
        }
    }, [account?.data?.data, status])
    return accountOptions
}
