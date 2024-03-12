import Menu from '@/components/templates/Menu'
import React from 'react'
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";




const menuData = [
    { icon: <GiPayMoney className='w-28 h-28 text-white' />, color: 'bg-[#696969] hover:bg-[#494949]', title: "Pengeluaran" },
    { icon: <GiTakeMyMoney className='w-28 h-28 text-white' />, color: 'bg-[#fa6607] hover:bg-[#c2530b]', title: "Uang Muka Pengeluaran" },
    { icon: <GiReceiveMoney className='w-28 h-28 text-white' />, color: 'bg-[#089bcc] hover:bg-[#0b7497]', title: "Penerimaan" },
    { icon: <GiTakeMyMoney className='w-28 h-28 text-white' />, color: 'bg-[#d51b21] hover:bg-[#a6171b]', title: "Uang Muka Penerimaan" },

]

export default function Page() {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-4 md:m-20 m-5'>
            {menuData.map((e, i) => (
                <Menu link='' key={i} color={e.color} logo={e.icon} title={e.title} />
            ))}
        </div>
    )
}
