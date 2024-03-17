import api from "@/queries/api";
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

export function useGetDetailOfActivityByUuid(uuid: string) {
    const detailOfActivity = useQuery({
        queryKey: ['get_detail_of_activity_by_uuid'],
        queryFn: () => api.get(`/detail_of_activity/${uuid}`),
        enabled: uuid !== null ? true : false
    })
    useEffect(() => {
        if (uuid) {
            detailOfActivity.refetch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuid])
    return detailOfActivity
}