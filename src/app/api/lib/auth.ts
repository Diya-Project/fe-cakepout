import {  NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "../../../queries/api";

interface User {
    token: string;
    username: string;
    name: string;
    superAdmin: boolean
}


export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/'
    },
    providers: [
        CredentialsProvider({
            name: 'Sign In',
            credentials: {
                username: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                }
            },
            async authorize(credentials): Promise<any> {
                try {
                    const res = await api.post(`/authentication/login`, { username: credentials?.username, password: credentials?.password })
                    if (res.status === 200) {
                        return {
                            token: res.data?.token,
                            username: res.data.user?.username,
                            name: res.data?.user?.nama,
                            superAdmin: res.data?.user?.superAdmin
                        }
                    }
                } catch (e: unknown) {
                    throw new Error(JSON.stringify({ msg: 'Unauthorized', status: 401 }))
                }
            }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    token: token.token,
                    username: token.username,
                    name: token.name,
                    superAdmin: token.superAdmin
                }
            }
        },
        jwt: ({ token, user }) => {
            const e = user as unknown as User
            if (user) {
                return {
                    ...token,
                    token: e.token,
                    username: e.username,
                    name: e.name,
                    superAdmin: e.superAdmin

                }
            }
            return token
        }
    }
}
