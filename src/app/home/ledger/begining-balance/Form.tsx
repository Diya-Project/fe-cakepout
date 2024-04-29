import React, { ReactNode, useEffect, useState } from 'react'
import { UseFormReturn, useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import InputForm from '@/components/fields/InputForm'
import { currency } from '@/helper/currency'
import { BeginingBalanceAttributes, FormSaldoAwal } from '@/form-type'
import { AccountBalancingBeginingAttributes, AccountsBalancing, BalancingAttributes } from '@/type'
import { useAddBeginingBalancing } from '@/hooks/react-query/useAddBalancingBegining'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import useShowMessage, { OutputMessageAttributes } from '@/hooks/useShowMessage'
import { useRouter } from 'next/navigation'
import { UseMutationResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

function useCalculate(group: Array<BeginingBalanceAttributes>): number {
    let result = 0
    for (let i in group) {
        result += parseInt(group[i].value! as unknown as string)
    }
    return result
}

function ColumnSaldoAwal({ data, indexing, method, methodName }: { data: Array<BalancingAttributes>, indexing: number, method: any, methodName: string }) {
    return (
        <div className='w-[32%]'>
            {data?.map((value: BalancingAttributes, idx: number) => (
                <div key={idx}>
                    <h1 className='text-lg font-montserrat font-semibold text-sky-700 my-2'>{value?.name}</h1>
                    {value?.accounts?.map((account: AccountsBalancing) => {
                        indexing++
                        method?.setValue(`${methodName}.${indexing}.id`, account?.uuid)
                        return <div key={indexing} className='grid grid-cols-1 gap-5'>
                            <InputForm type='number' key={indexing} id={account.uuid} title={account.name} method={method} methodName={`${methodName}.${indexing}.value`} />
                        </div>
                    })}
                </div>
            ))}
        </div>
    )
}

function ColumnResult({ title, value, children, minus }: { title: string, value: number, children?: ReactNode, minus?: boolean }) {
    return (
        <div className='w-full mt-3 pt-2 border-t border-t-slate-700'>
            <h1 className='font-montserrat font-semibold text-slate-800'>{title} : {value as number ? minus ? `(${currency(value)})` : currency(value) : 0}</h1>
            {children}
        </div>
    )
}

function UseMoveToJournal(data: UseMutationResult<AxiosResponse<any, any>, Error, FormSaldoAwal, unknown>, showMessage: OutputMessageAttributes) {
    const navigate = useRouter()
    useEffect(() => {
        if (data.data?.status === 200 && !showMessage.show) {
            navigate.push('/home/ledger/journal')
        }
    }, [data.data?.status, showMessage.show])
}

export default function FormBeginingBalance({ data, loading }: { data: AccountBalancingBeginingAttributes, loading: boolean }) {
    let indexHarta = -1
    let indexModal = -1
    let indexKewajiban = -1
    const [hartaResult, setHartaResult] = useState(0)
    const [kewajibanResult, setKewajibanResult] = useState(0)
    const [modalResult, setModalResult] = useState(0)
    const [finalbalance, setFinalBalance] = useState(0)
    const [showBalance, setShowBalance] = useState(false)
    const method = useForm({
        mode: "all",
        resolver: yupResolver(
            yup.object().shape({
                harta: yup.array().of(yup.object().shape({
                    id: yup.string().required("akun tidak boleh kosong"),
                    value: yup.number().typeError("jumlah tidak boleh kosong").required()
                })),
                kewajiban: yup.array().of(yup.object().shape({
                    id: yup.string().required("akun tidak boleh kosong"),
                    value: yup.number().typeError("jumlah tidak boleh kosong").required()
                })),
                modal: yup.array().of(yup.object().shape({
                    id: yup.string().required("akun tidak boleh kosong"),
                    value: yup.number().typeError("jumlah tidak boleh kosong").required()
                })),
                account_balancing: yup.number()
            })
        ),
        defaultValues: { account_balancing: 0 }
    })
    const addBeginingBalance = useAddBeginingBalancing()
    const submit = (value: FormSaldoAwal) => {
        addBeginingBalance.mutate(value)
    }
    const calculate = () => {
        const values = method.getValues() as FormSaldoAwal
        console.log(values)
        setHartaResult(useCalculate(values.harta!) || 0)
        setKewajibanResult(useCalculate(values.kewajiban!) || 0)
        setModalResult(useCalculate(values.modal!) || 0)
        setFinalBalance(useCalculate(values.harta!) - useCalculate(values.kewajiban!) - useCalculate(values.modal!))
    }
    const showMessage = useShowMessage(addBeginingBalance)

    UseMoveToJournal(addBeginingBalance, showMessage)
    return (
        <>
            <Loading show={addBeginingBalance.isPending} />
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <form onSubmit={method.handleSubmit(submit)}>
                <div className='flex gap-3'>
                    <ColumnSaldoAwal data={data?.harta} indexing={indexHarta} method={method} methodName='harta' />
                    <div className='w-[2px] bg-slate-700'></div>
                    <ColumnSaldoAwal data={data?.kewajiban} indexing={indexKewajiban} method={method} methodName='kewajiban' />
                    <div className='w-[2px] bg-slate-700'></div>
                    <ColumnSaldoAwal data={data?.modal} indexing={indexModal} method={method} methodName='modal' />
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <ColumnResult title='Harta' value={hartaResult} />
                    <ColumnResult title='Kewajiban' value={kewajibanResult} />
                    <ColumnResult title='Modal' value={modalResult}>
                        <div className='flex gap-1'>
                            <button type='button' onClick={() => {
                                setShowBalance(!showBalance)
                                method.setValue("account_balancing", 0)
                            }} className={`text-white rounded-md px-2 font-montserrat bg-sky-600 hover:bg-sky-700 hover:text-white`}>{showBalance ? "-" : "+"}</button>
                            <h1>Balancing</h1>
                        </div>
                        {showBalance ?
                            <InputForm id='balancing-field' title='' method={method} methodName='account_balancing' />
                            :
                            <></>
                        }
                    </ColumnResult>
                </div>
                <ColumnResult title='Balancing' value={finalbalance < 0 ? finalbalance * -1 : finalbalance} minus={finalbalance < 0 ? true : false} />
                <div className='flex'>
                    <button type='button' onClick={calculate} className={`text-white my-1 rounded-md px-5 py-2 font-montserrat bg-sky-600 hover:bg-sky-700 hover:text-white`}>Kalkulasikan</button>
                </div>
                <div className='flex justify-end'>
                    {finalbalance === 0 && hartaResult !== 0 && kewajibanResult !== 0 && modalResult !== 0 ?
                        <button type='submit' className={`text-white my-1 rounded-md px-5 py-2 font-montserrat bg-sky-600 hover:bg-sky-700 hover:text-white`}>Simpan</button>
                        :
                        <h1 className={`text-slate-800 my-1 rounded-md px-5 py-2 font-montserrat bg-slate-300 cursor-pointer`}>Saldo awal harus balance!</h1>
                    }
                </div>
            </form >
        </>
    )
}
