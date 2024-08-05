'use client'
import FormAddAutomation from '@/components/Form/FormAddAutomation'
import useGetAllAutomation from '@/hooks/react-query/useGetAllAutomation'
import { AutomationAttributes, SelectAttributes } from '@/type'
import React, { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import TableData from '../TableData'
import { HiPencil, HiTrash } from 'react-icons/hi2'

export default function Page() {
  const header = [{ title: 'No', type: 'string' }, { title: 'Akun Sumber', type: 'string' }, { title: 'Akun Tujuan', type: 'string' }, { title: 'Role', type: 'string' }, { title: 'Aksi', type: 'string' }]
  const [showFormAddAutomation, setShowFormAddAutomation] = useState(false)
  const [selectedGroutAccount, setSelectedGroupAccount] = useState<SelectAttributes>({ value: 1, label: "" })
  const listAutomation = useGetAllAutomation(+selectedGroutAccount?.value!, true)
  console.log(listAutomation?.data?.data)
  const saveAutomation = (value: FieldValues) => {
    console.log(value)
  }
  return (
    <div>
      <TableData clickAdd={() => setShowFormAddAutomation(true)} title='Automasi' data={listAutomation?.data?.data} head={header} >
        {listAutomation && listAutomation?.data?.data?.account?.map((value: AutomationAttributes, id: number) => (
          <tr key={id} className="bg-white border-b border-slate-100 hover:bg-gray-100 overflow-y-auto">
            <td className='px-6 py-3'>{value.uuid_account_from}</td>
            <td className='px-6 py-3'>{value.uuid_account_to}</td>
            <td className='px-6 py-3'>{value.role}</td>
            <td className='px-6 py-3 flex gap-2'>
              <HiPencil className='w-8 h-8 bg-sky-400 hover:bg-sky-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
              }} />
              <HiTrash className='w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full p-2 cursor-pointer text-white' onClick={() => {
              }} />
            </td>
          </tr>
        ))}
      </TableData>
      <FormAddAutomation show={showFormAddAutomation} close={() => setShowFormAddAutomation(false)} submit={saveAutomation} />
    </div>
  )
}
