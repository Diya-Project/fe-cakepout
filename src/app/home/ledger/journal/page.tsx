'use client'
import React, { useState } from 'react'
import TableData from '../../TableData'
import { useGetAllJournal } from '@/hooks/react-query/useGetAllJournal'
import Pagination from '@/components/templates/Pagination'
import { JournalAttributes } from '@/type'
import { currency } from '@/helper/currency'
import FormAddJournal from '@/components/Form/FormAddJournal'
import { useAddJournal } from '@/hooks/react-query/useAddJournal'
import useShowMessage from '@/hooks/useShowMessage'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import { formatTime } from '@/helper/time'
import Input from '@/components/fields/Input'
import { AddJournalAttributes } from '@/form-type'

export default function Page() {
    const head = ['Nomor Akun', 'Nama Akun', 'Tanggal Transaksi', 'Referensi', 'D', 'K']
    const [showFormAddJournal, setShowFormAddJournal] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")

    const saveJournal = useAddJournal()

    const showMessage = useShowMessage(saveJournal)
    const listJournal = useGetAllJournal(showMessage?.show, page !== null ? page : 1, size !== null ? size : 1, fromDate, toDate)

    const addJournal = (data: AddJournalAttributes) => {
        saveJournal.mutate(data)
        setShowFormAddJournal(false)
    }
    return (
        <>
            <TableData title='Jurnal' clickAdd={() => setShowFormAddJournal(true)} data={listJournal?.data?.data?.data} head={head}
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
                    </tr>
                ))}
            </TableData >
            <Message show={showMessage.show} message={showMessage.message} succes={showMessage.status} />
            <Loading show={listJournal.isLoading} />
            <FormAddJournal show={showFormAddJournal} close={() => setShowFormAddJournal(false)} submit={addJournal} />
        </>
    )
}
