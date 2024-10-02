import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useGetEstimatedAnnualIncome(): UseQueryResult<AxiosResponse<any, any>, Error> {
    const estimatedAnnualIncome = useQuery({
      queryKey: ["get_estimated_annual_income"], 
      queryFn: () => api.get(`cakepout/realization/income/data`),
      enabled: true
    });

    return estimatedAnnualIncome
}