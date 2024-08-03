'use client'
import React, { ReactNode, useState } from 'react'
import TableData from '../../TableData'
import { useGetDisbursementOfFundByStatus } from '@/hooks/react-query/useGetDisbursementOfFundByStatus'
import { GroupingDisbursementOfFund, SelectAttributes } from '@/type'
import { currency } from '@/helper/currency'
import Pagination from '@/components/templates/Pagination'
import { useUpdateStatusDisbursementOfFund } from '@/hooks/react-query/useUpdateStatusDisbursementOfFund'
import ConfirmModal from '@/components/custom/ConfirmModal'
import useShowMessage from '@/hooks/useShowMessage'
import Message from '@/components/templates/Message'
import Loading from '@/components/templates/Loading'
import useInstitutionOptions from '@/options/useInstitutionOptions'

export default function Page(): ReactNode {
    const head = [{ title: 'Lembaga', type: 'string' }, { title: 'Nama', type: 'string' }, { title: 'Jumlah', type: 'string' }, { title: 'Pilih', type: 'string' }]
    const [showFormUpdateDisbursementOfFund, setShowFormUpdateDisbursementOfFund] = useState(false)
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(50)

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
    const institution: SelectAttributes[] = useInstitutionOptions()
    const disbursementOfFund = useGetDisbursementOfFundByStatus(1, showMessage.show, page !== null ? page : 1, size !== null ? size : 1)
    console.log(disbursementOfFund?.data?.data?.data)
    return (
        <>
            <Loading show={disbursementOfFund?.isLoading} />
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <TableData title='Antrian' head={head} data={disbursementOfFund?.data?.data?.data} noButton={selectedDisbursementOfFund.length === 0 ? true : false} buttonName='Setujui' clickAdd={() => setShowFormUpdateDisbursementOfFund(true)}
                pages={<Pagination page={page} allPage={disbursementOfFund?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />}
            >
                {disbursementOfFund?.data?.data?.data?.map((data: GroupingDisbursementOfFund, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{institution?.find((e) => e.value === data.detail_of_activities![0]?.activity?.institution_no)?.label}</td>
                        <td className='px-6 py-3'>{data.sharing_program_name ? data.sharing_program_name : data.uraian}</td>
                        <td className='px-6 py-3'>{data.amount ? currency(data.amount) : currency(0)}</td>
                        <td className='px-6 py-3'>
                            <input type='checkbox'
                                checked={selectedDisbursementOfFund.includes(data.sharing_program_id || data.id)}
                                onClick={() => saveDisbursementOfFund(data.sharing_program_id ? data.sharing_program_id : data.id)}
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
