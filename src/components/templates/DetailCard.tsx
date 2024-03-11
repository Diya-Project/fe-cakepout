import React, { ReactNode } from 'react'
import { TbListDetails } from "react-icons/tb";


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

type DetailCardAttributes = {
    title: string;
    data: Array<{ title: string, value: string | number | undefined, icon: ReactNode }>;
    click: (e: string | number | undefined) => void;
    value: string | number | undefined
}

export default function DetailCard({ title, data, click, value }: DetailCardAttributes) {
    return (
        <div className='md:w-[70%] w-[100%] bg-white'>
            <div className='p-4 border rounded-md shadow-md h-[10%] flex'>
                <TbListDetails className='w-6 h-6 my-auto mr-2' />
                <h1 className='font-montserrat text-lg font-semibold text-slate-800 my-auto'>{title}</h1>
            </div>
            <div className='h-[80%] py-3 flex flex-wrap md:gap-5 gap-3'>
                {data.map((e, i) => (
                    <div key={i} className='md:w-[49%] w-[100%] bg-white p-3 shadow-lg border rounded-md flex'>
                        {e.icon}
                        <DetailText key={i} title={e.title} value={e.value} />
                    </div>
                ))}
            </div>
            <div className='flex justify-end borderrounded-md shadow-md'>
                <button onClick={() => click(value)} className={` bottom-0 right-0 m-3 rounded-md border border-sky-700 px-10 py-2 font-montserrat hover:bg-sky-700 hover:text-white ${value ? "block" : "hidden"}`}>Setujui</button>
            </div>
        </div>)
}
