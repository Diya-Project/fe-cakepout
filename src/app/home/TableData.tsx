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
    head: Array<string>;
    children: ReactNode;
    pages?: ReactNode;
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

export default function TableData({ title, clickAdd, children, data, head, pages }: TableData): ReactNode {
    return (
        <>
            <Location />
            <div className='border bg-white px-7 py-10 md:h-[73vh] full rounded-sm shadow-md mt-[2vh]'>
                <div className='flex justify-between mb-5 h-[10%]'>
                    <TitleTable title={title} />
                    <Button title='Buat Baru' click={clickAdd} />
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
                <div className='bg-white h-[10%] md:mt-0 mt-[5%]'>
                    {data?.length > 0 ?
                        <>
                            {pages}
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}
