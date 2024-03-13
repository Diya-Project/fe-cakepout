'use client'
import TableData from '@/app/TableData'
import FormAccountAction from '@/components/Form/FormAccount'
import Button from '@/components/custom/Button'
import TitleTable from '@/components/custom/TitleTable'
import EmptyTable from '@/components/templates/EmptyTable'
import Message from '@/components/templates/Message'
import Table from '@/components/templates/Table'
import useShowMessage from '@/hooks/useShowMessage'
import { AccountAttributes } from '@/type'
import React, { useState } from 'react'

export default function Page() {
    const head = ['No', 'Nama', 'Status']
    const data = [
        { value: 'A', label: 'Aku' },
        { value: 'B', label: 'Bisa' },
        { value: 'C', label: 'Cuka' },
        { value: 'D', label: 'Dia' },
    ]
    const showMessage = useShowMessage(data)
    const [showFormAccountAction, setShowFormAccountAction] = useState(false)
    const saveAccount = (e: AccountAttributes) => {
        console.log(e)
    }
    return (
        <>
            <Message show={showMessage.show} message={showMessage.message} succes={showMessage.status} />
            <TableData title='Daftar Akun' clickAdd={() => setShowFormAccountAction(true)} data={data} head={head}>
                {data.map((e, i) => (
                    <tr key={i} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{i + 1}</td>
                        <td className='px-6 py-3'>{e.value}</td>
                        <td className='px-6 py-3'>{e.label}</td>
                    </tr>
                ))}
            </TableData>
            <FormAccountAction show={showFormAccountAction} close={() => setShowFormAccountAction(false)} submit={saveAccount} />
        </>
    )
}
