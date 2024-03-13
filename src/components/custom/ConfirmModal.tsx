import React, { MouseEventHandler } from 'react'
import Modal from '../templates/Modal'

type ConfrimModalAttributes = {
    show: boolean,
    close: MouseEventHandler<SVGAElement>
    msg: string;
    onClick: () => void;
}

export default function ConfirmModal({ show, close, msg, onClick }: ConfrimModalAttributes) {
    return (
        <Modal title='Konfirmasi' show={show} close={close}>
            <div className='bg-white rounded-b-xl'>
                <div className='border-b border-slate-200 pb-5 mb-5'>
                    <h1 className='text-lg font-montserrat'>{msg}</h1>
                </div>
                <div className='px-1 w-full'>
                    <button onClick={onClick} className='bg-sky-700 text-white hover:bg-sky-800  w-full px-8 py-2 transition-colors ease-in-out duration-300'>Iya</button>
                </div>
            </div>
        </Modal>
    )
}
