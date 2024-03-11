'use client'
import React, { useEffect, useState } from 'react'
import Antrian from '../Antrian'
import Detail from '../Detail'
import { DisbursementOfFundAttributes } from '@/type'
import ConfirmModal from '@/components/custom/ConfirmModal'
import { useUpdateStatusDisbursementOfFund } from '@/queries/dibursementOfFund'
import Message from '@/components/templates/Message'

export default function page() {
    const [oneDisbursementOfFund, setOneDisbursementOfFund] = useState<DisbursementOfFundAttributes>()
    const [showModalApproveStatusDisbursementOfFund, setShowModalApproveStatusDisbursementOfFund] = useState<boolean>(false)
    const [oneUuidDisbursementOfFund, setOneUuidDisbursementOfFund] = useState<string>('')
    const [messageAlertDisbursementOfFund, setMessageAlertDisbursementOfFund] = useState<string>('')
    const [showAlertDisbursementOfFund, setShowAlertDisbursementOfFund] = useState<boolean>(false)
    const updateDisbursementOfFund = useUpdateStatusDisbursementOfFund()
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
    useEffect(() => {
        if (updateDisbursementOfFund?.data?.status) {
            setMessageAlertDisbursementOfFund(updateDisbursementOfFund.data.data.msg)
            setShowAlertDisbursementOfFund(true)
            setTimeout(() => {
                setShowAlertDisbursementOfFund(false)
            }, 3000)
        }
    }, [updateDisbursementOfFund?.data])
    return (
        <>
            <Message message={messageAlertDisbursementOfFund} show={showAlertDisbursementOfFund} />
            <div className='m-5 flex md:flex-row flex-col gap-7'>
                <Antrian
                    clickDisbursementOfFund={getOneDisbursementOfFund}
                    render={showAlertDisbursementOfFund}
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
