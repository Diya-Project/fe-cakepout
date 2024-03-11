'use client'
import ListCard from '@/components/templates/ListCard'
import Loading from '@/components/templates/Loading'
import { useGetDisbursementOfFundByStatus } from '@/queries/dibursementOfFund'
import { DisbursementOfFundAttributes } from '@/type'
import React from 'react'

type AntrianAttributes = {
    clickDisbursementOfFund: (e: DisbursementOfFundAttributes) => void;
    render: boolean;
    status: number;
}

export default function Antrian({ clickDisbursementOfFund, render, status }: AntrianAttributes) {
    const disbursementOfFund = useGetDisbursementOfFundByStatus(status, render)
    return (
        <>
            <ListCard title='Antrian Anggaran'>
                {disbursementOfFund?.data && disbursementOfFund?.data?.data?.map((e: DisbursementOfFundAttributes, i: number) => (
                    <div key={i} onClick={() => clickDisbursementOfFund(e)} className='border p-3 cursor-pointer hover:bg-sky-600 text-slate-800 hover:text-white rounded-md shadow-md'>
                        <h1 className='font-montserrat font-semibold'>{e.rincian_kegiatan?.uraian}</h1>
                    </div>
                ))}
                <Loading show={disbursementOfFund?.isLoading} />
            </ListCard>
        </>
    )
}
