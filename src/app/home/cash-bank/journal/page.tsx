'use client'
import FormAddJournal from '@/components/Form/FormAddJournal'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import { AddJournalAttributes } from '@/form-type'
import { convertToRupiah } from '@/helper/currency'
import { useAddJournal } from '@/hooks/react-query/useAddJournal'
import useNavigate from '@/hooks/useNavigate'
import useShowMessage from '@/hooks/useShowMessage'
import React, { useState } from 'react'

export default function Page() {
    const [showFormJournal, setShowFormJournal] = useState(true)
    const saveJournal = useAddJournal()
    const showMessage = useShowMessage(saveJournal)
    const addJournal = (data: AddJournalAttributes) => {
        let toAccount = []
        for (let i = 0; i < data?.to_account?.length!; i++) {
            let amount = convertToRupiah(data.to_account![i].amount as number)
            toAccount.push({account_id:data.to_account![i].account_id,amount:amount})
        }
        saveJournal.mutate({description:data.description,from_account:data.from_account,to_account:toAccount,transaction_date:data.transaction_date})
        setShowFormJournal(false)
    }
    useNavigate(saveJournal?.data?.status!, '/home/cash-bank')
    return (
        <div className='flex justify-center items-center'>
            <Loading show={saveJournal.isPending} />
            <Message show={showMessage.show} message={showMessage.message} succes={showMessage.status} />
            <FormAddJournal show={showFormJournal} close={() => setShowFormJournal(false)} submit={addJournal} />
        </div>
    )
}
