import Button from '@/components/custom/Button'
import TitleTable from '@/components/custom/TitleTable'
import EmptyTable from '@/components/templates/EmptyTable'
import Table from '@/components/templates/Table'
import { AccountAttributes } from '@/type'
import { usePathname } from 'next/navigation'
import React, { MouseEventHandler, ReactNode } from 'react'

type TableData = {
    title: string;
    clickAdd: MouseEventHandler<HTMLButtonElement>;
    data: Array<AccountAttributes | { value: string, label: string }>;
    head: Array<string | false>;
    children: ReactNode;
    pages?: ReactNode;
    calculate?: ReactNode;
    filters?: ReactNode;
}

function Location() {
    const pathname = usePathname()
    const pathanamePart = pathname.split('/')
    pathanamePart.shift()
    return (
        <div key={''} className='flex'>
            {pathanamePart.map((e, i) => {
                if (i === pathanamePart.length - 1) {
                    return <div key={i}>
                        <div className='bg-sky-600 rounded-full p-2 text-xs text-white'>{e}</div>
                    </div>
                } else {
                    return <div key={i} className='flex'>
                        <div className='bg-sky-600 rounded-full p-2 text-xs text-white'>{e}</div>
                        <div className='w-3 h-1 bg-sky-600 my-auto'></div>
                    </div>
                }
            })}
        </div>
    )
}

export default function TableData({ title, clickAdd, children, data, head, pages, calculate, filters }: TableData): ReactNode {
    return (
        <>
            <Location />
            <div className='border bg-white px-7 py-10 full rounded-sm shadow-md mt-[2vh]'>
                <div className='flex justify-between mb-5 h-[10%]'>
                    <div className='flex gap-5'>
                        <TitleTable title={title} />
                        {filters}
                    </div>
                    <div className='flex gap-2 items-end'>
                        <Button title='Buat Baru' click={clickAdd} />
                        <div className='bg-white h-[10%] mb-1'>
                            {data?.length > 0 ?
                                <>
                                    {pages}
                                </>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
                <div className='h-[80%]'>
                    {data?.length > 0 ?
                        <Table head={head}>
                            {children}
                        </Table>
                        :
                        <EmptyTable />
                    }
                </div>
                {calculate}
            </div>
        </>
    )
}
