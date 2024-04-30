'use client'
import { AddJournalAttributes } from '@/form-type'
import { useAddJournal } from '@/hooks/react-query/useAddJournal'
import useShowMessage from '@/hooks/useShowMessage'
import React, { ReactNode, useState } from 'react'

export default function Page(): ReactNode {
  const [showFormAddJournal, setShowFormAddJournal] = useState<boolean>(false)
  const saveJournal = useAddJournal()
  const showMessage = useShowMessage(saveJournal)
  const addJournal = (data: AddJournalAttributes) => {
    saveJournal.mutate(data)
    setShowFormAddJournal(false)
  }

  return (
    <div className='bg-yellow-400 w-[100%] h-[100%]'>
      <div>

      </div>
    </div>
  )
}
