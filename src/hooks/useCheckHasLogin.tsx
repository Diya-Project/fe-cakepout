import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function UseCheckHasLogin() {
    const session = useSession()
    const navigate = useRouter()
    useEffect(() => {
        if (session?.data?.user?.token !== null) {
            navigate.push('/home/data-master')
        } else {
            navigate.push('/')
        }
    }, [session?.data?.user?.token,navigate])
    return session
}
