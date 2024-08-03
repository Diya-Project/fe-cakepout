'use client'
import api from "@/app/api/lib/axios";
import { EditAccountAttributes } from "@/form-type";
import { AccountAttributes } from "@/type";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";



export function useUpdateAccount(): UseMutationResult<AxiosResponse<any, any>, Error, {
    uuid: string;
    data: EditAccountAttributes;
}, unknown> {
    const account = useMutation({
        mutationKey: ['update_account'],
        mutationFn: (e: { uuid: string, data: EditAccountAttributes }) => api.put(`/cakepout/account/${e.uuid}`, e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return account
}
