'use client'
import React, { ReactNode, useState } from 'react'
import TableData from '../../TableData'
import { useGetDisbursementOfFundByStatus } from '@/hooks/react-query/useGetDisbursementOfFundByStatus'
import { DetailOfActivityAttributes, DisbursementOfFundAttributes, GroupingDisbursementOfFund, SelectAttributes } from '@/type'
import { currency } from '@/helper/currency'
import Pagination from '@/components/templates/Pagination'
import { TbMoneybag } from "react-icons/tb";
import Selector from '@/components/fields/Selector'
import { useSharingProgramOptions } from '@/options/useSharingProgramOptions'
import Loading from '@/components/templates/Loading'
import FormJournalDisbursementOfFund from '@/components/Form/FormJournalDisbursementOfFund'
import { AddJournalDisbursementOfFundAttributes } from '@/form-type'
import { FaChevronDown } from "react-icons/fa";
import DetailModal from '@/components/custom/DetailModal'
import Table from '@/components/templates/Table'
import { useAddJournalDisbursementOfFund } from '@/hooks/react-query/useAddJournalDisbursementOfFund'
import useShowMessage from '@/hooks/useShowMessage'
import Message from '@/components/templates/Message'



export default function Page(): ReactNode {
    const head = [{ title: 'No Kegiatan', type: 'string' }, { title: 'Nama', type: 'string' }, { title: 'Jumlah', type: 'string' }, { title: 'Pilih', type: 'string' }]
    const [showFormUpdateDisbursementOfFund, setShowFormUpdateDisbursementOfFund] = useState(false)
    const [showFormJournal, setShowFormJournal] = useState(false)
    const [showModalListGroup, setShowModalListGroup] = useState(false)
    const [idGroup, setIdGroup] = useState("")
    const [saveListGroupDisbursementOfFund, setSaveListDisbursementOfFund] = useState<DetailOfActivityAttributes[]>([])
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(50)

    const [selectedDisbursementOfFund, setSelectedDsibursementOfFund] = useState<Array<string>>([])

    const addJournalDisbursementOfFundAttributes = useAddJournalDisbursementOfFund()
    const showMessage = useShowMessage(addJournalDisbursementOfFundAttributes)
    const sendJournal = (value: AddJournalDisbursementOfFundAttributes) => {
        addJournalDisbursementOfFundAttributes.mutate(value)
        setShowFormJournal(false)
    }
    const disbursementOfFund = useGetDisbursementOfFundByStatus(1, showMessage.show, page !== null ? page : 1, size !== null ? size : 1)
    return (
        <>
            <Loading show={disbursementOfFund.isLoading} />
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <TableData title='Pengambilan Dana' head={head} data={disbursementOfFund?.data?.data?.data} noButton={selectedDisbursementOfFund.length === 0 ? true : false} buttonName='Setujui' clickAdd={() => setShowFormUpdateDisbursementOfFund(true)}
                pages={<Pagination page={page} allPage={disbursementOfFund?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />}
            >
                {disbursementOfFund?.data?.data?.data?.map((data: GroupingDisbursementOfFund, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{data.sharing_program_id ? <FaChevronDown onClick={() => {
                            setSaveListDisbursementOfFund(data.detail_of_activities!)
                            setShowModalListGroup(true)
                        }} /> : <>-</>}</td>
                        <td className='px-6 py-3'>{'-'}</td>
                        <td className='px-6 py-3'>{data.sharing_program_name ? data.sharing_program_name : data.uraian}</td>
                        <td className='px-6 py-3'>{data.amount ? currency(data.amount) : currency(0)}</td>
                        <td className='px-6 py-3'>
                            <TbMoneybag className='w-6 h-6 cursor-pointer' onClick={() => {
                                setShowFormJournal(true)
                                setIdGroup(data.sharing_program_id ? data.sharing_program_id : data.id)
                            }} />
                        </td>
                    </tr>
                ))}
            </TableData>
            <DetailModal show={showModalListGroup} close={() => setShowModalListGroup(false)}>
                <Table head={head}>
                    {saveListGroupDisbursementOfFund?.map((value, id) => (
                        <tr key={id}>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.activity_id}</td>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.description}</td>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.total ? currency(value.total) : currency(0)}</td>
                        </tr>
                    ))}
                </Table>
            </DetailModal>
            <FormJournalDisbursementOfFund show={showFormJournal} close={() => setShowFormJournal(false)} groupId={idGroup} submit={sendJournal} />
        </>
    )
}
