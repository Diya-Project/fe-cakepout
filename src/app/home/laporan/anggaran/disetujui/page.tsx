'use client'
import React, { useEffect, useState } from 'react'
import { DisbursementOfFundAttributes } from '@/type'
import Detail from '../Detail'
import Message from '@/components/templates/Message'
import Antrian from '../Antrian'
import { useUpdateWithDrawDisbursementOfFund } from '@/queries/dibursementOfFund'
import FormUpdateWithdrawDisbursementOfFund from '@/components/Form/FormUpdateWithdrawDisbursementOfFund'

export default function Page() {
    const [oneDisbursementOfFund, setOneDisbursementOfFund] = useState<DisbursementOfFundAttributes>()
    const [showModalApproveWithdrawDisbursementOfFund, setShowModalApproveWithdrawDisbursementOfFund] = useState<boolean>(false)
    const [oneUuidDisbursementOfFund, setOneUuidDisbursementOfFund] = useState<string>('')
    const [messageAlertDisbursementOfFund, setMessageAlertDisbursementOfFund] = useState<string>('')
    const [showAlertDisbursementOfFund, setShowAlertDisbursementOfFund] = useState<boolean>(false)
    const updateWithdrawDisbursementOfFund = useUpdateWithDrawDisbursementOfFund()
    const getAnggaranDisbursementOfFund = (e: DisbursementOfFundAttributes) => {
        setOneDisbursementOfFund(e)
    }
    const onUpdateWithdrawDisbursementOfFund = (e: { ptk_id: string | null, receipient: string | null }) => {
        updateWithdrawDisbursementOfFund.mutate({ uuid: oneUuidDisbursementOfFund, data: { ptk_id: e.ptk_id, receipient: e.receipient } })
        setShowModalApproveWithdrawDisbursementOfFund(false)
    }
    useEffect(() => {
        if (updateWithdrawDisbursementOfFund?.data?.status) {
            setMessageAlertDisbursementOfFund(updateWithdrawDisbursementOfFund.data.data.msg)
            setShowAlertDisbursementOfFund(true)
            setTimeout(() => {
                setShowAlertDisbursementOfFund(false)
            }, 3000)
        }
    }, [updateWithdrawDisbursementOfFund?.data])
    return (
        <>
            <Message
                message={messageAlertDisbursementOfFund} show={showAlertDisbursementOfFund}
            />
            <div className='m-5 flex md:flex-row flex-col gap-7'>
                <Antrian
                    render={showAlertDisbursementOfFund}
                    clickDisbursementOfFund={getAnggaranDisbursementOfFund}
                    status={1} />
                <Detail
                    anggaran={oneDisbursementOfFund}
                    confirm={(e: string | number | undefined) => {
                        e && typeof e === 'string' && setOneUuidDisbursementOfFund(e)
                        setShowModalApproveWithdrawDisbursementOfFund(true)
                    }}
                />
                <FormUpdateWithdrawDisbursementOfFund
                    show={showModalApproveWithdrawDisbursementOfFund}
                    close={() => setShowModalApproveWithdrawDisbursementOfFund(false)}
                    submit={onUpdateWithdrawDisbursementOfFund}
                />
            </div>
        </>
    )
}
