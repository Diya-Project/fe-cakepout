'use client'
import React, { ReactNode, useState } from 'react'
import TableData from '../../TableData'
import { useGetDisbursementOfFundByStatus } from '@/hooks/react-query/useGetDisbursementOfFundByStatus'
import { DisbursementOfFundAttributes, GroupingDisbursementOfFund } from '@/type'
import { currency } from '@/helper/currency'
import Pagination from '@/components/templates/Pagination'
import { useUpdateStatusDisbursementOfFund } from '@/hooks/react-query/useUpdateStatusDisbursementOfFund'
import ConfirmModal from '@/components/custom/ConfirmModal'
import useShowMessage from '@/hooks/useShowMessage'
import Message from '@/components/templates/Message'
import Loading from '@/components/templates/Loading'

export default function Page(): ReactNode {
    const head = ['No Kegiatan', 'Nama', 'Jumlah', 'Pilih']
    const [showFormUpdateDisbursementOfFund, setShowFormUpdateDisbursementOfFund] = useState(false)
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)

    const [selectedDisbursementOfFund, setSelectedDsibursementOfFund] = useState<Array<string>>([])
    const saveDisbursementOfFund = (value: string) => {
        if (!selectedDisbursementOfFund.find((key) => key === value)) {
            setSelectedDsibursementOfFund([
                ...selectedDisbursementOfFund,
                value
            ])
        } else {
            setSelectedDsibursementOfFund(selectedDisbursementOfFund.filter((key) => key !== value))
        }
    }
    const updateStatusDisbursementOfFund = useUpdateStatusDisbursementOfFund()
    const showMessage = useShowMessage(updateStatusDisbursementOfFund)
    const sendDisbursementOfFund = () => {
        updateStatusDisbursementOfFund.mutate({ antrian: selectedDisbursementOfFund })
        setShowFormUpdateDisbursementOfFund(false)

    }
    const disbursementOfFund = useGetDisbursementOfFundByStatus(0, showMessage.show, page !== null ? page : 1, size !== null ? size : 1)
    return (
        <>
            <Loading show={disbursementOfFund?.isLoading} />
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <TableData title='Antrian' head={head} data={disbursementOfFund?.data?.data?.data} noButton={selectedDisbursementOfFund.length === 0 ? true : false} buttonName='Setujui' clickAdd={() => setShowFormUpdateDisbursementOfFund(true)}
                pages={<Pagination page={page} allPage={disbursementOfFund?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />}
            >
                {disbursementOfFund?.data?.data?.data?.map((value: GroupingDisbursementOfFund, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{value.no_kegiatan}</td>
                        <td className='px-6 py-3'>{value.sharing_program_name ? value.sharing_program_name : value.uraian}</td>
                        <td className='px-6 py-3'>{value.amount ? currency(value.amount) : currency(0)}</td>
                        <td className='px-6 py-3'>
                            <input type='checkbox'
                                checked={selectedDisbursementOfFund.includes(value.sharing_program_id || value.uuid)}
                                onClick={() => saveDisbursementOfFund(value.sharing_program_id ? value.sharing_program_id : value.uuid)}
                                readOnly
                            />
                        </td>
                    </tr>
                ))}
            </TableData>
            <ConfirmModal show={showFormUpdateDisbursementOfFund} close={() => setShowFormUpdateDisbursementOfFund(false)} msg='Yakin untuk menyetujui anggaran ini?' onClick={sendDisbursementOfFund} />
        </>
    )
}
