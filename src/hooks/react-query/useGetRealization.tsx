import api from "@/app/api/lib/axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";



  interface UseGetRealizationResult {
    realization: UseQueryResult<AxiosResponse<any, any>, Error>;
    totalPercentation: string;
  }
  

  export function useGetRealization(institution_no: number): UseGetRealizationResult {
    const realization = useQuery({
      queryKey: ["get_realization_on_cakepout", institution_no], 
      queryFn: () => api.get(`/cakepout/realization/${institution_no}`),
      enabled: institution_no !== null && institution_no !== undefined,
      refetchInterval: 10000, 
    });
  
    const [totalPercentation, setTotalPercentation] = useState("0%");
  
   
    useEffect(() => {
      if (institution_no !== null ) {
        
        if (!realization.isLoading && realization?.data?.data) {
          let total_activity = 0;
          let total_realization = 0;
  
          // Calculate total activity and realization
          for (let d of realization.data.data) {
            total_activity += d.total_activity;
            total_realization += d.total_realization;
          }
  
          setTotalPercentation(`${((total_realization / total_activity) * 100).toFixed(1)}%`);
        }
      }
    }, [institution_no, realization.data, realization.isLoading]); // Added realization.data and realization.isLoading as dependencies
  
    // Return both realization and totalActivity_
    return {realization, totalPercentation}
  }