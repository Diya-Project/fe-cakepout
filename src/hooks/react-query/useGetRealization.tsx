import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";


export function useGetRealization(institution_no:number): UseQueryResult<AxiosResponse<any, any>, Error> {
    const realization = useQuery({
        queryKey: ["get_realization_on_cakepout"],
        queryFn: ()=> api.get(`/cakepout/realization/${institution_no}`),
        enabled: institution_no !==null ? true: false
    })

    useEffect(()=>{
       if(institution_no!==null){
        realization.refetch();
        console.log("dipanggil")
        console.log(institution_no)
       }
    },[institution_no])

    return realization
}