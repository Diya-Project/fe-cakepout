'use client'
import Image from "next/image";
import Example from "@/assets/icons/example.png"
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import InputForm from "@/components/fields/InputForm";
import { UseLogin } from "@/hooks/react-query/useLogin";
import { ReactNode, useState } from "react";
import Loading from "@/components/templates/Loading";
import UseCheckHasLogin from "@/hooks/useCheckHasLogin";
import { AuthenticationAttributes } from "@/type";

export default function Login(): ReactNode {
    const [showLoading, setShowLoading] = useState(false)
    const [message, setMessage] = useState<string | null | undefined>()
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                username: yup.string().required('username cannot empty'),
                password: yup.string().min(8, 'password at least have 8 character').required('password cannot empty'),
            })
        )
    })
    const submit_ = async (e: FieldValues) => {
        setShowLoading(true)
        const isLogin = await UseLogin({ username: e.username, password: e.password, system: 'cakepout' })
        if (isLogin?.status === 200 && isLogin?.url) {
            setMessage('')
            window.location.href = '/home/ledger'
        } else {
            setMessage('Username / Password Salah')
        }
        setShowLoading(false)
    }
    UseCheckHasLogin()
    return (
        <div>
            <Loading show={showLoading} />
            <div className="flex justify-center items-center h-screen">
                <div className="md:w-[30vw] w-[95vw] rounded-xl shadow-xl border bg-sky-600">
                    <div className="p-4 flex items-center gap-2">
                        <Image loading="eager" placeholder="blur" src={Example} alt="" className="w-10 h-10 bg-white rounded-full p-1" />
                        <h1 className="font-semibold font-montserrat text-white text-lg">Cakepout</h1>
                    </div>
                    <form className="p-4 flex flex-col items-end" onSubmit={method.handleSubmit(submit_)}>
                        <InputForm id="input-username" title="Username" method={method} methodName="username" whiteText />
                        <InputForm id="input-password" title="Password" method={method} methodName="password" type="password" whiteText />
                        <h1 className="font-montserrat text-white text-left">{message}</h1>
                        <button type="submit" className="bg-white px-5 py-2 mt-4 flex font-montserrat text-sky-700 rounded-md hover:bg-slate-100 cursor-pointer outline-none">Login</button>
                    </form>
                </div>
            </div >
        </div>
    );
}
