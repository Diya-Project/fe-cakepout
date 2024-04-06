import { ChangeEventHandler, ReactNode } from "react"
import { InputType } from "@/type"

type InputAttributes = {
    id: string;
    title: string;
    value: string | number | undefined
    setValue: ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    type: InputType
    read?: boolean
}
export default function Input({ id, title, value, setValue, placeholder, type, read }: InputAttributes): ReactNode {
    return (
        <div className="flex flex-col">
            <label className="text-xs font-montserrat" htmlFor={id}>{title}</label>
            <input id={id} name="input" type={type} value={value} onChange={setValue} className='px-2 py-1 rounded-md outline-none border border-slate-300 font-montserrat text-sm' placeholder={placeholder} disabled={read} />
        </div>
    )
}
