'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export default function useGetAllAccount() {
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
