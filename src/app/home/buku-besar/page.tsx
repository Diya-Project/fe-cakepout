import Menu from '@/components/templates/Menu'
import React from 'react'
import { FaAddressBook } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { ImBook } from "react-icons/im";




const menuData = [
    { icon: <FaAddressBook className='w-36 h-36 text-white' />, color: 'bg-[#f44336] hover:bg-[#c9382d]', title: "Daftar Akun" },
    { icon: <ImBooks className='w-36 h-36 text-white' />, color: 'bg-[#000033] hover:bg-[#01011e]', title: "Buku Besar" },
    { icon: <ImBook className='w-36 h-36 text-white' />, color: 'bg-[#f6b26b] hover:bg-[#cf9559]', title: "Jurnal Umum" },

]

export default function page() {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-4 md:m-20 m-5'>
            {menuData.map((e, i) => (
                <Menu link='' key={i} color={e.color} logo={e.icon} title={e.title} />
            ))}
        </div>
    )
}
