'use client'
import { AuthenticationAttributes } from "@/type";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export async function UseLogin(data: AuthenticationAttributes) {
    // const [loading, setLoading] = useState(true)
    // let [message, setMessage] = useState('')
    // const navigation = useRouter()
    const login = await signIn('credentials', {
        redirect: false,
        username: data.username,
        password: data.password,
        callbackUrl: '/home/dashboard'
    })
    // if (!login?.error) {
    // setLoading(false)
    // navigation.push('/')
    // } else {
    // setLoading(false)
    // setMessage(JSON.parse(login.error))
    // }
    // return { loading: loading, message: message }
    return login
}