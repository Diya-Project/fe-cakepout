'use client'
import React from 'react'
import { QueryClient, QueryClientProvider, hydrate } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export default function Provider({ children }: React.PropsWithChildren) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
