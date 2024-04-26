import Menu from '@/components/templates/Menu'
import React from 'react'
import { FaAddressBook } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { ImBook } from "react-icons/im";
import { FaCalculator } from "react-icons/fa";



const menuData = [
    { link: '/home/ledger/account-list', icon: <FaAddressBook className='w-36 h-36 text-white' />, color: 'bg-[#6978d6] hover:bg-[#5b68b9]', title: "Daftar Akun" },
    { link: '/home/ledger/book', icon: <ImBooks className='w-36 h-36 text-white' />, color: 'bg-[#57575e] hover:bg-[#414146]', title: "Buku Besar" },
    { link: '/home/ledger/journal', icon: <ImBook className='w-36 h-36 text-white' />, color: 'bg-[#bf7c58] hover:bg-[#a2694a]', title: "Jurnal Umum" },
    { link: '/home/ledger/journal-calculation', icon: <FaCalculator className='w-36 h-36 text-white' />, color: 'bg-[#145b80] hover:bg-[#104a67]', title: "Kalkulasi Jurnal" },

]

export default function Page() {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-4'>
            {menuData.map((e, i) => (
                <Menu link={e.link} key={i} color={e.color} logo={e.icon} title={e.title} />
            ))}
        </div>
    )
}
