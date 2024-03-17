import React, { ReactNode } from 'react'

type TextAreaFormAttributes = {
    method: any;
    methodName: string;
    className?: string;
    title: string;
}

function TextAreaForm({method,methodName,title,className}:TextAreaFormAttributes):ReactNode {
    const { error } = method.getFieldState(methodName)
    return (
        <div className={`flex flex-col ${className}`}>
            <label className='font-light text-gray-600'>{title}</label>
            <textarea {...method.register(methodName)} cols={50} rows={7} className={`py-[7px] px-2 outline-none border mt-1 w-full ${method.formState.errors[methodName] ? "border-red-600" : "border-[#624d4d] hover:border-slate-400"}`} />
            {error && <p className='text-red-600 mt-1 mx-1'>{error.message}</p>}

        </div>
    )
}

export default TextAreaForm