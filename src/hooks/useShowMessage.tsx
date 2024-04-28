import { useEffect, useState } from "react"

export type OutputMessageAttributes = {
    show: boolean;
    message: string;
    status: boolean;
}

type InputDataAttributes = {
    data: {
        status: number;
        data: {
            message: string;
        }
    };
    error: {
        response: {
            status: number;
            data: {
                message: string;
            }
        }
    }
}

export default function useShowMessage<T>(axiosResponse: T): OutputMessageAttributes {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const data = axiosResponse as InputDataAttributes
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