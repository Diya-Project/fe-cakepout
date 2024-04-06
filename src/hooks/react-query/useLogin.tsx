'use client'
import { AuthenticationAttributes } from "@/type";
import { SignInResponse, signIn } from "next-auth/react";


export async function UseLogin(data: AuthenticationAttributes): Promise<SignInResponse | undefined> {
    const login = await signIn('credentials', {
        redirect: false,
        username: data.username,
        password: data.password,
        callbackUrl: '/home/dashboard'
    })
    return login
}