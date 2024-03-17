import React from 'react'
import { Controller } from 'react-hook-form'

type RadioFormAttributes = {
    method: any;
    methodName: string;
    change?: (e: string | number) => void;
    id?: string | undefined;
    val?: string | number | undefined;
    title?: string
}

function RadioForm({ id, method, methodName, title, val, change }: RadioFormAttributes) {
    return (
        <div>
            <div className='flex w-full md:px-2'>
                <Controller
                    control={method.control}
                    name={methodName}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                    }) => {
                        return (
                            < input
                                onChange={(e) => {
                                    onChange(e.target.value)
                                    if (change) {
                                        change(e.target.value)
                                    }
                                }}
                                type="radio"
                                className={`w-4 h-4 mt-1`}
                                id={id}
                                value={val}
                                checked={val === value}
                                ref={ref}
                            />
                        )
                    }}

                />
                < label className='ml-2 text-md font-light'>{title}</label>
            </div>
        </div>)
}

export default RadioForm