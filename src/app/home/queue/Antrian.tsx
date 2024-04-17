'use client'
import Header from '@/components/custom/Header'
import Loading from '@/components/templates/Loading'
import { useGetDisbursementOfFundByStatus } from '@/hooks/react-query/useGetDisbursementOfFundByStatus'
import { useGetDisbursementOfFundByWithdraw } from '@/hooks/react-query/useGetDisbursementOfFundByWithdraw'
import { DisbursementOfFundAttributes } from '@/type'
import React, { ReactNode, useState } from 'react'

type AntrianAttributes = {
    clickDisbursementOfFund: (e: DisbursementOfFundAttributes) => void;
    render: boolean;
    status: number;
    approve?: number;
}

function ListCard({ click, value, activeValue }: { click: () => void, value: DisbursementOfFundAttributes, activeValue: string }): ReactNode {
    return (
        <div onClick={click} className={`${value.uuid === activeValue ? 'bg-sky-600 text-white' : 'bg-white'} border p-3 cursor-pointer active:bg-sky-600 hover:bg-sky-600 text-slate-800 hover:text-white rounded-md shadow-md`}>
            <h1 className='font-montserrat font-semibold'>{value.rincian_kegiatan?.uraian}</h1>
        </div>
    )
}

export default function Antrian({ clickDisbursementOfFund, render, status, approve }: AntrianAttributes): ReactNode {
    const disbursementOfFund = approve ? useGetDisbursementOfFundByWithdraw(approve, render) : useGetDisbursementOfFundByStatus(status, render)
    const [activeColor, setActiveColor] = useState<string>('')
    return (
        <div className='md:w-[30%] w-[100%] h-[84vh] relative bg-white p-2'>
            <Header title='Antrian Anggaran' />
            <div className='h-[90%] py-3 overflow-y-auto scrollbar-hide flex flex-col gap-2'>
                {disbursementOfFund?.data && disbursementOfFund.data?.data?.length > 0 ?
                    disbursementOfFund?.data?.data?.map((e: DisbursementOfFundAttributes, i: number) => (
                        <ListCard key={i} value={e} activeValue={activeColor} click={() => {
                            clickDisbursementOfFund(e)
                            setActiveColor(e.uuid)
                        }} />
                    ))
                    :
                    <h1 className='text-center font-montserrat font-semibold text-slate-800 my-10 text-xl'>- Tidak ada antrian -</h1>
                }
            </div>
            <Loading show={disbursementOfFund?.isLoading} />
        </div>
    )
}
