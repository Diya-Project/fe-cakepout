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

export default function Page() {
    const head = ['Nomor Akun', 'Nama Akun', 'Jumlah', 'Status', 'Tanggal Transaksi', 'Referensi', 'Tahun']
    const [showFormAddJournal, setShowFormAddJournal] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)

    const saveJournal = useAddJournal()

    const showMessage = useShowMessage(saveJournal)
    const listJournal = useGetAllJournal(showMessage?.show, page !== null ? page : 1, size !== null ? size : 1)

    const addJournal = (e: AddJournalAttributes) => {
        saveJournal.mutate(e)
        setShowFormAddJournal(false)
    }
    return (
        <>
            <Message show={showMessage.show} message={showMessage.message} succes={showMessage.status} />
            <TableData title='List Jurnal' clickAdd={() => setShowFormAddJournal(true)} data={listJournal?.data?.data?.data} head={head}
                pages={<Pagination page={page} allPage={listJournal?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(e) => {
                    setSize(parseInt(e.target.value))
                    setPage(1)
                }} />}
            >
                {listJournal?.data?.data?.data?.map((e: JournalAttributes, i: number) => (
                    <tr key={i} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{`${e.account?.group_account?.group_account}.${e.account?.group_account?.group_account_label}.${e.account?.account_number}`}</td>
                        <td className='px-6 py-3'>{e.account?.name}</td>
                        <td className='px-6 py-3'>{e.amount ? currency(e.amount) : currency(0)}</td>
                        <td className='px-6 py-3'>{e.status === 'D' ? 'Debit' : 'Kredit'}</td>
                        <td className='px-6 py-3'>{e.transaction_date ? formatTime(e.transaction_date) : '-'}</td>
                        <td className='px-6 py-3'>{e.reference}</td>
                        <td className='px-6 py-3'>{e.accounting_year}</td>
                    </tr>
                ))}
            </TableData >
            <Loading show={listJournal.isLoading} />
            <FormAddJournal show={showFormAddJournal} close={() => setShowFormAddJournal(false)} submit={addJournal} />
        </>
    )
}
