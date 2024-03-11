import { getAllPtk } from "@/requests/ptk";
import { useQuery } from "@tanstack/react-query";

export function useGetAllPtk() {
    const ptk = useQuery({
        queryKey: ['get_all_ptk'],
        queryFn: () => getAllPtk()
    })
    return ptk
}