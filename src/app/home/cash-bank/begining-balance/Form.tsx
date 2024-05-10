import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { UseFormReturn, useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import InputForm from '@/components/fields/InputForm'
import { convertToRupiah, currency, formatRupiah } from '@/helper/currency'
import { BeginingBalanceAttributes, FormSaldoAwal } from '@/form-type'
import { AccountBalancingBeginingAttributes, AccountsBalancing, BalancingAttributes } from '@/type'
import { useAddBeginingBalancing } from '@/hooks/react-query/useAddBalancingBegining'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import useShowMessage, { OutputMessageAttributes } from '@/hooks/useShowMessage'
import { useRouter } from 'next/navigation'
import { UseMutationResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import TextAreaForm from '@/components/fields/TextAreaForm'

function useCalculate(group: Array<BeginingBalanceAttributes>, setState: Dispatch<SetStateAction<number>>): void {
    let result = 0
    for (let i in group) {
        let toNumber = convertToRupiah(group[i].value! as unknown as number)
        result += toNumber
    }
    setState(result)
}

function useReturnToNumber(group: Array<BeginingBalanceAttributes>): Array<BeginingBalanceAttributes> {
    let setValue = []
    for (let i = 0; i < group?.length!; i++) {
        setValue.push({ id: group[i].id, value: convertToRupiah(group[i].value as number) })
    }
    return setValue
}

function ColumnSaldoAwal({ data, method, methodName, readOnly, isSetValue, isValue }: { data: Array<BalancingAttributes>, method: any, methodName: string, readOnly?: boolean, isSetValue?: boolean, isValue?: number | string | undefined }) {
    let indexing = -1
    return (
        <div className='w-[32%]'>
            {data?.map((value: BalancingAttributes, idx: number) => (
                <div key={idx}>
                    <h1 className='text-lg font-montserrat font-semibold text-sky-700 my-2'>{value?.name}</h1>
                    {value?.account?.map((account: AccountsBalancing) => {
                        indexing++
                        method?.setValue(`${methodName}.${indexing}.id`, account?.uuid)
                        return <div key={indexing} className='grid grid-cols-1 gap-5'>
                            <InputForm isConvert key={indexing} id={account.uuid} title={account.name} method={method} methodName={`${methodName}.${indexing}.value`} read={readOnly} isSetValue={isSetValue} setValue={isValue} />
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.data?.status, showMessage.show])
}

export default function FormBeginingBalance({ data, loading }: { data: AccountBalancingBeginingAttributes, loading: boolean }) {
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
                    value: yup.string().typeError("jumlah tidak boleh kosong").required()
                })),
                kewajiban: yup.array().of(yup.object().shape({
                    id: yup.string().required("akun tidak boleh kosong"),
                    value: yup.string().typeError("jumlah tidak boleh kosong").required()
                })),
                modal: yup.array().of(yup.object().shape({
                    id: yup.string().required("akun tidak boleh kosong"),
                    value: yup.string().typeError("jumlah tidak boleh kosong").required()
                })),
                account_balancing: yup.string(),
                description: yup.string().required("Deskripsi tidak boleh kosong"),

            })
        ),
        defaultValues: { account_balancing: '0' }
    })
    const addBeginingBalance = useAddBeginingBalancing()
    const useSubmit = (value: FormSaldoAwal) => {
        addBeginingBalance.mutate({ account_balancing: value.account_balancing, description: value.description, harta: useReturnToNumber(value.harta!), kewajiban: useReturnToNumber(value.kewajiban!), modal: useReturnToNumber(value.modal!) })
    }
    const Calculate = () => {
        const values = method.getValues() as FormSaldoAwal
        useCalculate(values.harta!, setHartaResult)
        useCalculate(values.kewajiban!, setKewajibanResult)
        setFinalBalance(hartaResult - kewajibanResult - modalResult)
    }
    const showMessage = useShowMessage(addBeginingBalance)

    UseMoveToJournal(addBeginingBalance, showMessage)
    useEffect(()=>{
        if(hartaResult && kewajibanResult){
            setModalResult(hartaResult-kewajibanResult)
        }
    },[hartaResult,kewajibanResult])
    return (
        <>
            <Loading show={addBeginingBalance.isPending} />
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <form onSubmit={method.handleSubmit(useSubmit)}>
                <div className='flex gap-3'>
                    <ColumnSaldoAwal data={data?.harta} method={method} methodName='harta' />
                    <div className='w-[2px] bg-slate-700'></div>
                    <ColumnSaldoAwal data={data?.kewajiban} method={method} methodName='kewajiban' />
                    <div className='w-[2px] bg-slate-700'></div>
                    <ColumnSaldoAwal data={data?.modal} method={method} methodName='modal' readOnly isSetValue isValue={hartaResult - kewajibanResult} />
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <ColumnResult title='Harta' value={hartaResult} />
                    <ColumnResult title='Kewajiban' value={kewajibanResult} />
                    <ColumnResult title='Modal' value={modalResult}>
                        {/* <div className='flex gap-1'>
                            <button type='button' onClick={() => {
                                setShowBalance(!showBalance)
                                method.setValue("account_balancing", '0')
                            }} className={`text-white rounded-md px-2 font-montserrat bg-sky-600 hover:bg-sky-700 hover:text-white`}>{showBalance ? "-" : "+"}</button>
                            <h1>Balancing</h1>
                        </div>
                        {showBalance ?
                            <InputForm id='balancing-field' title='' method={method} methodName='account_balancing' />
                            :
                            <></>
                        } */}
                    </ColumnResult>
                </div>
                <ColumnResult title='Balancing' value={finalbalance < 0 ? finalbalance * -1 : finalbalance} minus={finalbalance < 0 ? true : false} />
                <div className='flex'>
                    <button type='button' onClick={Calculate} className={`text-white my-1 rounded-md px-5 py-2 font-montserrat bg-sky-600 hover:bg-sky-700 hover:text-white`}>Kalkulasikan</button>
                </div>
                <TextAreaForm method={method} methodName='description' title='Deskripsi' />
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
