import { useGetAllPtk } from "@/hooks/react-query/useGetAllPtk";
import { PtkAttributes, SelectAttributes } from "@/type";
import { useEffect, useState } from "react";

export function usePtkOptions(): Array<SelectAttributes> {
    const ptk = useGetAllPtk()
    const [ptkOptions, setPtkOptions] = useState([])
    useEffect(() => {
        if (ptk?.data?.data) {
            setPtkOptions(ptk?.data?.data?.map((e: PtkAttributes) => {
                return { value: e.uuid, label: e.nama }
            }))
        }
    }, [ptk?.data?.data])
    return ptkOptions

}