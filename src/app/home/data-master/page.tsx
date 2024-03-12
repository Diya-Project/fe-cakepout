'use client'
import Menu from '@/components/templates/Menu'
import React from 'react'
import { FaAddressBook } from 'react-icons/fa';
import { RiContactsBookFill } from "react-icons/ri";
import { MdMargin, MdProductionQuantityLimits } from "react-icons/md";
import { LuListStart, LuScale } from "react-icons/lu";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiBuildingsFill, PiCoinsFill } from "react-icons/pi";
import { LiaThListSolid } from 'react-icons/lia';
import { HiReceiptTax } from 'react-icons/hi';



const menuData = [
    { icon: <RiContactsBookFill className='w-36 h-36 text-white' />, color: 'bg-[#72895c] hover:bg-[#5a6c48]', title: "Data Kontak" },
    { icon: <FaAddressBook className='w-36 h-36 text-white' />, color: 'bg-[#f44336] hover:bg-[#c9382d]', title: "Daftar Akun" },
    { icon: <MdProductionQuantityLimits className='w-36 h-36 text-white' />, color: 'bg-[#2e5894] hover:bg-[#1d3962]', title: "Data Produk" },
    { icon: <LuScale className='w-36 h-36 text-white' />, color: 'bg-[#c2a57b] hover:bg-[#a18965]', title: "Satuan Pengukuran" },
    { icon: <HiBuildingOffice className='w-36 h-36 text-white' />, color: 'bg-[#f28a3f] hover:bg-[#d47b3b]', title: "Data Gudang" },
    { icon: <PiBuildingsFill className='w-36 h-36 text-white' />, color: 'bg-[#536777] hover:bg-[#3f4e5b]', title: "Data Departemen" },
    { icon: <LiaThListSolid className='w-36 h-36 text-white' />, color: 'bg-[#5c80bc] hover:bg-[#4d6b9e]', title: "Data Proyek" },
    { icon: <PiCoinsFill className='w-36 h-36 text-white' />, color: 'bg-[#b1b4a9] hover:bg-[#969990]', title: "Data Mata Uang" },
    { icon: <HiReceiptTax className='w-36 h-36 text-white' />, color: 'bg-[#e8c547] hover:bg-[#cdae3f]', title: "Data Pajak" },
    { icon: <MdMargin className='w-36 h-36 text-white' />, color: 'bg-[#5d397b] hover:bg-[#4b2d64]', title: "Data Harta Tetap" },
    { icon: <LuListStart className='w-36 h-36 text-white' />, color: 'bg-[#6aa84f] hover:bg-[#568940]', title: "Data Lain" },
]

export default function Page() {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-5 md:m-20 m-5'>
            {menuData.map((e, i) => (
                <Menu link='' key={i} color={e.color} logo={e.icon} title={e.title} />
            ))}
        </div>
    )
}
