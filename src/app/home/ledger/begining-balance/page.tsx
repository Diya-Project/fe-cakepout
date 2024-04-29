'use client'
import React, { useEffect } from 'react'
import { Location } from '../../TableData'
import TitleTable from '@/components/custom/TitleTable'
import FormBeginingBalance from './Form'
import { useGetAccountBeginingBalancing } from '@/hooks/react-query/useGetAccountBeginingBalancing'
import { useRouter } from 'next/navigation'
import Loading from '@/components/templates/Loading'

export default function page() {
    const navigate = useRouter()
    const allAccount = useGetAccountBeginingBalancing(true)
    console.log(allAccount?.data?.data)
    useEffect(() => {
        if (allAccount?.data?.data?.harta?.find((harta) => harta?.accounts?.find((account) => account.monthly_account_calculations.length! > 0))) {
            navigate.push('/home/ledger/journal')
        }
    }, [allAccount?.data?.data])
    return (
        <>
            <Location />
            <Loading show={allAccount?.isLoading} />
            <div className='border bg-white px-7 py-10 full rounded-sm shadow-md mt-[2vh]'>
                <div className='flex justify-between mb-5 h-[10%]'>
                    <TitleTable title={"Saldo Awal"} />
                </div>
                <FormBeginingBalance data={allAccount?.data?.data!} loading={allAccount?.isLoading} />
            </div>
        </>
    )
}
