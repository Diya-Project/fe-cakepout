import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetInstitution():UseQueryResult<AxiosResponse<any, any>, Error>{
    const institution = useQuery({
        queryKey:["get_institution_on_cakepin"],
        queryFn: () => api.get("/cakepout/institution"),
        enabled:true
    })
    return institution
}