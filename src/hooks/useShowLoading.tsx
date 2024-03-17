import { UseQueryResult } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export default function useShowMessage(data: UseQueryResult):boolean {
    const [showLoading, setShowLoading] = useState(false)
    useEffect(() => {
        setShowLoading(data.isLoading)
    }, [data.isLoading])
    return showLoading
}