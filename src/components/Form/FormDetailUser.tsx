import React, { ReactNode } from 'react'
import Modal from '../templates/Modal'
import Text from '../custom/Text';
import nextArrow from "@/assets/icons/rightArrow.png"
import Image from 'next/image';
import { useSession } from 'next-auth/react';

type FormDetailUserAttributes = {
    show: boolean,
    setShow: (e: boolean) => void;
}

export default function FormDetailUser({ show, setShow }: FormDetailUserAttributes):ReactNode {
    const session = useSession()
    return (
        <Modal title='Pengaturan' show={show} close={() => setShow(!show)}>
            <div className='flex flex-col gap-3 font-montserrat'>
                <Text title='Nama' value={session?.data?.user?.name!}/>
                <Text title='Username' value={session?.data?.user?.username!} />
                <Text title='Role' value={session?.data?.user?.role!} />
                <Text title='Status' value='Aktif' />
                <div className='w-full h-[2px] bg-slate-300'></div>
                <div className='flex cursor-pointer py-1 hover:bg-slate-100'>
                    <Image loading='lazy' placeholder='blur' src={nextArrow} alt='' className='w-7 h-7' />
                    <h1 className='mt-[3px] text-sky-700'>Edit</h1>
                </div>
            </div>
        </Modal>
    )
}
