import { useEffect, useState } from "react"

export default function useShowMessage(data: any) {
    const [showLoading, setShowLoading] = useState(false)
    useEffect(() => {
        setShowLoading(data.isLoading)
    }, [data.isLoading])
    return showLoading
}