import api from "@/queries/api";
import { useQuery } from "@tanstack/react-query";

export function useGetAllPtk() {
    const ptk = useQuery({
        queryKey: ['get_all_ptk'],
        queryFn: () => api.get('/ptk')
    })
    return ptk
}