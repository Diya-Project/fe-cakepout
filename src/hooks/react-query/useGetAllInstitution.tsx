

import api from '@/app/api/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetAllInstitution() {
    const institution = useQuery({
        queryKey: ['get_all_institution'],
        queryFn: () => api.get(`/apakah/institution`)
    })
    useEffect(() => {
        institution.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return institution
}
