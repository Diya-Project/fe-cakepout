'use client'
import React, { ReactNode, useState } from 'react'
import Antrian from '../Antrian'
import Detail from '../Detail'
import { DisbursementOfFundAttributes } from '@/type'
import ConfirmModal from '@/components/custom/ConfirmModal'
import { useUpdateStatusDisbursementOfFund } from '@/hooks/react-query/useUpdateStatusDisbursementOfFund'
import Message from '@/components/templates/Message'
import useShowMessage from '@/hooks/useShowMessage'

export default function Page():ReactNode {
    const [oneDisbursementOfFund, setOneDisbursementOfFund] = useState<DisbursementOfFundAttributes>()
    const [showModalApproveStatusDisbursementOfFund, setShowModalApproveStatusDisbursementOfFund] = useState<boolean>(false)
    const [oneUuidDisbursementOfFund, setOneUuidDisbursementOfFund] = useState<string>('')
    const updateDisbursementOfFund = useUpdateStatusDisbursementOfFund()
    const showMessage = useShowMessage(updateDisbursementOfFund?.data)
    const getOneDisbursementOfFund = (e: DisbursementOfFundAttributes) => {
        setOneDisbursementOfFund(e)
    }
    const approveStatusDisbursementOfFund = (e: string | number | undefined) => {
        e && typeof e === 'string' && setOneUuidDisbursementOfFund(e)
        setShowModalApproveStatusDisbursementOfFund(!showModalApproveStatusDisbursementOfFund)
    }
    const onUpdateStatusDsibursementOfFund = () => {
        updateDisbursementOfFund.mutate(oneUuidDisbursementOfFund)
        setShowModalApproveStatusDisbursementOfFund(false)
    }
    return (
        <>
            <Message message={showMessage.message} show={showMessage.show} succes={showMessage.status} />
            <div className='flex md:flex-row flex-col gap-7 -m-14'>
                <Antrian
                    clickDisbursementOfFund={getOneDisbursementOfFund}
                    render={showMessage.show}
                    status={0}
                />
                <Detail
                    anggaran={oneDisbursementOfFund}
                    confirm={approveStatusDisbursementOfFund}
                />
                <ConfirmModal
                    show={showModalApproveStatusDisbursementOfFund}
                    close={() => setShowModalApproveStatusDisbursementOfFund(!showModalApproveStatusDisbursementOfFund)}
                    msg='Yakin untuk menyetujui anggaran ini?' onClick={onUpdateStatusDsibursementOfFund}
                />
            </div>
        </>
    )
}
