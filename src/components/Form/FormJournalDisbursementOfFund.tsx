import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import * as yup from "yup"
import Modal from '../templates/Modal'
import Form from '../templates/Form'
import InputForm from '../fields/InputForm'
import useAllAccountOptions from '@/options/useAllAccountOptions'
import SelectForm from '../fields/SelectForm'
import { HiTrash } from 'react-icons/hi2'
import useAccountByGroupOptions from '@/options/useAccountByGroupOptions'
import { useGetAccountByActivity } from '@/hooks/react-query/useGetAccountByActivity'

export default function FormJournalDisbursementOfFund({ show, close, submit, fromAccount }: { show: boolean, close: () => void, submit: SubmitHandler<AddJournalAttributes>, fromAccount: string }) {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                from_account: yup.string().required('akun sumber tidak boleh kosong'),
                to_account: yup.array().of(yup.object().shape({
                    account_id: yup.string().required('akun tidak boleh kosong'),
                    amount: yup.number().typeError('jumlah tidak boleh kosong').required('jumlah tidak boleh kosong'),
                    transaction_date: yup.string().required('tanggal transaksi tidak boleh kosong'),
                }))
            })
        ), defaultValues: { to_account: [{ account_id: '', amount: 0 }] }
    })
    const { fields, append, remove } = useFieldArray({
        control: method.control,
        name: 'to_account'
    })
    const getAccountGroup = useGetAccountByActivity(fromAccount)

    const fromAccountOptions = useAllAccountOptions(show)
    const toAccountOptions = useAccountByGroupOptions(getAccountGroup?.data?.data?.group_account?.group_account === 1 ? 4 : 1, show)

    useEffect(() => {
        if (fromAccount !== null && fromAccount !== '' && getAccountGroup.data?.data?.length > 0) {
            method.reset({ from_account: getAccountGroup.data?.data[0]?.uuid })
        }
    }, [fromAccount, getAccountGroup?.data?.data])
    return (
        <Modal title='Tambah Jurnal' show={show} close={close} scroll>
            <Form submit={method.handleSubmit(submit)}>
                <div className='border-b border-b-slate-500 pb-5 space-y-1'>
                    <SelectForm instanceId='select-akun-options' title='Dari akun' method={method} methodName='from_account' options={fromAccountOptions} disabled />
                </div>
                {fields.map((e, i: number) => (
                    <div key={e.id} className='border-b border-b-slate-400 pb-3'>
                        <SelectForm instanceId={`select-akun-options${i}`} title={`Akun (${i + 1})`} method={method} methodName={`to_account[${i}].account_id`} options={toAccountOptions} />
                        <InputForm id={`input-amount${i}`} title='Jumlah' type='number' method={method} methodName={`to_account[${i}].amount`} />
                        <InputForm id='transaction_date_journal' title='Tanggal Transaksi' method={method} methodName={`to_account[${i}].transaction_date`} type='datetime-local' />
                        <div className='flex justify-end mt-2'>
                            <HiTrash className='bg-red-600 hover:bg-red-700 text-white w-6 h-6 p-1 rounded-lg cursor-pointer' onClick={() => remove(i)} />
                        </div>
                    </div>
                ))}
                <button onClick={() => append({ account_id: '', amount: 0, transaction_date: '' })} className='bg-sky-600 hover:bg-sky-700 text-white px-8 py-2 rounded-lg'>Tambah</button>
            </Form>
        </Modal>
    )
}
