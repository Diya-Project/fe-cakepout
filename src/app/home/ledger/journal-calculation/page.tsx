'use client'
import React, { useState } from 'react'
import TableData from '../../TableData'
import { useGetAllMonthlyAccountCalculation } from '@/hooks/react-query/useGetAllMonthlyAccountCalculation'
import Pagination from '@/components/templates/Pagination'
import { MonthlyAccountCalculationAttributes } from '@/type'
import { useAddMonthlyAccountCalculation } from '@/hooks/react-query/useAddMonthlyAccountCalculation'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import useShowMessage from '@/hooks/useShowMessage'
import FormAddMonthlyAccountCalculation from '@/components/Form/FormAddMonthlyAccountCalculation'
import monthIndex from '@/components/constants/monthIndex'
import { currency } from '@/helper/currency'
import { useSession } from 'next-auth/react'
import { HiPencilSquare } from 'react-icons/hi2'
import FormUpdateStatusMonthlyAccountCalculation from '@/components/Form/FormUpdateStatusMonthlyAccountCalculation'
import { useUpdateStatusMonthyAccountCalculation } from '@/hooks/react-query/useUpdateStatusMonthlyAccountCalculations'

export default function page() {
    const session = useSession()
    const head = ['Nomor Akun', 'Nama Akun', 'Tahun', 'Bulan', 'Status', 'Total', session.data?.user.role === 'superAdmin' && 'Edit Status']
    const [showFormAddCalculationJournal, setShowFormAddCalculationJournal] = useState<boolean>(false)
    const [showFormUpdateStatusCalculationJournal, setShowFormUpdateStatusCalculationJournal] = useState<boolean>(false)
    const [oneMonthlyAccountCalculatin, setOneMonthlyAccountCalculation] = useState({ uuid: '', open: 'tidak' })
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)

    const saveMonthlyAccountCalculation = useAddMonthlyAccountCalculation()
    const updateMonthlyAccountCalculation = useUpdateStatusMonthyAccountCalculation()

    const showMessageAdd = useShowMessage(saveMonthlyAccountCalculation)
    const showMessageUpdate = useShowMessage(updateMonthlyAccountCalculation)
    const listMonthlyAccountCalculation = useGetAllMonthlyAccountCalculation(showMessageAdd.show || showMessageUpdate.show, page !== null ? page : 1, size !== null ? size : 1)
    const addMonthlyAccountCalculation = (e: AddMonthlyAccountCalculation) => {
        e.open = e.open === 'iya' ? true : false
        saveMonthlyAccountCalculation.mutate(e)
        setShowFormAddCalculationJournal(false)
    }
    const editMonthlyAccountCalculation = (e: { open: boolean | string }) => {
        e.open = e.open === 'iya' ? true : false
        updateMonthlyAccountCalculation.mutate({ uuid: oneMonthlyAccountCalculatin.uuid, data: e })
        setShowFormUpdateStatusCalculationJournal(false)
    }
    return (
        <>
            <Message show={showMessageAdd.show || showMessageUpdate.show} message={showMessageAdd.message || showMessageUpdate.message} succes={showMessageAdd.status || showMessageUpdate.status} />
            <TableData title='List Kalkulasi Jurnal' clickAdd={() => setShowFormAddCalculationJournal(true)} data={listMonthlyAccountCalculation?.data?.data?.data} head={head}
                pages={<Pagination page={page} allPage={listMonthlyAccountCalculation?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(e) => {
                    setSize(parseInt(e.target.value))
                    setPage(1)
                }} />}
            >
                {listMonthlyAccountCalculation?.data?.data?.data?.map((e: MonthlyAccountCalculationAttributes, i: number) => (
                    <tr key={i} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{`${e.account?.group_account?.group_account}.${e.account?.group_account?.group_account_label}.${e.account?.account_number}`}</td>
                        <td className='px-6 py-3'>{e.account?.name}</td>
                        <td className='px-6 py-3'>{e.accounting_year}</td>
                        <td className='px-6 py-3'>{e.month_index ? monthIndex.find((r) => r.value === e.month_index)?.label : '-'}</td>
                        <td className={`px-6 py-3  font-semibold font-montserrat ${e.open ? 'text-sky-500' : 'text-red-500'}`}>{e.open ? "Dibuka" : "Ditutup"}</td>
                        <td className='px-6 py-3'>{e.total ? currency(e.total) : currency(0)}</td>
                        {session.data?.user.role === 'superAdmin' && <td className='px-6 py-3'><HiPencilSquare className='w-6 h-6 cursor-pointer' onClick={() => {
                            setOneMonthlyAccountCalculation({ uuid: e.uuid, open: e.open ? 'iya' : 'tidak' })
                            setShowFormUpdateStatusCalculationJournal(true)
                        }} /></td>}
                    </tr>
                ))}
            </TableData >
            <Loading show={listMonthlyAccountCalculation.isLoading} />
            <FormAddMonthlyAccountCalculation show={showFormAddCalculationJournal} close={() => setShowFormAddCalculationJournal(false)} submit={addMonthlyAccountCalculation} />
            <FormUpdateStatusMonthlyAccountCalculation show={showFormUpdateStatusCalculationJournal} close={() => setShowFormUpdateStatusCalculationJournal(false)} submit={editMonthlyAccountCalculation} oneCalculation={oneMonthlyAccountCalculatin} />
        </>
    )
}
