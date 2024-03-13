import api from "./http";

const ApiJournal = {
    getAllJournal:()=>{
        return api.get(`/journal`)
    },
    getJournalByUuid:(uuid:string)=>{
        return api.get(`/journal/${uuid}`)
    },
    getJournalByStatus:(status:string)=>{
        return api.get(`/journal/status/${status}`)
    },
    getJournalByTransactionDate:(start:string,end:string)=>{
        return api.get(`/journal/transaction_date/${start}/${end}`)
    },
    getJournalByYear:(year:string)=>{
        return api.get(`/journal/year/${year}`)
    },
    getJournalByAccountId:(account_id:string)=>{
        return api.get(`/journal/account_id/${account_id}`)
    }
}

export default ApiJournal;