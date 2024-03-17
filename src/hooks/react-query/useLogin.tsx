'use client'
import { AuthenticationAttributes } from "@/type";
import { SignInResponse, signIn } from "next-auth/react";


export async function useLogin(data: AuthenticationAttributes): Promise<SignInResponse | undefined> {
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