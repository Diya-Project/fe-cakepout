import { useEffect, useState } from "react"

export default function useShowMessage(data: any) {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    useEffect(() => {
        if (data?.status) {
            setMessage(data?.data?.msg)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }
    }, [data])
    return { show: showMessage, message: message,status:data?.status === 200 ? true:false }
}