import React, { ReactNode } from 'react'
import Modal from '../templates/Modal'
import Form from '../templates/Form'
import InputForm from '../fields/InputForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from "yup"
import useResetForm from '@/hooks/useResetForm'

type FormEditeAccountAttributes = { show: boolean, close: () => void, submit: SubmitHandler<EditAccountAttributes>, oneAccount: { name: string } }


export default function FormEditAccount({ submit, show, close, oneAccount }: FormEditeAccountAttributes): ReactNode {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                name: yup.string().required(),

            })
        )
    })
    useResetForm(method, show, oneAccount)
    return (
        <Modal title='Edit Akun' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <InputForm id="input-edit-name-account" title='Nama' method={method} methodName='name' />
            </Form>
        </Modal>
    )
}
