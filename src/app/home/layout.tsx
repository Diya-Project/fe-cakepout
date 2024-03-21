
import HeaderMenu from '@/components/templates/HeaderMenu';
import React, { ReactNode } from 'react'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): ReactNode {
    return (
        <>
            <div className='mt-[10vh] h-[90vh] overflow-x-hidden scrollbar-hide md:py-10 py-2 md:px-20 px-5 bg-slate-100 overflow-y-hidden'>
                {children}
            </div>
            <HeaderMenu />
        </>
    )
}
