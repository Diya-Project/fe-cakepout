'use client'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

type Props = {
    children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props):ReactNode => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}