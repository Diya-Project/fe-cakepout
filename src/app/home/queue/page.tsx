import React, { ReactNode } from 'react'
import Menu from '@/components/templates/Menu'
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiQueue } from "react-icons/pi";
import { LuListChecks } from 'react-icons/lu';

const menuData = [
    { link: '/home/queue/budget', icon: <HiOutlineQueueList className='w-36 h-36 text-white' />, color: 'bg-[#28436d] hover:bg-[#223759]', title: "Antrian Anggaran" },
    { link: '/home/queue/approve', icon: <PiQueue className='w-36 h-36 text-white' />, color: 'bg-[#daa551] hover:bg-[#b28641]', title: "Anggaran Disetujui" },
    { link: '/home/queue/succes', icon: <LuListChecks className='w-36 h-36 text-white' />, color: 'bg-[#4ac4b5] hover:bg-[#3fa699]', title: "Anggaran Terlaksana" },
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
