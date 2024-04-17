'use client'
import React, { ReactNode, useState } from 'react'
import { DisbursementOfFundAttributes } from '@/type'
import Detail from '../Detail'
import Antrian from '../Antrian'

export default function Page(): ReactNode {
    const [oneDisbursementOfFund, setOneDisbursementOfFund] = useState<DisbursementOfFundAttributes | null>()
    const [oneUuidDisbursementOfFund, setOneUuidDisbursementOfFund] = useState<string>('')

    const getAnggaranDisbursementOfFund = (e: DisbursementOfFundAttributes) => {
        setOneDisbursementOfFund(e)
    }
    return (
        <>
            <div className='flex md:flex-row flex-col gap-7'>
                <Antrian
                    render={true}
                    clickDisbursementOfFund={getAnggaranDisbursementOfFund}
                    status={1}
                    approve={1}
                />
                <Detail
                    anggaran={oneDisbursementOfFund!}
                    confirm={(e: string | number | undefined) => {
                        e && typeof e === 'string' && setOneUuidDisbursementOfFund(e)
                    }}
                    titleButton='Journal'
                />
            </div>
        </>
    )
}
