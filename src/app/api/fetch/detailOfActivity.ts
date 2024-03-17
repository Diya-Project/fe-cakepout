import api from "./http";

const ApiDetailOfActiviy = {
    getAllDetailOfActivity:()=>{
        return api.get(`/detail_of_activity`)
    },
    getDetailOfActivityByUuid:(uuid:string)=>{
        return api.get(`/detail_of_activity/${uuid}`)
    }
}

export default ApiDetailOfActiviy

