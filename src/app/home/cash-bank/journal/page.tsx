'use client'
import FormAddJournal from '@/components/Form/FormAddJournal'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import { AddJournalAttributes } from '@/form-type'
import { useAddJournal } from '@/hooks/react-query/useAddJournal'
import useNavigate from '@/hooks/useNavigate'
import useShowMessage from '@/hooks/useShowMessage'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [showFormJournal, setShowFormJournal] = useState(true)
    const navigate = useRouter()
    const saveJournal = useAddJournal()
    const showMessage = useShowMessage(saveJournal)
    const addJournal = (data: AddJournalAttributes) => {
        saveJournal.mutate(data)
        setShowFormJournal(false)
    }
    useNavigate(saveJournal?.data?.status!,'/home/ledger/journal')
    return (
        <div className='flex justify-center items-center'>
            <Loading show={saveJournal.isPending} />
            <Message show={showMessage.show} message={showMessage.message} succes={showMessage.status} />
            <FormAddJournal show={showFormJournal} close={() => setShowFormJournal(false)} submit={addJournal} />
        </div>
    )
}
