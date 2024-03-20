'use client'
import useGetAllInstitution from '@/hooks/react-query/useGetAllInstitution'
import { InstitutionAttributes } from '@/type'
import { useEffect, useState } from 'react'

export default function useInstitutionOptions() {
    const institution = useGetAllInstitution()
    const [institutionOptions, setInstitutionOptions] = useState([])
    useEffect(() => {
        if (institution.data?.data) {
            setInstitutionOptions(institution?.data?.data?.map((e: InstitutionAttributes) => {
                return { value: e.no_lembaga, label: e.nama_lembaga }
            }))
        }
    }, [institution.data?.data])
    return institutionOptions

}
