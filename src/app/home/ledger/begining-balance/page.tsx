'use client'
import React from 'react'
import { Location } from '../../TableData'
import { useSession } from 'next-auth/react'
import TitleTable from '@/components/custom/TitleTable'
import FormBeginingBalance from './Form'
import { useGetAccountBeginingBalancing } from '@/hooks/react-query/useGetAccountBeginingBalancing'

export default function page() {
    const session = useSession()
    const allAccount = useGetAccountBeginingBalancing(true)
    return (
        <>
            <Location />
            <div className='border bg-white px-7 py-10 full rounded-sm shadow-md mt-[2vh]'>
                <div className='flex justify-between mb-5 h-[10%]'>
                    <TitleTable title={"Saldo Awal"} />
                </div>
                <FormBeginingBalance data={allAccount?.data?.data!} loading={allAccount?.isLoading}/>
            </div>
        </>
    )
}
