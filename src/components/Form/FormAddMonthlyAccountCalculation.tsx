import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from "yup"
import Modal from '../templates/Modal'
import Form from '../templates/Form'
import SelectForm from '../fields/SelectForm'
import useResetForm from '@/hooks/useResetForm'
import useAccountingYearOptions from '@/options/useAllAccountingYearOptions'
import monthIndex from '../constants/monthIndex'
import useAccountOptions from '@/options/useAllAccountOptions'
import MultiRadio from '../fields/MultiRadio'

export default function FormAddMonthlyAccountCalculation({ show, close, submit }: { show: boolean, close: () => void, submit: SubmitHandler<any> }) {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                month_index: yup.number().required('bulan tidak boleh kosong'),
                accounting_year: yup.string().required('tahun tidak boleh kosong'),
                account_id: yup.string().required('akun tidak boleh kosong'),
                open: yup.string().oneOf(['iya', 'tidak'], 'pilih salah satu').required('status tidak boleh kosong')
            })
        )
    })
    const yearOptions = useAccountingYearOptions(show)
    const accountOptions = useAccountOptions(show)
    useResetForm(method, show, null)
    return (
        <Modal title='Tambah Kalkulasi Jurnal' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <SelectForm instanceId='month_index_calculation' title='Bulan' method={method} methodName='month_index' options={monthIndex} />
                <SelectForm instanceId='year_calculation' title='Tahun' method={method} methodName='accounting_year' options={yearOptions} />
                <SelectForm instanceId='account_calculation' title='Akun' method={method} methodName='account_id' options={accountOptions} />
                <MultiRadio title={['Dibuka', 'Ditutup']} value={['iya', 'tidak']} header='Status' method={method} methodName='open' />
            </Form>
        </Modal>
    )
}
