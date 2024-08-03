import { useGetAllSharingProgram } from "@/hooks/react-query/useGetAllSharingProgram";
import { SelectAttributes, SharingProgramsAttributes } from "@/type";
import { useEffect, useState } from "react";

export function useSharingProgramOptions(): Array<SelectAttributes> {
    const sharingProgram = useGetAllSharingProgram(true)
    const [sharingProgramOptions, setSharingProgramOptions] = useState<SelectAttributes[]>([])
    useEffect(() => {
        if (sharingProgram?.data?.data) {
            setSharingProgramOptions([{ value: "-", label: "SEMUA" },...sharingProgram?.data?.data?.map((e: SharingProgramsAttributes) => {
                return { value: e.id, label: e.name }
            })])
        }
    }, [sharingProgram?.data?.data])
    return sharingProgramOptions

}