import ApiJournal from "@/app/api/fetch/journal";
import { AxiosResponse } from "axios";

export async function getAllJournal(): Promise<AxiosResponse> {
    const res = await ApiJournal.getAllJournal()
    return res;
}

export async function getJournalByUuid(uuid: string): Promise<AxiosResponse> {
    const res = await ApiJournal.getJournalByUuid(uuid)
    return res;
}

export async function getJournalByAccountId(accountId: string): Promise<AxiosResponse> {
    const res = await ApiJournal.getJournalByAccountId(accountId)
    return res;
}

export async function getJournalByTransactionDate(start: string, end: string): Promise<AxiosResponse> {
    const res = await ApiJournal.getJournalByTransactionDate(start, end)
    return res;
}

export async function getJournalByStatus(status: string): Promise<AxiosResponse> {
    const res = await ApiJournal.getJournalByStatus(status)
    return res;
}

export async function getJournalByYear(year: string): Promise<AxiosResponse> {
    const res = await ApiJournal.getJournalByYear(year);
    return res;
}
