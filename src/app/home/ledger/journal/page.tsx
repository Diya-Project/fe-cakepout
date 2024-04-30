'use client'
import React, { useState } from 'react'
import TableData from '../../TableData'
import { useGetAllJournal } from '@/hooks/react-query/useGetAllJournal'
import Pagination from '@/components/templates/Pagination'
import { JournalAttributes } from '@/type'
import { currency } from '@/helper/currency'
import Loading from '@/components/templates/Loading'
import { formatTime } from '@/helper/time'
import Input from '@/components/fields/Input'
import useGeneratePDF from './Pdf'

export default function Page() {
    const head = ['COA', 'Nama Akun', 'Tanggal Transaksi', 'Referensi', 'D', 'K', 'Deskripsi']
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(50)
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")

    const listJournal = useGetAllJournal(true, page !== null ? page : 1, size !== null ? size : 1, fromDate, toDate)


    return (
        <>
            <TableData title='Jurnal' data={listJournal?.data?.data?.data} head={head} noButton
                pages={<Pagination page={page} allPage={listJournal?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(data) => {
                    setSize(parseInt(data.value as string))
                    setPage(1)
                }} />}
                calculate={
                    <div className='bg-slate-800 w-[100%] h-[2px] flex justify-end gap-10 mt-5'>
                        <h1 className='font-montserrat my-3 font-semibold text-slate-700'>Debit : {listJournal?.data?.data?.debit ? currency(listJournal?.data?.data?.debit) : currency(0)}</h1>
                        <h1 className='font-montserrat my-3 font-semibold text-slate-700'>Kredit : {listJournal?.data?.data?.kredit ? currency(listJournal?.data?.data?.kredit) : currency(0)}</h1>
                    </div>
                }
                filters={
                    <div className='flex gap-3'>
                        <Input id='dari-tanggal-journal' title="Dari" type="date" value={fromDate} setValue={(e) => setFromDate(e.target.value)} />
                        <Input id='sampai-tanggal-journal' title="Sampai" type="date" value={toDate} setValue={(e) => setToDate(e.target.value)} />
                    </div>
                }
            >
                {listJournal?.data?.data?.data?.map((e: JournalAttributes, i: number) => (
                    <tr key={i} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{e.account?.account_number}</td>
                        <td className='px-6 py-3'>{e.account?.name}</td>
                        <td className='px-6 py-3'>{e.transaction_date ? formatTime(e.transaction_date) : '-'}</td>
                        <td className='px-6 py-3'>{e.reference}</td>
                        <td className='px-6 py-3'>{e.status === 'D' ? currency(e.amount) : "-"}</td>
                        <td className='px-6 py-3'>{e.status === 'K' ? currency(e.amount) : "-"}</td>
                        <td className='px-6 py-3'>{i === 0 || e.reference !== listJournal?.data?.data?.data[i - 1]?.reference ? e.description : "-"}</td>
                    </tr>
                ))}
            </TableData >
            <Loading show={listJournal.isLoading} />
        </>
    )
}
