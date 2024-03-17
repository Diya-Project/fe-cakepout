'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { DisbursementOfFundAttributes } from '@/type'
import Detail from '../Detail'
import Message from '@/components/templates/Message'
import Antrian from '../Antrian'
import { useUpdateWithDrawDisbursementOfFund } from '@/hooks/react-query/useUpdateWithDrawDisbursementOfFund'
import FormUpdateWithdrawDisbursementOfFund from '@/components/Form/FormUpdateWithdrawDisbursementOfFund'
import useShowMessage from '@/hooks/useShowMessage'

export default function Page():ReactNode {
    const [oneDisbursementOfFund, setOneDisbursementOfFund] = useState<DisbursementOfFundAttributes>()
    const [showModalApproveWithdrawDisbursementOfFund, setShowModalApproveWithdrawDisbursementOfFund] = useState<boolean>(false)
    const [oneUuidDisbursementOfFund, setOneUuidDisbursementOfFund] = useState<string>('')
    const updateWithdrawDisbursementOfFund = useUpdateWithDrawDisbursementOfFund()
    const showMessage = useShowMessage(updateWithdrawDisbursementOfFund?.data)

    const getAnggaranDisbursementOfFund = (e: DisbursementOfFundAttributes) => {
        setOneDisbursementOfFund(e)
    }
    const onUpdateWithdrawDisbursementOfFund = (e: { ptk_id: string | null, receipient: string | null }) => {
        updateWithdrawDisbursementOfFund.mutate({ uuid: oneUuidDisbursementOfFund, data: { ptk_id: e.ptk_id, receipient: e.receipient } })
        setShowModalApproveWithdrawDisbursementOfFund(false)
    }
    return (
        <>
            <Message
                message={showMessage.message} show={showMessage.show} succes={showMessage.status}
            />
            <div className='flex md:flex-row flex-col gap-7 -m-14'>
                <Antrian
                    render={showMessage.show}
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
