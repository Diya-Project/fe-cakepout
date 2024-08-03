'use client'
import React, { useState } from 'react'
import TableData from '../../TableData'
import { useGetAllLedger } from '@/hooks/react-query/useGetAllLedger'
import { LedgerTable, SelectAttributes } from '@/type'
import { currency } from '@/helper/currency'
import { TbListDetails } from "react-icons/tb";
import { useRouter } from 'next/navigation'
import Selector from '@/components/fields/Selector'
import monthIndex from '@/components/constants/monthIndex'


export default function Page() {
  const head = [
    { title: "COA", type: "string" },
    { title: "Nama AKun", type: "string" },
    { title: "Total", type: "number" },
  ]
  const navigate = useRouter()
  const [oneMonth, setOneMonth] = useState<SelectAttributes>({ value: null, label: '' })
  const listLedger = useGetAllLedger(oneMonth?.value as number, true)
  return (
    <>
      <TableData title='Buku Besar' noButton head={head} data={listLedger?.data?.data}
        filters={<div className='w-72'>
          <Selector instanceId='select-month' title='Pilih Bulan' options={monthIndex} onChange={(val) => setOneMonth(val)} value={oneMonth} />
        </div>}
      >
        {listLedger?.data?.data?.map((data: LedgerTable, i: number) => (
          <tr key={i} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
            <td className='px-6 py-3 text-sky-600 cursor-pointer' onClick={() => navigate.push(`/home/ledger/book/${data?.account?.uuid}/${Number(oneMonth?.value) + 1}`)}>{data.account?.account_number}</td>
            <td className='px-6 py-3'>{data.account?.name}</td>
            <td className='px-6 py-3 flex justify-end'>{data.total ? currency(data.total) : currency(0)}</td>
          </tr>
        ))}
      </TableData>
    </>
  )
}
