import React from 'react'
import { TbListDetails } from 'react-icons/tb'

export default function Header({ title }: { title: string }) {
    return (
        <div className='p-4 border rounded-md shadow-md h-[10%] flex'>
            <TbListDetails className='w-6 h-6 my-auto mr-2' />
            <h1 className='font-montserrat text-lg font-semibold text-slate-800 my-auto'>{title}</h1>
        </div>
    )
}