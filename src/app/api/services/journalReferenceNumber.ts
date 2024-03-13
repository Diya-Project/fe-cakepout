import { JournalReferenceNumberAttributes } from "@/type";
import api from "./http";

const ApiJournalRefenceNumber = {
    getAllJournalReferenceNumber: () => {
        return api.get(`/journal_reference_number`)
    },
    getJournalReferenceNumberUuid: (uuid: string) => {
        return api.get(`/journal_reference_number/${uuid}`)
    },
    getJournalReferenceNumberByYear: (year: string) => {
        return api.get(`/journal_reference_number/year/${year}`)
    },
    postJorunalReferenceNumber: (data: Omit<JournalReferenceNumberAttributes, 'uuid'>) => {
        return api.post(`/journal_reference_number`, data)
    },
    updateJournalReferenceNumber: (uuid: string, data: Omit<JournalReferenceNumberAttributes, 'uuid'>) => {
        return api.put(`/journal_reference_number/${uuid}`, data)
    },
    deleteJournalReferenceNumber: (uuid: string) => {
        return api.delete(`/journalReferenceNumber/${uuid}`)
    }
}

export default ApiJournalRefenceNumber