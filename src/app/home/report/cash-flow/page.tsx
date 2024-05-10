'use client'
import Input from '@/components/fields/Input'
import { currency } from '@/helper/currency'
import { useGetReportIncomeStatement } from '@/hooks/react-query/useGetReportIncomeStatement'
import React, { useState } from 'react'

const ColumnGroup = ({ data, title, total }: { data: any, title: string, total: number }) => {
    return (
        <div>
            <h1 className='font-montserrat text-xl text-sky-800 font-semibold mb-3'>{title}</h1>
            <div>
                <div className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto flex justify-between">
                    <h1 className='w-[10%] text-sm font-semibold'>COA</h1>
                    <h1 className='w-[30%] text-sm font-semibold'>AKUN</h1>
                    <h1 className='w-[30%] text-sm font-semibold'>Nilai</h1>
                </div>
                {data?.map((account: any, idx: number) => (
                    <div key={idx} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto flex justify-between">
                        <h1 className='w-[10%] text-sm'>{account.account_number}</h1>
                        <h1 className='w-[30%] text-sm'>{account.name}</h1>
                        <h1 className='w-[30%] text-sm'>{account.total ? currency(account.total) : currency(0)}</h1>
                    </div>
                ))}
                <div className=''>
                    <div className='w-[100%] h-[2px] bg-slate-600 my-1'></div>
                    <h1 className='text-right'>Total Akhir : {total ? currency(total) : currency(0)}</h1>
                </div>
            </div>
        </div>
    )
}


export default function Page() {
    const [fromDate, setFromDate] = useState('')
    const [toDate, settoDate] = useState('')
    const cashFlow = useGetReportIncomeStatement(fromDate, toDate)
    return (
        <div className='flex justify-center'>
            <div className='w-[40vw] p-4 bg-white shadow-xl'>
                <Input id='from-date-cash-flow' title='Dari' value={fromDate} setValue={(key) => setFromDate(key.target.value)} type='date' />
                <Input id='to-date-cash-flow' title='Sampai' value={toDate} setValue={(key) => settoDate(key.target.value)} type='date' />
                <div className='w-[100%] h-[2px] bg-slate-600 my-5'></div>
                <ColumnGroup data={cashFlow?.data?.data?.income} title='Pendapatan' total={cashFlow?.data?.data?.totalIncome} />
                <ColumnGroup data={cashFlow?.data?.data?.cost} title='Biaya' total={cashFlow?.data?.data?.totalCost} />
                <div className=''>
                    <div className='w-[100%] h-[2px] bg-slate-600 my-1'></div>
                    <div className='flex gap-7 justify-end'>
                        <h1 className='text-right'>Total : {cashFlow?.data?.data?.incomeStatement ? currency(cashFlow?.data?.data?.incomeStatement) : currency(0)}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
