'use client'
import React, { useState } from 'react'
import { currency } from '@/helper/currency'
import { useParams } from 'next/navigation'
import TableData from '@/app/home/TableData'
import { useGetDetailLedger } from '@/hooks/react-query/useGetDetailLedger'
import { formatTime } from '@/helper/time'
import { DetailLedger } from '@/type'
import Loading from '@/components/templates/Loading'


export default function Page() {
    const params = useParams()
    const head = [
        { title: "COA", type: "string" },
        { title: "Nama AKun", type: "string" },
        { title: "Referensi", type: "string" },
        { title: "Tanggal Transaksi", type: "string" },
        { title: "D", type: "number" },
        { title: "K", type: "number" },
        { title: "Saldo", type: "number" },
    ]
    const listDetailLedger = useGetDetailLedger(params?.id[0] as string, Number(params?.id[1]) as number, true)
    let saldo = 0
    return (
        <>
            <Loading show={listDetailLedger?.isLoading} />
            <TableData title='Detail Buku Besar' noButton head={head} data={listDetailLedger?.data?.data}
            >
                {listDetailLedger?.data?.data[0]?.journals?.map((data: DetailLedger, i: number) => {
                    let group = listDetailLedger?.data?.data[0]?.account_number?.split(".")[0]
                    if (data?.status === 'D' && (+group === 1 || +group === 5)) {
                        saldo += data?.amount
                    } else if (data?.status === 'K' && (+group !== 1 && +group !== 5)) {
                        saldo += data?.amount
                    } else {
                        saldo += -Math.abs(data?.amount)
                    }
                    return <tr key={i} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{listDetailLedger?.data?.data[0]?.account_number}</td>
                        <td className='px-6 py-3'>{listDetailLedger?.data?.data[0]?.name}</td>
                        <td className='px-6 py-3'>{data?.reference}</td>
                        <td className='px-6 py-3'>{formatTime(data?.transaction_date)}</td>
                        <td className='px-6 py-3 text-right'>{data?.status === 'D' ? currency(data?.amount) : "-"}</td>
                        <td className='px-6 py-3 text-right'>{data?.status === 'K' ? currency(data?.amount) : "-"}</td>
                        <td className='px-6 py-3 text-right'>{currency(saldo)}</td>
                    </tr>

                })}
            </TableData >
        </>
    )
}
