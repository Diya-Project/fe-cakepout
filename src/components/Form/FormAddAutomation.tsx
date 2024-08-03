'use client'
import React from 'react'
import Modal from '../templates/Modal'
import Form from '../templates/Form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AddAutomationAttributes } from '@/form-type'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import InputForm from '../fields/InputForm'
import SelectForm from '../fields/SelectForm'
import useAllAccountOptions from '@/options/useAllAccountOptions'
import useAccountByGroupOptions from '@/options/useAccountByGroupOptions'
import { useGetAccountByUuid } from '@/hooks/react-query/useGetAccountByUuid'
import useResetForm from '@/hooks/useResetForm'


type FormAddAutomationAttributes = { show: boolean, close: () => void, submit: SubmitHandler<AddAutomationAttributes> }


export default function FormAddAutomation({ submit, show, close }: FormAddAutomationAttributes) {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                uuid_account_from: yup.string().nullable(),
                uuid_account_to: yup.string().nullable(),
                role: yup.string().required("Tidak boleh kosong")
            })
        )
    })
    const watchFromAccount = method.watch('uuid_account_from')
    const getAccountGroup = useGetAccountByUuid(watchFromAccount!)

    const fromAccountOptions = useAllAccountOptions(show)
    const group = getAccountGroup?.data?.data?.group_account?.group_account
    const toAccountOptions = useAccountByGroupOptions(group === 1 ? 4 : group === 4 ? 1 : "-", group)

    useResetForm(method, show, null)
    return (
        <Modal title='Tambah Automasi' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <SelectForm instanceId='select-from-account' title='Dari Akun' method={method} methodName='uuid_account_from' options={fromAccountOptions} />
                <SelectForm instanceId='select-to-account' title='Ke Akun' method={method} methodName='uuid_acount_to' options={toAccountOptions} />
                <InputForm id='role' title='Role' method={method} methodName='role' />
            </Form>
        </Modal>
    )
}
