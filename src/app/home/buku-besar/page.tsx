import Menu from '@/components/templates/Menu'
import Image from 'next/image'
import React from 'react'
import shelf from "@/assets/icons/shelf.png"

const menuData = [
    { color: 'bg-sky-400', image: shelf, title: "Data Kontak" },
    { color: 'bg-red-400', image: shelf, title: "Data Produk" },
    { color: 'bg-green-400', image: shelf, title: "Satuan Pengukuran" },
    { color: 'bg-blue-400', image: shelf, title: "Data Gudang" },
    { color: 'bg-slate-400', image: shelf, title: "Data Departemen" },
    { color: 'bg-yellow-400', image: shelf, title: "Data Proyek" },
    { color: 'bg-purple-400', image: shelf, title: "Data Mata Uang" },
    { color: 'bg-orange-400', image: shelf, title: "Data Pajak" },
    { color: 'bg-gray-400', image: shelf, title: "Data Harta Tetap" },
    { color: 'bg-red-400', image: shelf, title: "Data Lain" },
]

export default function page() {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-4'>
            {menuData.map((e, i) => (
                <Menu link='' key={i} color={e.color} logo={<Image src={e.image} alt='' className='w-36 h-36 text-white' />} title={e.title} />
            ))}
        </div>
    )
}
