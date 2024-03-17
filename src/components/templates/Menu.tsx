import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function Menu({ logo, title, color, link }: { logo: ReactNode, title: string, color?: string, link: string }):ReactNode {
  return (
    <Link href={link} className={`${color} md:w-[20.78rem] h-[20.78rem] w-full flex flex-col justify-center items-center gap-3 cursor-pointer`}>
      {logo}
      <h1 className='text-white text-xl font-montserrat mt-5'>{title}</h1>
    </Link>
  )
}
