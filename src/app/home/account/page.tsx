'use client'
import TableData from '@/app/home/TableData'
import FormAddAccount from '@/components/Form/FormAddAccount'
import FormEditAccount from '@/components/Form/FormEditAccount'
import ConfirmModal from '@/components/custom/ConfirmModal'
import Loading from '@/components/templates/Loading'
import Message from '@/components/templates/Message'
import Pagination from '@/components/templates/Pagination'
import { AddAccountAttributes, EditAccountAttributes } from '@/form-type'
import { useAddAccount } from '@/hooks/react-query/useAddAccount'
import { useDeleteAccount } from '@/hooks/react-query/useDeleteAccount'
import useGetAllAccountByPage from '@/hooks/react-query/useGetAllAccountByPage'
import { useUpdateAccount } from '@/hooks/react-query/useUpdateAccount'
import useShowMessage from '@/hooks/useShowMessage'
import { AccountAttributes } from '@/type'
import React, { ReactNode, useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi2'

export default function Page(): ReactNode {
    const head = ['Nomor Akun', 'Nama', 'Kegiatan', 'Aksi']
    const [showFormAddAccount, setShowFormAddAccount] = useState<boolean>(false)
    const [showFormEditAccount, setShowFormEditAccount] = useState<boolean>(false)
    const [showFormDeleteAccount, setShowFormDeleteAccount] = useState<boolean>(false)
    const [oneDataAccount, setOneDataAccount] = useState<{ name: string }>({ name: '' })
    const [oneIdAccount, setOneIdAccount] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const [size, setSize] = useState<number>(50)

    const saveAccount = useAddAccount()
    const editAccount = useUpdateAccount()
    const removeAccount = useDeleteAccount()

    const showMessageAdd = useShowMessage(saveAccount)
    const showMessageUpdate = useShowMessage(editAccount)
    const showMessageDelete = useShowMessage(removeAccount)

    const listAccount = useGetAllAccountByPage(showMessageAdd.show || showMessageUpdate.show || showMessageDelete.show, page !== null ? page : 1, size !== null ? size : 1)

    const addAccount = (data: AddAccountAttributes) => {
        saveAccount.mutate(data)
        setShowFormAddAccount(false)
    }
    const updateAccount = (data: EditAccountAttributes) => {
        editAccount.mutate({ uuid: oneIdAccount, data: data })
        setShowFormEditAccount(false)
    }
    const deleteAccount = () => {
        removeAccount.mutate(oneIdAccount)
        setShowFormDeleteAccount(false)
    }
    return (
        <>
            <Message show={showMessageAdd.show} message={showMessageAdd.message} succes={showMessageAdd.status} />
            <Message show={showMessageUpdate.show} message={showMessageUpdate.message} succes={showMessageUpdate.status} />
            <Message show={showMessageDelete.show} message={showMessageDelete.message} succes={showMessageDelete.status} />
            <TableData title='COA' clickAdd={() => setShowFormAddAccount(true)} data={listAccount?.data?.data?.data} head={head}
                pages={<Pagination page={page} allPage={listAccount?.data?.data?.totalPages} setPage={setPage} value={size} setValue={(data) => setSize(parseInt(data.value as string))} />}
            >
                {listAccount?.data?.data?.data?.map((data: AccountAttributes, index: number) => (
                    <tr key={index} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
                        <td className='px-6 py-3'>{data.account_number}</td>
                        <td className='px-6 py-3'>{data.name}</td>
                        <td className='px-6 py-3'>{data.detail_of_activity ? `${data.detail_of_activity.uraian}` : '-'}</td>
                        <td className='px-6 py-3 flex gap-2'>
                            <HiPencil className='w-8 h-8 bg-sky-400 hover:bg-sky-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneDataAccount({ name: data.name })
                                setOneIdAccount(data.uuid)
                                setShowFormEditAccount(true)
                            }} />
                            <HiTrash className='w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
                                setOneIdAccount(data.uuid)
                                setShowFormDeleteAccount(true)
                            }} />
                        </td>
                    </tr>
                ))}
            </TableData>
            <Loading show={listAccount.isLoading} />
            <FormAddAccount show={showFormAddAccount} close={() => setShowFormAddAccount(false)} submit={(data) => addAccount(data)} />
            <FormEditAccount show={showFormEditAccount} close={() => setShowFormEditAccount(false)} oneAccount={oneDataAccount} submit={(data) => updateAccount(data)} />
            <ConfirmModal msg='Anda yakin  untuk menghapus akun ini?' show={showFormDeleteAccount} close={() => setShowFormDeleteAccount(false)} onClick={deleteAccount} />
        </>
    )
}
