import { ReactNode } from "react";
import { InputType } from "@/type";

type InputFormAttributes = {
    max?: number;
    step?: number;
    type?: InputType;
    title?: string;
    className?: string;
    read?: boolean;
    icon?: ReactNode;
    methodName: string;
    method: any;
    whiteText?: boolean
}
function InputForm({ max, step, type, title, className, read, icon, method, methodName,whiteText }: InputFormAttributes) {
    const { error } = method.getFieldState(methodName)
    return (
        <div className={`flex flex-col relative w-[100%] items-center`}>
            <label htmlFor='input' className={`font-sans text-left w-full ${whiteText ? 'text-white':'text-gray-700'}`}>{title}</label>
            <div id='input' className='flex w-full'>
                <input {...method.register(methodName)} max={max} step={step} type={type} className={`py-[7px] px-2 outline-none border border-gray-400 rounded-md mt-1 text-gray-800 hover:border-gray-400 w-full font-light ${className}`} readOnly={read} />
                {icon}
            </div>
            {error && <p className={`mt-1 px-[4px] text-sm font-light text-left w-full ${whiteText ? 'text-red-100':'text-red-600'}`}>{error.message}</p>}
        </div>
    )
}

export default InputForm