'use client'
import React, { ChangeEventHandler, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Input from '../fields/Input';


export default function Pagination({ page, allPage, setPage, value, setValue }: { page: number, allPage: number, setPage: Dispatch<SetStateAction<number>>, value: number, setValue: ChangeEventHandler<HTMLInputElement> }) {
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
    }, [pageNow, setPage, page])
    useEffect(() => {
        setPageNow(1)
    }, [value])
    return (
        <div className='h-[100%] flex justify-end items-end w-[100%]'>
            <div className='flex md:flex-row flex-col gap-3 items-end'>
                <Input id='ditampilkan' title='Ditampilkan / halaman' type='number' value={value} setValue={setValue} />
                <div className='flex gap-3 items-end justify-end'>
                    <IoMdArrowDropleft className='w-8 h-8 text-sky-600 cursor-pointer border border-sky-600 rounded-full hover:bg-sky-100' onClick={previousPage} />
                    <div className='flex gap-1 my-auto font-montserrat text-sm text-gray-800'>
                        <h1>{pageNow}</h1>
                        <h1>/</h1>
                        <h1>{allPage}</h1>
                    </div>
                    <IoMdArrowDropright className='w-8 h-8 text-sky-600 cursor-pointer border border-sky-600 rounded-full hover:bg-sky-100' onClick={nextPage} />
                </div>
            </div>
        </div>
    )
}
