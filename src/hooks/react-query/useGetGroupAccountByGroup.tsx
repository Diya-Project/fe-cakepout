import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetGroupAccountByGroup(groupAccount: number, main: boolean): UseQueryResult<AxiosResponse<any, any>, Error> {
    const groupAccount_ = useQuery({
        queryKey: ['get_group_account_by_group'],
        queryFn: () => api.post(`/cakepout/group-account`, { group_account: groupAccount }),
        enabled: groupAccount && groupAccount !== null ? true : false
    })
    useEffect(() => {
        if (main && groupAccount && groupAccount !== null) {
            groupAccount_.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [main, groupAccount])
    return groupAccount_
} 