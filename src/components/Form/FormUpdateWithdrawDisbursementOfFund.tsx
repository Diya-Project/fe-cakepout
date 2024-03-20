import InputForm from '@/components/fields/InputForm'
import SelectForm from '@/components/fields/SelectForm'
import { usePtkOptions } from '@/options/ptkOptions'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import Form from '../templates/Form'
import Modal from '../templates/Modal'

export default function FormUpdateWithdrawDisbursementOfFund({ submit, show, close }: { show: boolean, close: () => void, submit: (e: any) => void }):ReactNode {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                ptk_id: yup.string().nullable(),
                receipient: yup.string().when('ptk_id', (ptk_id, fields) => ptk_id[0] === null ? fields.required('receipient cannot empty') : fields.nullable())
            })
        ), defaultValues: { ptk_id: null, receipient: '' }
    })
    const ptkOptions = usePtkOptions()
    return (
        <Modal title='Update Withdraw Anggaran' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <SelectForm instanceId='select_ptk' title='Penerima' method={method} methodName='ptk_id' options={ptkOptions} />
                <InputForm title='Pihak Ketiga (di isi jika yang menerima selain ptk)' method={method} methodName='receipient' />
            </Form>
        </Modal>
    )
}

