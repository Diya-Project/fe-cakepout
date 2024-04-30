import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function useNavigate(status: number, location: string): void {
    const navigate = useRouter()
    useEffect(() => {
        if (status === 200) {
            navigate.push(location)
        }
    }, [status])
}
