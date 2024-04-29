'use client'
import React, { ReactNode, useState } from 'react'
import TableData from '../../TableData'
import { useGetDisbursementOfFundByStatus } from '@/hooks/react-query/useGetDisbursementOfFundByStatus'
import { DisbursementOfFundAttributes, GroupingDisbursementOfFund, SelectAttributes } from '@/type'
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
    const head = ["Rincian", 'No Kegiatan', 'Nama', 'Jumlah', 'Pilih']
    const [showFormUpdateDisbursementOfFund, setShowFormUpdateDisbursementOfFund] = useState(false)
    const [showFormJournal, setShowFormJournal] = useState(false)
    const [showModalListGroup, setShowModalListGroup] = useState(false)
    const [idGroup, setIdGroup] = useState("")
    const [saveListGroupDisbursementOfFund, setSaveListDisbursementOfFund] = useState<DisbursementOfFundAttributes[]>([])
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(5)

    const [selectedDisbursementOfFund, setSelectedDsibursementOfFund] = useState<Array<string>>([])
    const disbursementOfFund = useGetDisbursementOfFundByStatus(1, true, page !== null ? page : 1, size !== null ? size : 1)

    const addJournalDisbursementOfFundAttributes = useAddJournalDisbursementOfFund()
    const showMessage = useShowMessage(addJournalDisbursementOfFundAttributes)
    const sendJournal = (value: AddJournalDisbursementOfFundAttributes) => {
        console.log(value)
        addJournalDisbursementOfFundAttributes.mutate(value)
        setShowFormJournal(false)
    }
    return (
        <>
            <Loading show={disbursementOfFund.isLoading} />
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <TableData title='Pengambilan Dana' head={head} data={disbursementOfFund?.data?.data?.data} noButton={selectedDisbursementOfFund.length === 0 ? true : false} buttonName='Setujui' clickAdd={() => setShowFormUpdateDisbursementOfFund(true)}
                pages={<Pagination page={page} allPage={disbursementOfFund?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />}
            >
                {disbursementOfFund?.data?.data?.data?.map((value: GroupingDisbursementOfFund, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{value.sharing_program_id ? <FaChevronDown onClick={() => {
                            setSaveListDisbursementOfFund(value.activity)
                            setShowModalListGroup(true)
                        }} /> : <>-</>}</td>
                        <td className='px-6 py-3'>{value.sharing_program_id ? "-" : value.no_kegiatan}</td>
                        <td className='px-6 py-3'>{value.sharing_program_name ? value.sharing_program_name : value.uraian}</td>
                        <td className='px-6 py-3'>{value.amount ? currency(value.amount) : currency(0)}</td>
                        <td className='px-6 py-3'>
                            <TbMoneybag className='w-6 h-6 cursor-pointer' onClick={() => {
                                setShowFormJournal(true)
                                setIdGroup(value.sharing_program_id ? value.sharing_program_id : value.uuid)
                            }} />
                        </td>
                    </tr>
                ))}
            </TableData>
            <DetailModal show={showModalListGroup} close={() => setShowModalListGroup(false)}>
                <Table head={["No Kegiatan", "Kegiatan", "Nilai"]}>
                    {saveListGroupDisbursementOfFund?.map((value, id) => (
                        <tr>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.rincian_kegiatan.no_kegiatan}</td>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.rincian_kegiatan.uraian}</td>
                            <td className='font-montserrat uppercase px-6 py-3'>{value.amount ? currency(value.amount) : currency(0)}</td>
                        </tr>
                    ))}
                </Table>
            </DetailModal>
            <FormJournalDisbursementOfFund show={showFormJournal} close={() => setShowFormJournal(false)} groupId={idGroup} submit={sendJournal} />
        </>
    )
}
