'use client'
import React, { ReactNode, useRef, useState } from 'react'
import { menu } from '../constants/HeadMenu'
import Link from 'next/link'
import Image from 'next/image'
import LogoPAH from "@/assets/logo.png"
import useClickOutside from '@/hooks/useClickOutside'
import userCircle from "@/assets/icons/userCircle.png"
import FormDetailUser from '../Form/FormDetailUser'
import { usePathname } from 'next/navigation'
import Text from "@/components/custom/Text"
import { signOut, useSession } from 'next-auth/react'


function HeadMenu(): ReactNode {
  const pathName = usePathname()
  const [activeMenu, setActiveMenu] = useState<string>(pathName)
  return menu.map((e, i) => (
    <Link key={i} onClick={() => setActiveMenu(e.link)} className={`text-white font-montserrat cursor-pointer h-[100%] flex items-center uppercase text-sm ${activeMenu === e.link || activeMenu?.split('/')[2] === e.link?.split('/')[2] ? 'border-b-2 border-white' : ''}`} href={e.link}>{e.title}</Link>
  ))
}

function ProfileMenu({ title, click }: { title: string, click: () => void }): ReactNode {
  return <div className='font-semibold font-montserrat text-slate-800 hover:text-sky-600 cursor-pointer' onClick={click}>{title}</div>
}

function SideMenu({ profileMenu, setProfileMenu, setShowFormDetailUser }: { profileMenu: boolean, setProfileMenu: (e: boolean) => void, setShowFormDetailUser: (e: boolean) => void }): ReactNode {
  const session = useSession()
  return (
    <div className={`absolute p-6 right-0 top-20 w-72 bg-white shadow-lg border border-slate-200 transition-all ease-in-out duration-300 flex flex-col gap-6 ${profileMenu ? 'block' : 'hidden'}`}>
      <Text title='User' value={session?.data?.user?.name!} />
      <ProfileMenu click={() => {
        setProfileMenu(false)
        setShowFormDetailUser(true)
      }} title='Pengaturan' />
      <ProfileMenu click={() => signOut()} title='Keluar' />
    </div>
  )
}

export default function HeaderMenu(): ReactNode {
  const [profileMenu, setProfileMenu] = useState(false)
  const [showFormDetailUser, setShowFormDetailUser] = useState(false)
  const profileRef = useRef<any>()
  useClickOutside(profileRef, () => setProfileMenu(false))
  return (
    <header className='w-[100vw] h-[10vh] bg-sky-600 flex md:justify-between justify-end items-center fixed top-0'>
      <div className='md:flex hidden gap-8 h-[100%]'>
        <Image className='w-14 h-14 m-3' src={LogoPAH} alt='LogoPAH' />
      </div>
      <ul className='flex gap-8 h-[100%]'>
        <HeadMenu />
      </ul>
      <div ref={profileRef} className='relative'>
        <Image src={userCircle} alt='' className='w-10 h-10 fill-white m-3' onClick={() => setProfileMenu(!profileMenu)} />
        <SideMenu profileMenu={profileMenu} setProfileMenu={setProfileMenu} setShowFormDetailUser={setShowFormDetailUser} />
      </div>
      <FormDetailUser show={showFormDetailUser} setShow={setShowFormDetailUser} />
    </header>
  )
}
