
import HeaderMenu from '@/components/templates/HeaderMenu';
import React, { ReactNode } from 'react'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>):ReactNode {
    return (
        <>
            <HeaderMenu />
            <div className='mt-[10vh] h-[90vh] overflow-x-hidden scrollbar-hide md:p-20 p-5 bg-slate-100'>
                {children}
            </div>
        </>
    )
}
