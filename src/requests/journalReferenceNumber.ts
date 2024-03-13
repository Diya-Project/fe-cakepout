import ApiJournalRefenceNumber from "@/app/api/services/journalReferenceNumber";
import { JournalReferenceNumberAttributes } from "@/type";
import { AxiosResponse } from "axios";

export async function getAllJournalReferenceNumber(): Promise<AxiosResponse> {
    const res = await ApiJournalRefenceNumber.getAllJournalReferenceNumber();
    return res;
}

export async function getJournalReferenceNumberUuid(uuid: string): Promise<AxiosResponse> {
    const res = await ApiJournalRefenceNumber.getJournalReferenceNumberUuid(uuid)
    return res;
}

export async function getJournalReferenceNumberByYear(year: string): Promise<AxiosResponse> {
    const res = await ApiJournalRefenceNumber.getJournalReferenceNumberByYear(year)
    return res;
}

export async function postJorunalReferenceNumber(data: Omit<JournalReferenceNumberAttributes, 'uuid'>): Promise<AxiosResponse> {
    const res = await ApiJournalRefenceNumber.postJorunalReferenceNumber(data)
    return res;
}

export async function updateJournalReferenceNumber(uuid: string, data: Omit<JournalReferenceNumberAttributes, 'uuid'>): Promise<AxiosResponse> {
    const res = await ApiJournalRefenceNumber.updateJournalReferenceNumber(uuid, data)
    return res;
}

export async function deleteJournalReferenceNumber(uuid:string):Promise<AxiosResponse>{
    const res = await ApiJournalRefenceNumber.deleteJournalReferenceNumber(uuid)
    return res;
}