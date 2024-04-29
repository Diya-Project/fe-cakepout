import React, { MouseEventHandler, ReactNode } from 'react'
import Modal from '../templates/Modal'

type ConfrimModalAttributes = {
    show: boolean,
    close: MouseEventHandler<SVGAElement>
    children: ReactNode
}

export default function DetailModal({ show, close, children }: ConfrimModalAttributes): ReactNode {
    return (
        <Modal title='Rincian' show={show} close={close}>
            <div className='bg-white rounded-b-xl'>
                <div className='border-b border-slate-200 pb-5 mb-5'>
                    {children}
                </div>
            </div>
        </Modal>
    )
}
