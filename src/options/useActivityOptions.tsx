import { useGetDetailOfActivityByInstitution } from "@/hooks/react-query/useGetDetailOfActivityByInstitution";
import { DetailOfActivityAttributes, SelectAttributes } from "@/type";
import { useEffect, useState } from "react";


export default function useDetailOfActivityOptions(institutionId: number | string | null): Array<SelectAttributes> {
    const detailOfActivity = useGetDetailOfActivityByInstitution(institutionId)
    const [detailOfActivityOptions, setDetailOfActivityOptions] = useState([])
    useEffect(() => {
        if (detailOfActivity?.data?.data) {
            setDetailOfActivityOptions(detailOfActivity?.data?.data?.map((e: DetailOfActivityAttributes) => {
                return { value: e.uuid, label: `${e.uraian} (${e.list_kegiatan?.list_komponen?.list_program?.list_lembaga?.nama_lembaga})` }
            }))
        }
    }, [detailOfActivity?.data?.data,institutionId])
    return detailOfActivityOptions
}