import { MouseEventHandler, ReactNode } from 'react'
import cross from "@/assets/icons/cross.png"
import Image from 'next/image';
import { GrClose } from "react-icons/gr";

type ModalAttributes = {
    show: boolean;
    title: string;
    close: MouseEventHandler<SVGAElement>
    children: ReactNode;
    scroll?: boolean
}

export default function Modal({ show, title, children, close, scroll }: ModalAttributes) {
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-50 z-50 flex justify-center items-start ${show ? 'visible' : 'invisible'}`}>
            <div className={`md:w-[50vw] w-[95vw] bg-white mt-20 max-h-[85%] transition-all ease-in-out duration-500 ${scroll ? 'overflow-y-auto scrollbar-hide ' : ''} ${show ? 'scale-100' : 'scale-0'}`}>
                <div className='border-b border-slate-300 h-[7%] flex justify-between p-3 sticky top-0 bg-white z-10'>
                    <h4 className='font-montserrat font-semibold'>{title}</h4>
                    <GrClose className='w-6 h-6 cursor-pointer' onClick={close} />
                </div>
                <div className={`h-[93%] p-4`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
