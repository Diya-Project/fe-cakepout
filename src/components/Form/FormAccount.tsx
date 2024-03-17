import InputForm from '@/components/fields/InputForm'
import SelectForm from '@/components/fields/SelectForm'
import { usePtkOptions } from '@/options/ptkOptions'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import Form from '../templates/Form'
import Modal from '../templates/Modal'
import useDetailOfActivityOptions from '@/options/activityOptions'



export default function FormAccountAction({ submit, show, close }: { show: boolean, close: () => void, submit: (e: any) => void }):ReactNode {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                name: yup.string().required(),
                group_account: yup.number().typeError('group_account field required').min(0, 'min 0').required(),
                group_account_label: yup.number().typeError('group_account_label field required').min(0, 'min 0').required(),
                account_number: yup.string().required(),
                activity_id: yup.string().required()

            })
        )
    })
    const detailOfActiviyOptions = useDetailOfActivityOptions()
    return (
        <Modal title='Tambah Akun' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <InputForm title='Nama' method={method} methodName='name' />
                <InputForm type='number' title='Grup Akun' method={method} methodName='group_account' />
                <InputForm type='number' title='Grup Akun Label' method={method} methodName='group_account_label' />
                <InputForm title='Nomor Akun' method={method} methodName='account_number' />
                <SelectForm instanceId='select-detailOfActivity' title='Kegiatan' method={method} methodName='activity_id' options={detailOfActiviyOptions} />
            </Form>
        </Modal>
    )
}

