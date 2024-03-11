import { InputAttributes } from "./TypeFields"

export default function Input({ value, setValue,placeholder,type,read }: InputAttributes) {
    return (
        <input type={type} value={value} onChange={(e) => setValue(e.target.value)} className='px-2 py-1 rounded-md outline-none border border-slate-300 font-montserrat text-sm' placeholder={placeholder} disabled={read} />
    )
}
