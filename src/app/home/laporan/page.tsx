import React from 'react'
import shelf from "@/assets/icons/shelf.png"
import Menu from '@/components/templates/Menu'
import Image from 'next/image'

const menuData = [
    { link:'/home/laporan/anggaran/antrian', color: 'bg-sky-400', image: shelf, title: "Antrian Anggaran" },
    { link:'/home/laporan/anggaran/disetujui', color: 'bg-red-400', image: shelf, title: "Anggaran Disetujui" },
]

export default function page() {
    return (
        <div className='flex flex-wrap gap-x-[1%] gap-y-5 md:m-20'>
            {menuData.map((e, i) => (
                <Menu link={e.link} key={i} color={e.color} logo={<Image src={e.image} alt='' className='w-36 h-36 text-white' />} title={e.title} />
            ))}
        </div>
    )
}
