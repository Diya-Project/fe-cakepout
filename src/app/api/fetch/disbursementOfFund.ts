import api from "./http";


const ApiDisbursementOfFund = {
    getAllDisbursementOfFund: () => {
        return api.get('/disbursement_of_fund')
    },
    getDisbursementOfFundByUuid: (uuid: string) => {
        return api.get(`/disbursement_of_fund/${uuid}`)
    },
    getDisbursementOfFundByActivity: (activity_id: string) => {
        return api.get(`/disbursement_of_fund/activity/${activity_id}`)
    },
    getDisbursementOfFundByPtk: (ptk_id: string) => {
        return api.get(`/disbursement_of_fund/ptk/${ptk_id}`)
    },
    getDisbursementOfFunByStatus: (status: number) => {
        return api.get(`/disbursement_of_fund/status/${status}`)
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