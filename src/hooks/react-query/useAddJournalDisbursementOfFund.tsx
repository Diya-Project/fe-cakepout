'use client'
import api from "@/app/api/lib/axios";
import { AddJournalAttributes, AddJournalDisbursementOfFundAttributes } from "@/form-type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useAddJournalDisbursementOfFund(): UseMutationResult<AxiosResponse<any, any>, Error, AddJournalDisbursementOfFundAttributes, unknown> {
    const account = useMutation({
        mutationKey: ['post_journal_disbursement_of_fund'],
        mutationFn: (data: AddJournalDisbursementOfFundAttributes) => api.post(`/cakepout/journal/disbursement-of-fund`, data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}

