'use client'
import TableData from '@/app/TableData'
import FormAddAccount from '@/components/Form/FormAddAccount'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import { useAddAccount } from '@/hooks/react-query/useAddAccount'
import useGetAllAccount from '@/hooks/react-query/useGetAllAccount'
import useShowMessage from '@/hooks/useShowMessage'
import { AccountAttributes, DetailOfActivityAttributes } from '@/type'
import React, { ReactNode, useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi2'

export default function Page(): ReactNode {
    const head = ['No', 'Nomor Akun', 'Nama', 'Kegiatan', 'Aksi']
    const [showFormAddAccount, setShowFormAddAccount] = useState(false)
    const sendAccount = useAddAccount()
    const showMessage = useShowMessage(sendAccount?.data)
    const saveAccount = (e: Omit<AccountAttributes, 'uuid'> & { group_account_name: string }) => {
        sendAccount.mutate(e)
        setShowFormAddAccount(false)
    }
    const listAccount = useGetAllAccount(showMessage.show)
    return (
        <>
            <Message show={showMessage.show} message={showMessage.message} succes={showMessage.status} />
            <TableData title='Daftar Akun' clickAdd={() => setShowFormAddAccount(true)} data={listAccount?.data?.data} head={head}>
                {listAccount?.data?.data.map((e: AccountAttributes, i: number) => (
                    <tr key={i} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{i + 1}</td>
                        <td className='px-6 py-3'>{`${e.group_account.group_account}.${e.group_account.group_account_label}.${e.account_number}`}</td>
                        <td className='px-6 py-3'>{e.name}</td>
                        <td className='px-6 py-3'>{e.detail_of_activity ? `${e.detail_of_activity.uraian}` : '-'}</td>
                        <td className='px-6 py-3 flex gap-2'>
                            <HiPencil className='w-8 h-8 bg-sky-400 hover:bg-sky-500 rounded-full p-2 cursor-pointer text-white' />
                            <HiTrash className='w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer text-white' />
                        </td>
                    </tr>
                ))}
                <Loading show={listAccount.isLoading} />
            </TableData>
            <FormAddAccount show={showFormAddAccount} close={() => setShowFormAddAccount(false)} submit={saveAccount} />
        </>
    )
}
