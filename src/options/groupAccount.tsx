import { useGetGroupAccountByGroup } from "@/hooks/react-query/useGetGroupAccountByGroup";
import { GroupAccountAttributes } from "@/type";
import { useEffect, useState } from "react";


export default function useGroupAccountLabelOptions(groupAccount: number, main: boolean) {
    const [groupAccountOptions, setGroupAccountOptions] = useState([])
    const groupAccount_ = useGetGroupAccountByGroup(groupAccount, main)
    useEffect(() => {
        if (groupAccount_?.data?.data) {
            setGroupAccountOptions(groupAccount_?.data?.data?.map((e: GroupAccountAttributes) => {
                return { value: e.group_account_label, label: `${e.group_account_label}-${e.name}` }
            }))
        }
    }, [groupAccount_?.data?.data])
    return groupAccountOptions
}