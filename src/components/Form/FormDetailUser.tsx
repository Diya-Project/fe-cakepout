import React from 'react'
import Modal from '../templates/Modal'
import Title from '../custom/Title';
import nextArrow from "@/assets/icons/rightArrow.png"
import Image from 'next/image';

type FormDetailUserAttributes = {
    show: boolean,
    setShow: (e: boolean) => void;
}

export default function FormDetailUser({ show, setShow }: FormDetailUserAttributes) {
    return (
        <Modal title='Pengaturan' show={show} close={() => setShow(!show)}>
            <div className='flex flex-col gap-3 font-montserrat'>
                <Title title='Nama' value='Muhammad' />
                <Title title='Username' value='19910320141139' />
                <Title title='Role' value='Super Admin' />
                <Title title='Lembaga' value='Kebendaharaan' />
                <Title title='Status' value='Aktif' />
                <div className='w-full h-[2px] bg-slate-300'></div>
                <div className='flex cursor-pointer py-1 hover:bg-slate-100'>
                    <Image src={nextArrow} alt='' className='w-7 h-7'/>
                    <h1 className='mt-[3px] text-sky-700'>Edit</h1>
                </div>
            </div>
        </Modal>
    )
}
