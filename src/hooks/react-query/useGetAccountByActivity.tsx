'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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