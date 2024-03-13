import api from "./http";

const ApiMonthlyAccountCalculation = {
    getAllMonthlyAccountCalculation:()=>{
        return api.get(`/monthly_account_calculation`)
    },
    getMonthlyAccountCalculationByUuid:(uuid:string)=>{
        return api.get(`/monthly_account_calculation/${uuid}`)
    },
    getMonthlyAccountCalculationByMonthIndex:(monthIndex:string)=>{
        return api.get(`/monthly_account_calculation/month_index/${monthIndex}`)
    },
    getMonthlyAccountCalculationByYear:(year:string)=>{
        return api.get(`/monthly_account_calculation/year/${year}`)
    },
    getMonthlyAccountCalculationByAccount:(accountId:string)=>{
        return api.get(`/monthl_account_calculation/account_id/${accountId}`)
    }
}

export default ApiMonthlyAccountCalculation