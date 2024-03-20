import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "./axios";

interface User {
    token: string;
    username: string;
    name: string;
    generalUser: boolean;
    role: string;
    sistem: string;
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
                            generalUser: res.data?.user?.generalUser,
                            role: res.data?.user?.sistem?.role?.nama_role,
                            sistem: res.data?.user?.sistem?.sistem?.nama_sistem,
                            superAdmin: res.data?.user?.sistem?.super_admin
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
                    geeneralUser: token.generalUser,
                    role: token.role,
                    sistem: token.sistem,
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
                    generalUser: e.generalUser,
                    role: e.role,
                    sistem: e.sistem,
                    superAdmin: e.superAdmin

                }
            }
            return token
        }
    }
}
