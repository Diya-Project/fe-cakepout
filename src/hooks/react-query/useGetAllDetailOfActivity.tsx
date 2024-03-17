'use client'
import api from "@/app/api/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetAllDetailOfActivity() {
    const detailOfActivity = useQuery({
        queryKey: ['get_detail_of_activity'],
        queryFn: () => api.get(`/detail_of_activity`),
    })
    useEffect(() => {
        detailOfActivity.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return detailOfActivity
}
