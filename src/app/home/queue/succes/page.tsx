'use client'
import React, { ReactNode, useState } from 'react'
import TableData from '../../TableData'
import { DisbursementOfFundAttributes, GroupingDisbursementOfFund } from '@/type'
import { currency } from '@/helper/currency'
import Pagination from '@/components/templates/Pagination'
import Loading from '@/components/templates/Loading'
import { FaChevronDown } from "react-icons/fa";
import DetailModal from '@/components/custom/DetailModal'
import Table from '@/components/templates/Table'
import { useAddJournalDisbursementOfFund } from '@/hooks/react-query/useAddJournalDisbursementOfFund'
import useShowMessage from '@/hooks/useShowMessage'
import Message from '@/components/templates/Message'
import { useGetDisbursementOfFundByWithdraw } from '@/hooks/react-query/useGetDisbursementOfFundByWithdraw'



export default function Page(): ReactNode {
    const head = [{ title: 'No Kegiatan', type: 'string' }, { title: 'Nama', type: 'string' }, { title: 'Jumlah', type: 'string' }]
    const [showModalListGroup, setShowModalListGroup] = useState(false)
    const [saveListGroupDisbursementOfFund, setSaveListDisbursementOfFund] = useState<DisbursementOfFundAttributes[]>([])
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(50)

    const addJournalDisbursementOfFundAttributes = useAddJournalDisbursementOfFund()
    const showMessage = useShowMessage(addJournalDisbursementOfFundAttributes)

    const disbursementOfFund = useGetDisbursementOfFundByWithdraw(1, showMessage.show)
    console.log(disbursementOfFund?.data?.data)
    return (
        <>
            <Loading show={disbursementOfFund.isLoading} />
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <TableData title='Anggaran Terlaksana' head={head} data={disbursementOfFund?.data?.data} noButton
                pages={<Pagination page={page} allPage={disbursementOfFund?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />}
            >
                {disbursementOfFund?.data?.data?.map((data:any, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{data.sharing_program_id ? <FaChevronDown onClick={() => {
                            setSaveListDisbursementOfFund(data.activity)
                            setShowModalListGroup(true)
                        }} /> : <>-</>}</td>
                        <td className='px-6 py-3'>{data.sharing_program_id ? "-" : data?.rincian_kegiatan?.no_kegiatan}</td>
                        <td className='px-6 py-3'>{data.sharing_program_name ? data.sharing_program_name : data?.rincian_kegiatan?.uraian}</td>
                        <td className='px-6 py-3'>{data.amount ? currency(data.amount) : currency(0)}</td>
                    </tr>
                ))}
            </TableData>
            <DetailModal show={showModalListGroup} close={() => setShowModalListGroup(false)}>
                <Table head={head}>
                    {saveListGroupDisbursementOfFund?.map((value, id) => (
                        <tr key={id}>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.rincian_kegiatan.activity_id}</td>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.rincian_kegiatan.description}</td>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.amount ? currency(value.amount) : currency(0)}</td>
                        </tr>
                    ))}
                </Table>
            </DetailModal>
        </>
    )
}
