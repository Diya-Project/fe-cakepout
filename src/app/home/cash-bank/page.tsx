import Menu from '@/components/templates/Menu'
import React, { ReactNode, useState } from 'react'
import { FaCalculator } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'
import { PiNotebookFill } from 'react-icons/pi'




const menuData = [
    { link: '/home/cash-bank/journal', icon: <ImBook className='w-36 h-36 text-white' />, color: 'bg-[#bf7c58] hover:bg-[#a2694a]', title: "Penginputan Jurnal" },
    { link: '/home/cash-bank/begining-balance', icon: <FaCalculator className='w-36 h-36 text-white' />, color: 'bg-[#145b80] hover:bg-[#104a67]', title: "Pengisian Saldo Awal" },
    { link: '/home/cash-bank/close-book', icon: <PiNotebookFill className='w-36 h-36 text-white' />, color: 'bg-[#00c190] hover:bg-[#02af83]', title: "Tutup Buku" },


]

export default function Page(): ReactNode {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-4'>
            {menuData.map((data, index) => (
                <Menu link={data.link} key={index} color={data.color} logo={data.icon} title={data.title} />
            ))}
        </div>
    )
}
