import Button from '@/components/custom/Button'
import TitleTable from '@/components/custom/TitleTable'
import EmptyTable from '@/components/templates/EmptyTable'
import Table from '@/components/templates/Table'
import { AccountAttributes } from '@/type'
import React, { MouseEventHandler, ReactNode } from 'react'

type TableData = {
    title: string;
    clickAdd: MouseEventHandler<HTMLButtonElement>;
    data: Array<AccountAttributes | { value: string, label: string }>;
    head: Array<string>;
    children: ReactNode;
}

export default function TableData({ title, clickAdd, children, data, head }: TableData): ReactNode {
    return (
        <div className='border bg-white px-7 py-10 h-[75vh] rounded-sm shadow-md'>
            <div className='flex justify-between mb-5'>
                <TitleTable title={title} />
                <Button title='Buat Baru' click={clickAdd} />
            </div>
            {data?.length > 0 ?
                <Table head={head}>
                    {children}
                </Table>
                :
                <EmptyTable />
            }
        </div>)
}
