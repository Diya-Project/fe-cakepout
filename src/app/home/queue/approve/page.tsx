'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { DisbursementOfFundAttributes } from '@/type'
import Detail from '../Detail'
import Message from '@/components/templates/Message'
import Antrian from '../Antrian'
import { useUpdateWithDrawDisbursementOfFund } from '@/hooks/react-query/useUpdateWithDrawDisbursementOfFund'
import FormUpdateWithdrawDisbursementOfFund from '@/components/Form/FormUpdateWithdrawDisbursementOfFund'
import useShowMessage from '@/hooks/useShowMessage'
import FormJournalDisbursementOfFund from '@/components/Form/FormJournalDisbursementOfFund'
import { useAddJournal } from '@/hooks/react-query/useAddJournal'

export default function Page(): ReactNode {
    const [oneDisbursementOfFund, setOneDisbursementOfFund] = useState<DisbursementOfFundAttributes | null>()
    const [idAccount, setIdAccount] = useState<string>('')
    
    const [showModalApproveWithdrawDisbursementOfFund, setShowModalApproveWithdrawDisbursementOfFund] = useState<boolean>(false)
    const [showFormJournal, setShowFormJournal] = useState<boolean>(false)

    const updateWithdrawDisbursementOfFund = useUpdateWithDrawDisbursementOfFund()
    const saveJournal = useAddJournal()

    const showMessageDisbursementOfFund = useShowMessage(updateWithdrawDisbursementOfFund)
    const showMessageJournal = useShowMessage(saveJournal)

    const getAnggaranDisbursementOfFund = (e: DisbursementOfFundAttributes) => {
        setOneDisbursementOfFund(e)
        setIdAccount(e.activity_id)
    }
    const onUpdateWithdrawDisbursementOfFund = (e: { ptk_id: string | null, receipient: string | null }) => {
        updateWithdrawDisbursementOfFund.mutate({ uuid: oneDisbursementOfFund?.uuid!, data: { ptk_id: e.ptk_id, receipient: e.receipient } })
        setShowModalApproveWithdrawDisbursementOfFund(false)
    }
    const createJournal = (e: AddJournalAttributes) => {
        saveJournal.mutate(e)
        setShowFormJournal(false)
        setOneDisbursementOfFund(null)
    }
    useEffect(() => {
        if (updateWithdrawDisbursementOfFund.data?.status === 200) {
            setShowFormJournal(true)
        }
    }, [updateWithdrawDisbursementOfFund.data])
    return (
        <>
            <Message
                message={showMessageDisbursementOfFund.message} show={showMessageDisbursementOfFund.show} succes={showMessageDisbursementOfFund.status}
            />
            <Message
                message={showMessageJournal.message} show={showMessageJournal.show} succes={showMessageJournal.status}
            />
            <div className='flex md:flex-row flex-col gap-7'>
                <Antrian
                    render={showMessageDisbursementOfFund.show}
                    clickDisbursementOfFund={getAnggaranDisbursementOfFund}
                    status={1} />
                <Detail
                    anggaran={oneDisbursementOfFund!}
                    confirm={() => {
                        setShowModalApproveWithdrawDisbursementOfFund(true)
                    }}
                    titleButton='Realisasikan'
                />
                <FormUpdateWithdrawDisbursementOfFund
                    show={showModalApproveWithdrawDisbursementOfFund}
                    close={() => setShowModalApproveWithdrawDisbursementOfFund(false)}
                    submit={onUpdateWithdrawDisbursementOfFund}
                />
                <FormJournalDisbursementOfFund show={showFormJournal} close={() => setShowFormJournal(false)} fromAccount={idAccount} submit={createJournal} />
            </div>
        </>
    )
}
