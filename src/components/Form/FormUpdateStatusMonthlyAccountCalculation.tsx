import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from "yup"
import Modal from '../templates/Modal'
import Form from '../templates/Form'
import useResetForm from '@/hooks/useResetForm'
import MultiRadio from '../fields/MultiRadio'

export default function FormUpdateStatusMonthlyAccountCalculation({ show, close, submit,oneCalculation }: { show: boolean, close: () => void, submit: SubmitHandler<{ open: boolean | string }>,oneCalculation:{open:boolean|string} }) {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                open: yup.string().oneOf(['iya', 'tidak'], 'pilih salah satu').required('status tidak boleh kosong')
            })
        )
    })
    useResetForm(method, show,oneCalculation)
    return (
        <Modal title='Edit Status Kalkulasi Jurnal' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <MultiRadio title={['Dibuka', 'Ditutup']} value={['iya', 'tidak']} header='Status' method={method} methodName='open' />
            </Form>
        </Modal>
    )
}
