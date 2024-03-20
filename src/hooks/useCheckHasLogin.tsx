import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function UseCheckHasLogin(): void {
    const session = useSession()
    const navigate = useRouter()
    useEffect(() => {
        if (session?.data?.user?.token !== null) {
            navigate.push('/home/ledger')
        } else {
            navigate.push('/')
        }
    }, [session?.data?.user?.token, navigate])
}
