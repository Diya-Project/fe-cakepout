import React from 'react'
import Menu from '@/components/templates/Menu'
import { MdOutlinePointOfSale } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { ImList } from "react-icons/im";
import { RiSecurePaymentFill } from "react-icons/ri";


const menuData = [
    { icon: <MdOutlinePointOfSale className='w-36 h-36 text-white' />, link: '/home/laporan/anggaran/antrian', color: 'bg-[#ab744b] hover:bg-[#91623f]', title: "Faktur Pembelian" },
    { icon: <GiReturnArrow className='w-36 h-36 text-white' />, link: '/home/laporan/anggaran/disetujui', color: 'bg-[#88d3ff] hover:bg-[#75b4d9]', title: "Retur Pembelian" },
    { icon: <ImList className='w-36 h-36 text-white' />, link: '/home/laporan/anggaran/disetujui', color: 'bg-[#d9c457] hover:bg-[#b2a24a]', title: "Daftar Utang Usaha" },
    { icon: <RiSecurePaymentFill className='w-36 h-36 text-white' />, link: '/home/laporan/anggaran/disetujui', color: 'bg-[#888997] hover:bg-[#6b6c76]', title: "Pembayaran Utang Usaha" },
]

export default function page() {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-5 md:m-20'>
            {menuData.map((e, i) => (
                <Menu link={e.link} key={i} color={e.color} logo={e.icon} title={e.title} />
            ))}
        </div>
    )
}
