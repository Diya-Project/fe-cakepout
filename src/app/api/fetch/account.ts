import { AccountAttributes } from "@/type";
import api from "./http";

const ApiAccount = {
    getAllAccount: () => {
        return api.get(`/account`)
    },
    getAccountByUuid: (uuid: string) => {
        return api.get(`/account/${uuid}`)
    },
    getAccountByActivity: (activityId: string) => {
        return api.get(`/account/activity/${activityId}`)
    },
    getAccountByGroupAccount: (groupAccount: string) => {
        return api.get(`/account/group_account/${groupAccount}`)
    },
    getAccountByAccountNumber: (accountNumber: string) => {
        return api.get(`/account/account_number/${accountNumber}`)
    },
    postAccount: (data: Omit<AccountAttributes, 'uuid'>) => {
        return api.post(`/account`, data)
    },
    updateAccount: (uuid: string, data: Omit<AccountAttributes, 'uuid'>) => {
        return api.put(`/account/${uuid}`, data)
    },
    deleteAccount: (uuid: string) => {
        return api.delete(`/account/${uuid}`)
    }
}

export default ApiAccount;