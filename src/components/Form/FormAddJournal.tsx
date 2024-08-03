import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import * as yup from "yup"
import Form from '../templates/Form'
import InputForm from '../fields/InputForm'
import useAllAccountOptions from '@/options/useAllAccountOptions'
import SelectForm from '../fields/SelectForm'
import { HiTrash } from 'react-icons/hi2'
import { useGetAccountByUuid } from '@/hooks/react-query/useGetAccountByUuid'
import useAccountByGroupOptions from '@/options/useAccountByGroupOptions'
import useResetForm from '@/hooks/useResetForm'
import TextAreaForm from '../fields/TextAreaForm'
import { AddJournalAttributes } from '@/form-type'

export default function FormAddJournal({ show, close, submit }: { show: boolean, close: () => void, submit: SubmitHandler<AddJournalAttributes> }) {
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                from_account: yup.string().required('akun sumber tidak boleh kosong'),
                transaction_date: yup.string().required('tanggal transaksi tidak boleh kosong'),
                description: yup.string().required("Deskripsi tidak boleh kosong"),
                to_account: yup.array().of(yup.object().shape({
                    account_id: yup.string().required('akun tidak boleh kosong'),
                    amount: yup.string().typeError('jumlah tidak boleh kosong').required('jumlah tidak boleh kosong'),
                }))
            })
        ), defaultValues: { to_account: [{ account_id: '', amount: '0' }] }
    })
    const { fields, append, remove } = useFieldArray({
        control: method.control,
        name: 'to_account'
    })
    const watchFromAccount = method.watch('from_account')
    const getAccountGroup = useGetAccountByUuid(watchFromAccount)

    const group = getAccountGroup?.data?.data?.group_account?.group_account
    const toAccountOptions = useAccountByGroupOptions(group === 1 ? 4 : group === 4 ? 1 : "-", group)
    const fromAccountOptions = useAllAccountOptions(show)

    useResetForm(method, show, null)
    return (
        <div className='w-[30rem] bg-white shadow-xl p-4'>
            <Form submit={method.handleSubmit(submit)}>
                <div className='border-b border-b-slate-500 pb-5 space-y-1'>
                    <SelectForm instanceId='select-akun-options' title='Dari akun' method={method} methodName='from_account' options={fromAccountOptions} />
                    <InputForm id='transaction_date_journal' title='Tanggal Transaksi' method={method} methodName={`transaction_date`} type='date' />
                    <TextAreaForm method={method} methodName='description' title='Deskripsi' />
                </div>
                {fields.map((e, i: number) => (
                    <div key={e.id} className='border-b border-b-slate-400 pb-3'>
                        <SelectForm instanceId={`select-akun-options${i}`} title={`Akun`} method={method} methodName={`to_account[${i}].account_id`} options={toAccountOptions} />
                        <InputForm isConvert id={`input-amount`} title='Jumlah' method={method} methodName={`to_account[${i}].amount`} />
                        <div className='flex justify-end mt-2'>
                            <HiTrash className='bg-red-600 hover:bg-red-700 text-white w-6 h-6 p-1 rounded-lg cursor-pointer' onClick={() => remove(i)} />
                        </div>
                    </div>
                ))}
                <button onClick={() => append({ account_id: '', amount: '0' })} className='bg-sky-600 hover:bg-sky-700 text-white px-8 py-2 rounded-lg'>Tambah</button>
            </Form>
        </div>
    )
}
