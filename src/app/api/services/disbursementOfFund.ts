import api from "./http";


const ApiDisbursementOfFund = {
    getAllDisbursementOfFund: () => {
        return api.get('/disbursementOfFund')
    },
    getDisbursementOfFundByUuid: (uuid: string) => {
        return api.get(`/disbursementOfFund/${uuid}`)
    },
    getDisbursementOfFundByActivity: (activity_id: string) => {
        return api.get(`/disbursementOfFund/activity/${activity_id}`)
    },
    getDisbursementOfFundByPtk: (ptk_id: string) => {
        return api.get(`/disbursementOfFund/ptk/${ptk_id}`)
    },
    getDisbursementOfFunByStatus: (status: number) => {
        return api.get(`/disbursementOfFund/status/${status}`)
    },
    getDisbursementOfFundByWithdraw: (withdraw: number) => {
        return api.get(`/disbursementOfFund/withdraw/${withdraw}`)
    },
    updateStatusDisbursementOfFund: (uuid: string) => {
        return api.put(`/disbursementOfFund/status/${uuid}`)
    },
    updateWithdrawDisbursementOfFund: (uuid: string, data: { ptk_id: string | null, receipient: string | null }) => {
        return api.put(`/disbursementOfFund/withdraw/${uuid}`, data)
    },
    deleteDisbursementOfFund: (uuid: string) => {
        return api.delete(`/disbursementOfFund/${uuid}`)
    }
}

export default ApiDisbursementOfFund