'use client'
import api from "@/app/api/lib/axios";
import { AddAccountAttributes } from "@/form-type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { FieldValues } from "react-hook-form";

export function useAddAutomation(): UseMutationResult<AxiosResponse<any, any>, Error, FieldValues, unknown> {
    const automation = useMutation({
        mutationKey: ['post-automation'],
        mutationFn: (e: FieldValues) => api.post(`/cakepout/account-automation`, e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return automation
}

