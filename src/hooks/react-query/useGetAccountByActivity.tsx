'use client'
import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

export function useGetAccountByActivity(activityId: string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const account = useQuery({
        queryKey: ['get_account_by_activity'],
        queryFn: () => api.get(`/cakepout/account/activity/${activityId}`),
        enabled: activityId !== null && activityId !== '' ? true : false
    })
    useEffect(() => {
        if (activityId !== null && activityId !== '') {
            account.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activityId])
    return account
}