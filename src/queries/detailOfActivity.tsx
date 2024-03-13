import { getAllDetailOfActivity, getDetailOfActivityByUuid } from "@/requests/detailOfActivity";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export function useGetAllDetailOfActivity() {
    const detailOfActivity = useQuery({
        queryKey: ['get_detail_of_activity'],
        queryFn: () => getAllDetailOfActivity(),
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
        queryFn: () => getDetailOfActivityByUuid(uuid),
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