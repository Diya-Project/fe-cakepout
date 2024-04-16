import { useEffect, useState } from "react"

export default function useShowMessage(data: any): { show: boolean, message: string, status: boolean } {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    useEffect(() => {
        console.log(data)
        if (data?.data?.status === 200) {
            setMessage(data?.data?.data?.msg)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }
        else if (data?.error?.response?.status === 400) {
            setMessage(data?.error?.response?.data?.msg)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }
    }, [data.data, data.error])
    return { show: showMessage, message: message, status: data?.data?.status === 200 ? true : false }
}