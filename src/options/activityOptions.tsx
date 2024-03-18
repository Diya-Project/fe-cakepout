import { useGetAllDetailOfActivity } from "@/hooks/react-query/useGetAllDetailOfActivity";
import { DetailOfActivityAttributes, SelectAttributes } from "@/type";
import { useEffect, useState } from "react";


export default function useDetailOfActivityOptions(status: boolean): Array<SelectAttributes> {
    const detailOfActivity = useGetAllDetailOfActivity(status)
    const [detailOfActivityOptions, setDetailOfActivityOptions] = useState([])
    useEffect(() => {
        if (detailOfActivity?.data?.data) {
            console.log(detailOfActivity.data?.data)
            setDetailOfActivityOptions(detailOfActivity?.data?.data?.map((e: DetailOfActivityAttributes) => {
                return { value: e.uuid, label: `${e.uraian} (${e.list_kegiatan?.list_komponen?.list_program?.list_lembaga?.nama_lembaga})` }
            }))
        }
    }, [detailOfActivity?.data?.data])
    return detailOfActivityOptions
}