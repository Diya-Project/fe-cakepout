'use client'
import React, { useRef, useState } from 'react'
import { menu } from '../constants/HeadMenu'
import Link from 'next/link'
import Image from 'next/image'
import LogoPAH from "@/assets/logo.png"
import useClickOutside from '@/hooks/useClickOutside'
import userCircle from "@/assets/icons/userCircle.png"
import FormDetailUser from '../Form/FormDetailUser'
import Title from '../custom/Title'


function HeadMenu() {
  return menu.map((e, i) => (
    <Link key={i} className='text-white font-montserrat cursor-pointer' href={e.link}>{e.title}</Link>
  ))
}


function ProfileMenu({ title, click }: { title: string, click: () => void }) {
  return <div className='font-semibold font-montserrat text-slate-800 hover:text-sky-600 cursor-pointer' onClick={click}>{title}</div>
}

export default function Header() {
  const [profileMenu, setProfileMenu] = useState(false)
  const [showFormDetailUser, setShowFormDetailUser] = useState(false)
  const profileRef = useRef<any>()
  useClickOutside(profileRef, () => setProfileMenu(false))
  return (
    <header className='w-[100vw] h-[10vh] bg-sky-700 p-3 flex md:justify-between justify-end items-center fixed top-0'>
      <div className='md:flex hidden items-center gap-8'>
        <Image className='w-14 h-14' src={LogoPAH} alt='LogoPAH' />
        <ul className='flex gap-8'>
          <HeadMenu />
        </ul>
      </div>
      <div ref={profileRef} className='relative'>
        <Image src={userCircle} alt='' className='w-10 h-10 fill-white' onClick={() => setProfileMenu(!profileMenu)} />
        <div className={`absolute p-6 right-0 top-20 w-72 bg-white shadow-lg border border-slate-200 transition-all ease-in-out duration-300 flex flex-col gap-6 ${profileMenu ? 'block' : 'hidden'}`}>
          <Title title='User' value='Muhammad' />
          <ProfileMenu click={() => console.log("hello")} title='Profile Aktif' />
          <ProfileMenu click={() => console.log("hello")} title='Ubah Kata Sandi' />
          <Title title='Lembaga' value='Kebendaharaan' />
          <Title title='Kadaluarsa' value='30 Februari 2024' />
          <ProfileMenu click={() => {
            setProfileMenu(false)
            setShowFormDetailUser(true)
          }} title='Pengaturan' />
          <ProfileMenu click={() => console.log("hello")} title='Keluar' />
        </div>
      </div>
      <FormDetailUser show={showFormDetailUser} setShow={setShowFormDetailUser} />
    </header>
  )
}
