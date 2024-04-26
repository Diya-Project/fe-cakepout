import { useEffect, useState } from "react"

export default function useShowMessage(data: any): { show: boolean, message: string, status: boolean } {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    useEffect(() => {
        let errorStatus = [403, 400, 404]
        if (data?.data?.status === 200) {
            setMessage(data?.data?.data?.message)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }
        else if (errorStatus.includes(data?.error?.response?.status)) {
            setMessage(data?.error?.response?.data?.message)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }
    }, [data.data, data.error])
    return { show: showMessage, message: message, status: data?.data?.status === 200 ? true : false }
}