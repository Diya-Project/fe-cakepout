'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";


export default function Pagination({ page, allPage, setPage }: { page: number, allPage: number, setPage: Dispatch<SetStateAction<number | null>> }) {
    const [pageNow, setPageNow] = useState(page)
    const previousPage = () => {
        if (pageNow > 1) {
            setPageNow((e) => e - 1)
        }
    }
    const nextPage = () => {
        if (pageNow < allPage) {
            setPageNow((e) => e + 1)
        }
    }
    useEffect(() => {
        setPage(pageNow)
    }, [pageNow, setPage])
    return (
        <div className='h-[100%] flex justify-end items-end w-[100%]'>
            <div className='flex gap-3'>
                <IoMdArrowDropleft className='w-8 h-8 text-sky-600 cursor-pointer border border-sky-600 rounded-full hover:bg-sky-100' onClick={previousPage} />
                <div className='flex gap-1 my-auto font-montserrat text-sm text-gray-800'>
                    <h1>{pageNow}</h1>
                    <h1>/</h1>
                    <h1>{allPage}</h1>
                </div>
                <IoMdArrowDropright className='w-8 h-8 text-sky-600 cursor-pointer border border-sky-600 rounded-full hover:bg-sky-100' onClick={nextPage} />
            </div>
        </div>
    )
}
