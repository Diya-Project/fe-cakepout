import React, { ReactNode } from 'react'
import Menu from '@/components/templates/Menu'
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiQueue } from "react-icons/pi";
import { MdOutlineBalance } from 'react-icons/md';
import { GiProfit } from 'react-icons/gi';
import { FaArrowsRotate } from 'react-icons/fa6';

const menuData = [
    { link: '/home/report/balance-statement', icon: <MdOutlineBalance className='w-36 h-36 text-white' />, color: 'bg-[#28436d] hover:bg-[#223759]', title: "Neraca" },
    { link: '/home/report/income-statement', icon: <GiProfit className='w-36 h-36 text-white' />, color: 'bg-[#daa551] hover:bg-[#b28641]', title: "Laba Rugi" },
    { link: '/home/report/cash-flow-statement', icon: <FaArrowsRotate className='w-36 h-36 text-white' />, color: 'bg-[#00c190] hover:bg-[#05aa80]', title: "Arus Kas" },
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
