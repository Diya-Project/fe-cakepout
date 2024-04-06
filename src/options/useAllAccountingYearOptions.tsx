import useGetAllAccountingYear from '@/hooks/react-query/useGetAllAccountingYear'
import { AccountingYearAttributes, SelectAttributes } from '@/type'
import { useEffect, useState } from 'react'

export default function useAccountingYearOptions(status: boolean): Array<SelectAttributes> {
    const accountingYear = useGetAllAccountingYear(status)
    const [accountingYearOptions, setAccountingYearOptions] = useState<Array<SelectAttributes>>([])
    useEffect(() => {
        if (accountingYear?.data?.data) {
            setAccountingYearOptions(accountingYear?.data?.data?.map((e: AccountingYearAttributes) => {
                return { value: e.tahun, label: e.tahun }
            }))
        }
    }, [accountingYear?.data?.data, status])
    return accountingYearOptions
}
