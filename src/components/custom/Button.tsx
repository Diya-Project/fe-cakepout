import React from 'react'

type ButtonAttributes = {
    click: (e: any) => void;
    title: string;
}

export default function Button({ click, title }: ButtonAttributes) {
    return (
        <button
            onClick={click}
            className={`text-white my-1 rounded-md px-5 py-2 font-montserrat bg-sky-600 hover:bg-sky-700 hover:text-white`}>
            {title}
        </button>
    )
}
