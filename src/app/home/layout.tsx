
import Header from '@/components/templates/Header';
import React from 'react'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div className='mt-[10vh] h-[90vh] overflow-x-hidden scrollbar-hide'>
                {children}
            </div>
        </>
    )
}
