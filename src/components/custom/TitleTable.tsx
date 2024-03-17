import React, { ReactNode } from 'react'

export default function TitleTable({ title }: { title: string }):ReactNode {
    return (
        <h1 className='font-montserrat text-2xl text-sky-800 font-semibold my-auto'>{title}</h1>
    )
}
