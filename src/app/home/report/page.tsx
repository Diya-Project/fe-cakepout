import React, { ReactNode } from 'react'
import Menu from '@/components/templates/Menu'
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiQueue } from "react-icons/pi";

const menuData = [
    { link: '/home/report/balance-sheet', icon: <HiOutlineQueueList className='w-36 h-36 text-white' />, color: 'bg-[#28436d] hover:bg-[#223759]', title: "Neraca" },
    { link: '/home/report/cash-flow', icon: <PiQueue className='w-36 h-36 text-white' />, color: 'bg-[#daa551] hover:bg-[#b28641]', title: "Laba Rugi" },
    { link: '/home/report/profit-loss', icon: <PiQueue className='w-36 h-36 text-white' />, color: 'bg-[#daa551] hover:bg-[#b28641]', title: "Arus Kas" },
]

export default function Page(): ReactNode {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-5'>
            {menuData.map((e, i) => (
                <Menu link={e.link} key={i} color={e.color} logo={e.icon} title={e.title} />
            ))}
        </div>
    )
}
