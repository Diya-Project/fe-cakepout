import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";


export function useGetDetailRealization(account_id:string): UseQueryResult<AxiosResponse<any, any>, Error> {
    const detailRealization = useQuery({
        queryKey: ["get_detail_realization_on_cakepout", account_id],
        queryFn: ()=> api.get(`/cakepout/realization/detail/${account_id}`),
        enabled:true
    })

    return detailRealization
}