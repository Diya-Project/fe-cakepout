import React, { ReactNode } from 'react'

type ButtonAttributes = {
    click: (e:string|number|undefined) => void;
    value?: string | number | undefined;
    title: string;
}

export default function ConfirmButton({ click, value, title }: ButtonAttributes):ReactNode {
    return (
        <button
            onClick={() => click(value)}
            className={`text-white bottom-0 right-0 m-3 rounded-md px-10 py-2 font-montserrat bg-sky-600 hover:bg-sky-700 hover:text-white ${value ? "block" : "hidden"}`}>
            {title}
        </button>
    )
}
