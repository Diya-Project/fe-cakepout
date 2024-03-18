import Menu from '@/components/templates/Menu'
import React, { ReactNode } from 'react'
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";




const menuData = [
    { link:'/home/cash-bank/', icon: <GiPayMoney className='w-28 h-28 text-white' />, color: 'bg-[#696969] hover:bg-[#494949]', title: "Pengeluaran" },
    { link:'/home/cash-bank/', icon: <GiTakeMyMoney className='w-28 h-28 text-white' />, color: 'bg-[#fa6607] hover:bg-[#c2530b]', title: "Uang Muka Pengeluaran" },
    { link:'/home/cash-bank/', icon: <GiReceiveMoney className='w-28 h-28 text-white' />, color: 'bg-[#089bcc] hover:bg-[#0b7497]', title: "Penerimaan" },
    { link:'/home/cash-bank/', icon: <GiTakeMyMoney className='w-28 h-28 text-white' />, color: 'bg-[#d51b21] hover:bg-[#a6171b]', title: "Uang Muka Penerimaan" },

]

export default function Page():ReactNode {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-4'>
            {menuData.map((e, i) => (
                <Menu link={e.link} key={i} color={e.color} logo={e.icon} title={e.title} />
            ))}
        </div>
    )
}
