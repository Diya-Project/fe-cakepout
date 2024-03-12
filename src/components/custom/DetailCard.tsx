import React, { ReactNode } from 'react'

function DetailText({ title, value }: { title: string, value: string | number | undefined }) {
    return (
        <div className='ml-4 text-slate-800 my-auto'>
            <h1 className='font-montserrat font-bold mt-[2px] text-xl'>{title}</h1>
            {value ?
                <h1 className='mt-1 text-lg font-semibold text-sky-800'>{value}</h1>
                :
                <>
                    <div className='w-[200px] h-[8px] mt-2 bg-slate-300 rounded-lg animate-pulse' />
                    <div className='w-[170px] h-[8px] mt-2 bg-slate-300 rounded-lg animate-pulse' />
                </>
            }
        </div>

    )
}

export default function DetailCard({ icon, title, value }: { icon: ReactNode, title: string, value: string | number | undefined }) {
    return (
        <div className='md:w-[49%] w-[100%] bg-white p-3 shadow-lg border rounded-md flex'>
            {icon}
            <DetailText title={title} value={value} />
        </div>
    )
}
