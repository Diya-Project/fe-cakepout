'use client'
import monthIndex from '@/components/constants/monthIndex'
import Selector from '@/components/fields/Selector'
import Loading from '@/components/templates/Loading'
import { currency } from '@/helper/currency'
import { useGetReportCashFlow } from '@/hooks/react-query/useGetReportCashFlow'
import { SelectAttributes } from '@/type'
import React, { useState } from 'react'

const ColumnGroup = ({ data, title }: { data: any, title: string }) => {
    let finalAmount = 0
    return (
        <div>
            <h1 className='font-montserrat text-xl text-sky-800 font-semibold mb-3'>{title}</h1>
            <div>
                <div className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto flex justify-between">
                    <h1 className='w-[10%] text-sm font-semibold'>COA</h1>
                    <h1 className='w-[30%] text-sm font-semibold'>AKUN</h1>
                    <h1 className='w-[30%] text-sm font-semibold'>Nilai</h1>
                </div>
                {data?.map((account: any, idx: number) => {
                    finalAmount += account?.total
                    return <div key={idx} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto flex justify-between">
                        <h1 className='w-[10%] text-sm'>{account.account_number}</h1>
                        <h1 className='w-[30%] text-sm'>{account.name}</h1>
                        <h1 className='w-[30%] text-sm'>{account.total ? currency(account.total) : currency(0)}</h1>
                    </div>
                })}
            </div>
            <div className=''>
                <div className='w-[100%] h-[2px] bg-slate-600 my-1'></div>
                <h1 className='text-right'>Total : {finalAmount ? currency(finalAmount) : currency(0)}</h1>
            </div>
        </div>
    )
}

export default function Page() {
    const [month, setMonth] = useState<SelectAttributes>({ value: null, label: '' })
    const report = useGetReportCashFlow(month.value as number + 1)
    const reportCashFlow = report?.data?.data
    const loadingReport = report?.isLoading
    return (
        <>
            <Loading show={loadingReport} />
            <div className='flex justify-center'>
                <div className='w-[40vw] p-4 bg-white shadow-xl'>
                    <Selector instanceId='select-month-report' title='Pilih Bulan' options={monthIndex} value={month} onChange={(val) => setMonth(val)} />
                    <div className='w-[100%] h-[2px] bg-slate-600 my-5'></div>
                    {month?.value ?
                        <>
                            <ColumnGroup data={reportCashFlow?.operational?.income} title='Pendapatan Operasional' />
                            <ColumnGroup data={reportCashFlow?.operational?.cost} title='Biaya Operasional' />
                            <ColumnGroup data={reportCashFlow?.investation} title='Investasi' />
                            <ColumnGroup data={reportCashFlow?.funding} title='Pendanaan' />
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}
