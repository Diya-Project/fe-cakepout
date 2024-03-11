import React, { ReactNode } from 'react'
import { PiQueueDuotone } from "react-icons/pi";

type ListCardAttributes = {
    title: string;
    children: ReactNode;

}

export default function ListCard({ title, children }: ListCardAttributes) {
    return (
        <div className='md:w-[30%] w-[100%] h-[84vh] relative bg-white'>
            <div className='p-4 border shadow-md rounded-md flex'>
                <PiQueueDuotone className='w-6 h-6 my-auto mr-2' />
                <h1 className='font-montserrat text-lg font-semibold text-slate-800 my-auto'>{title}</h1>
            </div>
            <div className='h-[90%] py-3 overflow-y-auto scrollbar-hide flex flex-col gap-2'>
                {children}
            </div>
        </div>
    )
}
