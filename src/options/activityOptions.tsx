import { useGetAllDetailOfActivity } from "@/queries/detailOfActivity";
import { DetailOfActivityAttributes } from "@/type";
import { useEffect, useState } from "react";


export default function useDetailOfActivityOptions() {
    const detailOfActivity = useGetAllDetailOfActivity()
    const [detailOfActivityOptions, setDetailOfActivityOptions] = useState([])
    useEffect(() => {
        if (detailOfActivity?.data?.data) {
            setDetailOfActivityOptions(detailOfActivity?.data?.data?.map((e: DetailOfActivityAttributes) => {
                return { value: e.uuid, label: e.uraian }
            }))
        }
    }, [detailOfActivity?.data?.data])
    return detailOfActivityOptions
}