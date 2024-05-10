'use client'
import monthIndex from '@/components/constants/monthIndex'
import Button from '@/components/custom/Button'
import Selector from '@/components/fields/Selector'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import { useCloseBook } from '@/hooks/react-query/useCloseBook'
import useNavigate from '@/hooks/useNavigate'
import useShowMessage from '@/hooks/useShowMessage'
import { SelectAttributes } from '@/type'
import React, { useState } from 'react'

export default function Page() {
    const [oneMonth, setOneMonth] = useState<SelectAttributes>({ value: '', label: '' })
    const saveCloseBook = useCloseBook()
    const showMessage = useShowMessage(saveCloseBook)
    const sendCloseBook = () => {
        saveCloseBook.mutate(oneMonth.value as string)
    }
    useNavigate(saveCloseBook?.data?.status!, '/home/cash-bank')
    return (
        <div className='flex justify-center items-center'>
            <Loading show={saveCloseBook.isPending} />
            <Message show={showMessage.show} message={showMessage.message} succes={showMessage.status} />
            <div className='w-[30rem] bg-white shadow-xl p-6 flex flex-col gap-6'>
                <h1 className='text-slate-700 font-montserrat text-xl'>Tutup bulan akutansi</h1>
                <Selector instanceId='select-month' title='Pilih Bulan' options={monthIndex} onChange={(val) => setOneMonth(val)} value={oneMonth} />
                {oneMonth.value !== '' ?
                    <Button title='Simpan' click={sendCloseBook} />
                    :
                    <h1 className='bg-slate-300 px-8 py-2 text-center rounded-md font-montserrat'>Pilih bulan terlebih dahulu</h1>
                }
            </div>
        </div>
    )
}
