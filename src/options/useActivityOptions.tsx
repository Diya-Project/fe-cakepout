import { useGetDetailOfActivityByInstitution } from "@/hooks/react-query/useGetDetailOfActivityByInstitution";
import { ActivityAttributes, DetailOfActivityAttributes, SelectAttributes } from "@/type";
import { useEffect, useState } from "react";


export default function useDetailOfActivityOptions(institutionId: number | string | null): Array<SelectAttributes> {
    const detailOfActivity = useGetDetailOfActivityByInstitution(institutionId)
    const [detailOfActivityOptions, setDetailOfActivityOptions] = useState([])
    useEffect(() => {
        if (detailOfActivity?.data?.data) {
            console.log(detailOfActivity?.data?.data)
            setDetailOfActivityOptions(detailOfActivity?.data?.data?.map((e: ActivityAttributes) => {
                return { value: e.uuid, label: `${e.name}` }
            }))
        }
    }, [detailOfActivity?.data?.data, institutionId])
    return detailOfActivityOptions
}